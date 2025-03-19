import React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import "../styles/separator.css"

const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
  const classNames = [
    "separator",
    orientation === "horizontal" ? "separator-horizontal" : "separator-vertical",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={classNames}
      {...props}
    />
  )
})

Separator.displayName = "Separator"

export { Separator }

