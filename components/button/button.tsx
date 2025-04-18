import { MouseEventHandler, ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  style?: "default" | "underlined";
};

const Button = ({ type = "button", onClick, children, style = "default" }: ButtonProps) => {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={style}
    >
      {children}
    </button>
  );
}

export default Button;