import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

const headingCn = cva('font-bold uppercase', {
  variants: {
    intent: {
      primary: 'font-primary text-2xl',
      secondary: 'font-secondary',
      tertiary: 'font-tertiary capitalize',
    },
  },
});

type HeadingVariants = VariantProps<typeof headingCn>;

export function Heading({
  intent,
  children,
  className,
  as: Component = 'h2',
  ...rest
}: ComponentPropsWithoutRef<'h1'> & {
  as?: React.ElementType;
} & HeadingVariants) {
  return (
    <Component className={twMerge(headingCn({ intent, className }))} {...rest}>
      {children}
    </Component>
  );
}
