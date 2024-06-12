import DropDown from "./DropDown";
type NavListPropsTypes = {
  list: {
    title: string;
    dropDownMenu?: { id: number; dropDownTitle: string }[];
  };
};
const NavList = ({ list }: NavListPropsTypes) => {
  return (
    <li>
      {list.dropDownMenu ? (
        <DropDown label={list.title} options={list.dropDownMenu} />
      ) : (
        <a href="#">{list.title}</a>
      )}
    </li>
  );
};

export default NavList;
