// Builds dist/signal.esm.js (React external), dist/signal.js (classic script → window.Signal,
// reads window.React) and dist/signal.css (tokens + component styles).
import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const globalReact = {
  name: 'global-react',
  setup(b) {
    b.onResolve({ filter: /^react(-dom)?$/ }, (args) => ({ path: args.path, namespace: 'global-react' }));
    b.onLoad({ filter: /.*/, namespace: 'global-react' }, (args) => ({
      contents: `module.exports = window.${args.path === 'react' ? 'React' : 'ReactDOM'};`,
      loader: 'js'
    }));
  }
};

const common = { entryPoints: ['src/index.ts'], bundle: true, target: 'es2019', jsx: 'transform', logLevel: 'info' };

await mkdir('dist', { recursive: true });
await build({ ...common, format: 'esm', outfile: 'dist/signal.esm.js', external: ['react', 'react-dom'] });
await build({
  ...common,
  format: 'iife',
  globalName: 'Signal',
  outfile: 'dist/signal.js',
  plugins: [globalReact],
  banner: { js: '/* Signal — classic script build. Load React 18 first; components are on window.Signal. */' }
});

const tokens = (await readFile('tokens/tokens.css', 'utf8')).replace(/url\("\.\.\/fonts\//g, 'url("../fonts/');
const styles = await readFile('src/styles/signal.css', 'utf8');
await writeFile('dist/signal.css', `${tokens}\n${styles}`);
console.log('dist/signal.css written');
