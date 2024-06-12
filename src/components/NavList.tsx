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
  const { title, icon } = list;

  let label;

  if (icon) {
    label = (
      <div>
        <Icons iconSrc={icon} alt="Shop icons" />
        {title}
      </div>
    );
  }

  return (
    <li>
      {list.dropDownMenu ? (
        list.icon ? (
          <DropDown label={label} options={list.dropDownMenu} />
        ) : (
          <DropDown label={list.title} options={list.dropDownMenu} />
        )
      ) : (
        <a href="#">{list.title}</a>
      )}
    </li>
  );
};

export default NavList;
