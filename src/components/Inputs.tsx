import { type ComponentPropsWithoutRef } from "react";

type InputsProps = {
  placeholder: string;
} & ComponentPropsWithoutRef<"input">;

const Inputs = ({ placeholder, ...props }: InputsProps) => {
  return <input placeholder={placeholder} {...props} />;
};

export default Inputs;
