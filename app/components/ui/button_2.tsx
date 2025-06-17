import React from 'react'
import { twMerge } from "tailwind-merge"
interface ButtonProps {
  text: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

const Button_2: React.FC<ButtonProps> = ({ text, className = '', onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={twMerge("text-black text-sm font-sans font-medium cursor-pointer lg:px-8 px-6 py-2 rounded-full capitalize",className)}
      style={{
        backgroundImage: 'linear-gradient(to right, #AD974E, #674C19)',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button_2