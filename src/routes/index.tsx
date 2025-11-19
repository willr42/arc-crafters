import { createFileRoute } from '@tanstack/react-router'
import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { ComponentPropsWithoutRef } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="grid min-h-screen grid-cols-3 font-secondary text-white">
      <div data-slot="item-database" className="bg-red-700 p-2">
        <Heading as="h1" intent="primary">
          Items
        </Heading>
        <label htmlFor="search" className="flex flex-col gap-2">
          Search
          <input
            id="search"
            name="search"
            type="search"
            className="max-w-[50ex] rounded-sm border border-black bg-white px-1 py-2 shadow-xs"
            placeholder={'Advanced Mechanical Components Blueprint'}
          />
        </label>
        <div className="grid grid-cols-4">
          <div className="gradient-legendary">
            <img
              src="https://cdn.arctracker.io/items/anvil.png"
              className="p-2"
            />
          </div>
        </div>
      </div>
      <div data-slot="shopping-list" className="bg-blue-700 p-2">
        <Heading as="h1" intent="primary">
          Wishlist
        </Heading>
      </div>
      <div data-slot="stash" className="bg-green-700 p-2">
        <Heading as="h1" intent="primary">
          My stash
        </Heading>
      </div>
    </div>
  )
}
const headingCn = cva('font-bold uppercase', {
  variants: {
    intent: {
      primary: 'font-primary text-2xl',
      secondary: 'font-secondary',
      tertiary: 'font-tertiary capitalize',
    },
  },
})
type HeadingVariants = VariantProps<typeof headingCn>

const Heading = ({
  intent,
  children,
  className,
  as: Component = 'h2',
  ...rest
}: ComponentPropsWithoutRef<'h1'> & {
  as?: React.ElementType
} & HeadingVariants) => {
  return (
    <Component className={twMerge(headingCn({ intent, className }))} {...rest}>
      {children}
    </Component>
  )
}
