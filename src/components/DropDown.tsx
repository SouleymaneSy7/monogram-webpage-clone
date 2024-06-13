import React from "react";
import { type ReactNode } from "react";
import Button from "./Button";

type DropDownPropsTypes = {
  label: ReactNode;
  options: {
    id: number;
    dropDownTitle: string;
  }[];
};

const DropDown = ({ label, options }: DropDownPropsTypes) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <div>
        <Button type="button" className="dropdown--btn" onClick={handleExpand}>
          {label}
        </Button>

        {expanded && (
          <div className="dropdown--content">
            <ul className="dropdown--content__list">
              {options.map((option) => {
                return (
                  <li
                    key={option.id}
                    className="dropdown--content__list__items"
                  >
                    <a href="#">{option.dropDownTitle}</a>
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
