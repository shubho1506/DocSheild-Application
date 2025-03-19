import React from "react"
import "../styles/input.css"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const classNames = ["input", className].filter(Boolean).join(" ")

  return <input type={type} className={classNames} ref={ref} {...props} />
})

Input.displayName = "Input"

export { Input }

