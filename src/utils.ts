import { cx } from 'class-variance-authority';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassNameValue[]) => {
  return twMerge(cx(inputs));
};
