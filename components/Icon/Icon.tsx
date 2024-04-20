import { cva, type VariantProps } from "class-variance-authority"
import { icons, LucideProps } from "lucide-react"
import { forwardRef } from "react"
import { cn } from "lib/utils"

// Define icon variants
const iconVariants = cva("px-2", {
  variants: {
    sizes: {
      default: "w-9 h-9",
      xs: "w-6 h-6",
      sm: "w-10 h-10",
      md: "w-12 h-12",
      lg: "w-14 h-14",
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

  return <LucideIcon ref={ref} className={cn("rounded-full", iconVariants({ sizes, colors, className }))} {...props} />
})

Icon.displayName = "Icon"

export { iconVariants, Icon }
