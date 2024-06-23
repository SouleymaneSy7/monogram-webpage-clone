import { type ElementType } from "react";
import DropDown from "./DropDown";
import { ShopIcon } from "@/utils";

type NavListPropsTypes = {
  list: {
    title?: string | undefined;
    icon?: ElementType | null | undefined;
    dropDownMenu?: {
      id: number;
      dropDownTitle: string;
    }[];
  };
};

const NavList = ({ list }: NavListPropsTypes) => {
  return (
    <li>
      {list.dropDownMenu ? (
        <DropDown label={list.title} options={list.dropDownMenu} />
      ) : (
        <a href="#">
          {list.title || (
            <ShopIcon width="25" height="25" fill="currentColor" />
          )}
        </a>
      )}
    </li>
  );
};

export default NavList;
