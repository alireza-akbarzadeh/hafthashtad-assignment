import { cva, type VariantProps } from "class-variance-authority"
import { icons, LucideProps } from "lucide-react"
import { forwardRef } from "react"
import { cn } from "lib/utils"

// Define icon variants
const iconVariants = cva("px-2", {
  variants: {
    sizes: {
      default: "size-10",
      xs: "w-8 h-8",
      sm: "w-12 h-12",
      md: "w-14 h-14",
      lg: "w-16 h-16",
    },
    colors: {
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    sizes: "default",
    colors: "primary",
  },
})

export interface IconProps extends Omit<LucideProps, "ref">, VariantProps<typeof iconVariants> {
  name: keyof typeof icons
}

const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, colors, className, sizes, ...props }, ref) => {
  const LucideIcon = icons[name]

  return (
    <LucideIcon
      ref={ref}
      className={cn("size-5 rounded-full", iconVariants({ sizes, colors, className }))}
      {...props}
    />
  )
})

Icon.displayName = "Icon"

export { iconVariants, Icon }
