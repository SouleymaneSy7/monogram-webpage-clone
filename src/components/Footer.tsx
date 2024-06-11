// import React from "react";
import { footerAddress } from "@/constants";

const Footer = () => {
  const { title, addressList } = footerAddress;

  return (
    <footer className="footer">
      <div className="footer__children footer--address">
        <p>{title}</p>
        <address>
          {addressList.map((address, index) => {
            return <p key={index}>{address}</p>;
          })}
        </address>
      </div>
    </footer>
  );
};

export default Footer;
