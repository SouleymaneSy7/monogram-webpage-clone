import { CrossIcon, LogoIcon } from "@/utils";
import { headerMobileNavlist } from "@/constants";
import Button from "./Button";
import NavList from "./NavList";

const HeaderMobileNavbar = () => {
  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar__header">
        <a href="#" className="mobile-navbar__logo">
          <LogoIcon height={38} fill="var(--link-clr)" />
        </a>

        <Button type="button" className="mobile-navbar--btn">
          <CrossIcon width={36} height={36} fill="var(--link-clr)" />
        </Button>
      </div>

      <nav className="mobile-navbar__navigation">
        <ul className="mobile-navbar__navigation__list">
          {headerMobileNavlist.map((navList) => {
            return <NavList list={navList} key={navList.id} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMobileNavbar;
