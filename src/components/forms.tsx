import * as React from 'react';
import { cx } from '../utils';
import { Card } from './cards';

/* ------------------------------------------------------------------ TextField */

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'id'> {
  label: string;
  id?: string;
  /** Renders a 100px textarea that resizes vertically only. */
  multiline?: boolean;
  /** Message in color-error; sets aria-invalid and aria-describedby. */
  error?: string;
}

/** A labelled input or textarea. The label is always visible: the resting border is below 3:1 by design. */
export function TextField({ label, id, name, multiline, error, className, type = 'text', ...rest }: TextFieldProps) {
  const fieldId = id ?? name ?? label.toLowerCase().replace(/\W+/g, '-');
  const common = {
    id: fieldId,
    name,
    className: cx('sb-field__control', className),
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${fieldId}-error` : undefined,
    ...rest
  };
  return (
    <div className="sb-field">
      <label className="sb-field__label" htmlFor={fieldId}>{label}</label>
      {multiline ? <textarea {...(common as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} /> : <input type={type} {...common} />}
      {error ? <span className="sb-field__error" id={`${fieldId}-error`}>{error}</span> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ ContactForm */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  onSubmit?: (data: ContactFormData) => void | Promise<unknown>;
  status?: 'success' | 'error' | null;
  successText?: string;
  errorText?: string;
  className?: string;
}

/** "Send a message": Name, Email, Message (all required) and Send Message; status always in words. */
export function ContactForm({
  title = 'Send a message',
  subtitle = "Have a project in mind? I'd love to hear about it.",
  submitLabel = 'Send Message',
  onSubmit,
  status: initialStatus = null,
  successText = 'Message sent.',
  errorText = 'Message not sent. Check the fields and try again.',
  className
}: ContactFormProps) {
  const [status, setStatus] = React.useState(initialStatus);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;
    const els = e.currentTarget.elements;
    const value = (n: string) => (els.namedItem(n) as HTMLInputElement | null)?.value ?? '';
    Promise.resolve(onSubmit({ name: value('name'), email: value('email'), message: value('message') }))
      .then(() => setStatus('success'), () => setStatus('error'));
  };
  return (
    <Card title={title} subtitle={subtitle} className={className}>
      <form className="sb-contact-form" onSubmit={submit}>
        <TextField label="Name" id="name" name="name" required autoComplete="name" />
        <TextField label="Email" id="email" name="email" type="email" required autoComplete="email" />
        <TextField label="Message" id="message" name="message" multiline required />
        <button type="submit" className="sb-submit" title="Send this message to Sergio">{submitLabel}</button>
        {status ? (
          <p className={`sb-form-status sb-form-status--${status}`} role="status">
            {status === 'success' ? successText : errorText}
          </p>
        ) : null}
      </form>
    </Card>
  );
}
