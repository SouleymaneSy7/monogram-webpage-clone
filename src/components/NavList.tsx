/* eslint-disable @typescript-eslint/no-explicit-any */
import DropDown from "./DropDown";

type NavListPropsTypes = {
  list: {
    title?: string | undefined;
    icon?: any;
    dropDownMenu?: {
      id: number;
      dropDownTitle: string;
    }[];
  };
};

const NavList = ({ list }: NavListPropsTypes) => {
  const { icon } = list;

  const Icon = icon;

  return (
    <li>
      {list.dropDownMenu ? (
        <DropDown label={list.title} options={list.dropDownMenu} />
      ) : (
        <a href="#">
          {list.title || <Icon width="25" height="25" fill="currentColor" />}
        </a>
      )}
    </li>
  );
};

export default NavList;
