import { type ReactNode } from "react";

type ButtonPropsType = {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  classNames: string;
};

const Button = ({ type, children, classNames }: ButtonPropsType) => {
  return (
    <button type={type} className={`${classNames} | button`}>
      {children}
    </button>
  );
};

export default Button;
