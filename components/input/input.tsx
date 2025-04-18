import { ChangeEvent } from "react";
import "./input.css";

interface InputProps {
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({name, type, value, placeholder, onChange}: InputProps) => {
  return (
    <input 
      name={name}
      type={type} 
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
    />
  );
}

export default Input;