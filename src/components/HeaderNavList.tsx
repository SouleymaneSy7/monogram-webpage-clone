import React from "react";
import { logoIcon, hamburgerMenuIcon, shopIcon } from "@/utils";
import { MobileDropDown, headerDesktopNavlist } from "@/constants";
import Button from "./Button";
import Icons from "./Icons";
import DropDown from "./DropDown";
import NavList from "./NavList";

const HeaderNavList = () => {
  const { dropDownTitle } = MobileDropDown[0];

  return (
    <React.Fragment>
      <nav className="navigation">
        <a href="#" className="navigation__logo">
          <img src={logoIcon} alt="Monogram Website Logo Icon" />
        </a>

        <div className="navigation--mobile">
          <Button type="button" className="navigation--mobile--hamburger-menu">
            <Icons iconSrc={hamburgerMenuIcon} alt="Hamburger Menu Icon" />
          </Button>

          <div className="navigation--mobile--shop-btn">
            <Button type="button">
              <Icons iconSrc={shopIcon} alt="A Bag Icon" />
            </Button>
          </div>

          <div className="navigation--mobile--dropdown">
            <DropDown label={dropDownTitle} options={MobileDropDown} />
          </div>
        </div>

        <div className="navigation--desktop">
          <ul>
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
