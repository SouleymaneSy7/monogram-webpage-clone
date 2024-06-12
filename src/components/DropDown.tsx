import React from "react";
import { type ReactNode } from "react";
// import Button from "./Button";

type DropDownPropsTypes = {
  label: ReactNode;
  options: string[];
};

const DropDown = ({ label, options }: DropDownPropsTypes) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <div>
        <button type="button" className="dropdown--btn" onClick={handleExpand}>
          {label}
        </button>

        {expanded && (
          <div>
            <ul>
              {options.map((option, index) => {
                return (
                  <li key={index}>
                    <a href="#">{option}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default DropDown;
