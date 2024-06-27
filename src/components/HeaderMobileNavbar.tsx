import React from "react";
import { createPortal } from "react-dom";

import { CrossIcon, LogoIcon } from "@/utils";
import { headerMobileNavlist } from "@/constants";
import Button from "./Button";
import NavList from "./NavList";

const mobileNavDOM = document.querySelector("#mobile-navbar-root");

type HeaderMobileNavbarPropsTypes = {
  isOpen: boolean;
  handleOpen: () => void;
};

const HeaderMobileNavbar = ({
  isOpen,
  handleOpen,
}: HeaderMobileNavbarPropsTypes) => {
  return createPortal(
    <React.Fragment>
      <div
        className={
          isOpen ? "mobile-navbar-container active" : "mobile-navbar-container"
        }
      >
        <div className="mobile-navbar">
          <div className="mobile-navbar__header">
            <a href="#" className="mobile-navbar__logo">
              <LogoIcon height={38} fill="var(--link-clr)" />
            </a>

            <Button type="button" className="mobile-navbar--btn">
              <CrossIcon
                width={36}
                height={36}
                fill="var(--link-clr)"
                onClick={handleOpen}
              />
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
      </div>
    </React.Fragment>,
    mobileNavDOM!
  );
};

export default HeaderMobileNavbar;
