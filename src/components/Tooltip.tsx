import { cn } from '@/utils';
import { ComponentPropsWithoutRef } from 'react';

type Div = ComponentPropsWithoutRef<'div'>;

export function Tooltip({ className, children, ...rest }: Div) {
  return (
    <div
      className={cn(
        'absolute flex h-[888px] w-[508px] flex-col gap-6 rounded-md bg-arc-muted px-8 py-4 text-black',
        className,
      )}
      {...rest}
    >
      <Heading className="flex flex-col gap-4">
        {/* badges & item name */}
      </Heading>
      <Description>{/* text desc */}</Description>
      <Attachments>{/* weapon-only possible attachment slots */}</Attachments>
      <Stats>{/* stats table */}</Stats>
      {children}
    </div>
  );
}

function Heading({ className, children, ...rest }: Div) {
  return (
    <div className={cn(className)} {...rest} data-slot="heading">
      {children}
    </div>
  );
}

function Description({ className, children, ...rest }: Div) {
  return (
    <div
      className={cn('font-secondary capitalize', className)}
      {...rest}
      data-slot="description"
    >
      {children}
    </div>
  );
}

function Attachments({ className, children, ...rest }: Div) {
  return (
    <div className={cn('', className)} {...rest} data-slot="attachments">
      {children}
    </div>
  );
}

function Stats({ className, children, ...rest }: Div) {
  return (
    <div className={cn('', className)} {...rest} data-slot="stats">
      {children}
    </div>
  );
}

export function StatsTable() {
  return (
    <table className="border-collapse font-secondary text-sm font-medium capitalize">
      <tbody className="even:bg-[#f3e7d7]">
        <tr className="border-b border-[#cec1b0]">
          <td className="py-2 pl-2">Durability</td>
          <td className="py-2 pr-2 text-right">56/100</td>
        </tr>
        <tr className="border-b border-[#cec1b0]">
          <td className="py-2 pl-2">Durability</td>
          <td className="py-2 pr-2 text-right">56/100</td>
        </tr>
      </tbody>
    </table>
  );
}

Tooltip.Heading = Heading;
Tooltip.Description = Description;
Tooltip.Attachments = Attachments;
Tooltip.Stats = Stats;
Tooltip.StatsTable = StatsTable;
