import DropDown from "./DropDown";
import Icons from "./Icons";

type NavListPropsTypes = {
  list: {
    title: string;
    icon?: string | undefined;
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
          {list.title || <Icons iconSrc={list.icon} alt="Shop Bag icon" />}
        </a>
      )}
    </li>
  );
};

export default NavList;
