import "./input.css";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
};

const Input = ({id, type, placeholder}: InputProps) => {
  return (
    <input 
      id={id}
      type={type} 
      placeholder={placeholder}
      className="input"
    />
  );
}

export default Input;