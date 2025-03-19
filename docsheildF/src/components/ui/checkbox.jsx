import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import "../styles/checkbox.css"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["checkbox-root", className].filter(Boolean).join(" ")

  return (
    <CheckboxPrimitive.Root ref={ref} className={classNames} {...props}>
      <CheckboxPrimitive.Indicator className="checkbox-indicator">
        <Check className="checkbox-check" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = "Checkbox"

export { Checkbox }

