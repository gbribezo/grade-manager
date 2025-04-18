import { CSSProperties, ReactNode } from "react";
import "./container.css";

interface ContainerProps {
  width?: string;  // Tornando a prop `width` opcional
  title: string;
  children: ReactNode;
}

const Container = ({ width = "100%", title, children }: ContainerProps) => {
  const style: CSSProperties = { width };

  return (
    <div className="container-center">
      <div
        style={style}
        className="container-style"
      >
        <h1 className="container-title">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default Container;
