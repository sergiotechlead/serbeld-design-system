import * as React from 'react';
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'id'> {
    label: string;
    id?: string;
    /** Renders a 100px textarea that resizes vertically only. */
    multiline?: boolean;
    /** Message in color-error; sets aria-invalid and aria-describedby. */
    error?: string;
}
/** A labelled input or textarea. The label is always visible: the resting border is below 3:1 by design. */
export declare function TextField({ label, id, name, multiline, error, className, type, ...rest }: TextFieldProps): React.JSX.Element;
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
export declare function ContactForm({ title, subtitle, submitLabel, onSubmit, status: initialStatus, successText, errorText, className }: ContactFormProps): React.JSX.Element;
