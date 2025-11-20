import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

export function ItemCard({className, children, ...rest}: ComponentPropsWithoutRef<'div'>) {
   return (
    <div className={cn('w-[125px] h-[125px]',className)} {...rest}>{children}</div>
   ) 
}
