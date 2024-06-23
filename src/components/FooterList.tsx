import React from "react";
import { footerLinks, footerCopyright } from "@/constants";

const FooterList = () => {
  return (
    <React.Fragment>
      {footerLinks.map(({ id, title, linkList }) => (
        <div key={id} className="footer__children footer--nav">
          <h3 className="footer--nav__title">{title}</h3>
          <ul className="footer--nav__list">
            {linkList.map((link) => (
              <li key={link} className="footer--nav__list__item">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="footer__children footer--copyright">
        <p className="footer--copyright__text">{footerCopyright}</p>
      </div>
    </React.Fragment>
  );
};

export default FooterList;
