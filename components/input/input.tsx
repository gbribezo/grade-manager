import { ChangeEvent } from "react";
import "./input.css";

interface InputProps {
  id: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({id, type, value, placeholder, onChange}: InputProps) => {
  return (
    <input 
      id={id}
      type={type} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
    />
  );
}

export default Input;