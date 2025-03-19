import React from "react"
import "../styles/card.css"

const Card = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card", className].filter(Boolean).join(" ")

  return <div ref={ref} className={classNames} {...props} />
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card-header", className].filter(Boolean).join(" ")

  return <div ref={ref} className={classNames} {...props} />
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card-title", className].filter(Boolean).join(" ")

  return <h3 ref={ref} className={classNames} {...props} />
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card-description", className].filter(Boolean).join(" ")

  return <p ref={ref} className={classNames} {...props} />
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card-content", className].filter(Boolean).join(" ")

  return <div ref={ref} className={classNames} {...props} />
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
  const classNames = ["card-footer", className].filter(Boolean).join(" ")

  return <div ref={ref} className={classNames} {...props} />
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

