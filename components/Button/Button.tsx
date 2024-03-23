import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-full",
    "hover:opacity-70",
    "text-center",
    "text-sm",
    "font-semibold",
    "border",
    "border-primary",
    "font-sans",
    "transition-colors",
    "delay-50",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary", "text-white", "hover:enabled:bg-primary/70", "shadow-[0_4px_20px_rgba(255,152,0,0.3)]"],
        secondary: ["bg-transparent", "text-primary", "hover:enabled:bg-primary", "hover:enabled:text-white"],
      },
      size: {
        sm: ["py-1.5", "px-4"],
        lg: ["py-3", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {
  underline?: boolean
  href: string
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <a className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </a>
  )
}
