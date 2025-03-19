import React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import "../styles/label.css"

const Label = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["label", className].filter(Boolean).join(" ")

  return <LabelPrimitive.Root ref={ref} className={classNames} {...props} />
})

Label.displayName = "Label"

export { Label }

