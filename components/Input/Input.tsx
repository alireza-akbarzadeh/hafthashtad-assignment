import { cva, type VariantProps } from "class-variance-authority"
import { icons } from "lucide-react"
import * as React from "react"
import { cn } from "lib/utils"

import { Icon, IconProps } from "../Icon/Icon"
import { Label } from "../Label/Label"

const inputVariants = cva(
  "flex h-10 w-full rounded-md border placeholder:text-gray-500 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-primary text-primary-foreground hover:border-primary/90  focus-visible:ring-ring",
        destructive: "border-rose-600 focus:ring ring-rose-600  hover:border-rose-600/90",
        outline: "border-none",
        secondary: "border-secondary  hover:border-secondary/80",
        info: "border-sky-500/100 text-sky-foreground hover:ring-sky-600 ",
        ghost: "border-b",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
)

interface InputIconProps extends IconProps {
  position: "end" | "start"
  onIconCLick?: () => void
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  icon?: InputIconProps
  fullWidth?: boolean
  label?: string | React.ReactNode
  labelClassName?: string
  labelStyles?: React.CSSProperties
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, fullWidth, variant, type, icon, label, labelClassName, labelStyles, ...props }, ref) => {
    const { onIconCLick, className: iconClassName, name, position, ...restIconProps } = icon || {}
    return (
      <div className="relative">
        {label && (
          <Label className={labelClassName} style={labelStyles} htmlFor={props.id}>
            {label}
          </Label>
        )}
        <input type={type} className={cn(inputVariants({ className, fullWidth, variant }))} ref={ref} {...props} />
        {icon && (
          <Icon
            onClick={onIconCLick}
            className={cn(
              "absolute top-[50%]  ml-7  -translate-x-1/2 -translate-y-1/2 transform",
              {
                "right-0": position === "start",
                "left-0": position === "end",
              },
              iconClassName
            )}
            name={name as keyof typeof icons}
            {...restIconProps}
          />
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
Input.defaultProps = {
  fullWidth: false,
  label: false,
  labelClassName: "",
  labelStyles: {},
  icon: undefined,
}
export { Input }
