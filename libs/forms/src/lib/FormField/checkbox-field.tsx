import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export const CheckboxField = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => <input type="checkbox" {...props} />;
