import React from "react";
import { MobileDropDown, headerDesktopNavlist } from "@/constants";
import Button from "./Button";
import DropDown from "./DropDown";
import NavList from "./NavList";
import { LogoIcon, HamburgerMenuIcon, ShopIcon } from "@/utils";

const HeaderNavList = () => {
  const { dropDownTitle } = MobileDropDown[0];

  const newTitle = dropDownTitle.replace(" ($)", "");

  return (
    <React.Fragment>
      <nav className="navigation">
        <a href="#" className="navigation__logo">
          <LogoIcon fill="currentColor" />
        </a>

        <div className="navigation--mobile">
          <Button type="button" className="navigation--mobile--hamburger-menu">
            <HamburgerMenuIcon width="30" height="30" fill="var(--link-clr)" />
          </Button>

          <div className="navigation--mobile--shop-btn">
            <Button type="button">
              <ShopIcon width="25" height="25" fill="var(--link-clr)" />
            </Button>
          </div>

          <div className="navigation--mobile--dropdown">
            <DropDown label={newTitle} options={MobileDropDown} />
          </div>
        </div>

        <div className="navigation--desktop">
          <ul className="navigation--desktop__list">
            {headerDesktopNavlist.map((navList, index) => {
              return <NavList list={navList} key={index} />;
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderNavList;
