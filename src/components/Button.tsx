import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonPropsType = {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ type, children, ...props }: ButtonPropsType) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
