import React from 'react'
import { twMerge } from "tailwind-merge"
interface ButtonProps {
  text: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({ text, className = '', onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={twMerge("text-black text-sm font-sans font-medium cursor-pointer lg:px-8 px-6 py-2 rounded-full capitalize",className)}
      style={{
        backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button