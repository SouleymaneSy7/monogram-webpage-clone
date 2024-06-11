// import React from "react";
import { footerAddress } from "@/constants";

const FooterAddress = () => {
  const { title, addressList } = footerAddress;

  return (
    <div className="footer__children footer--address">
      <h3>{title}</h3>
      <address>
        {addressList.map((address, index) => {
          return <p key={index}>{address}</p>;
        })}
      </address>
    </div>
  );
};

export default FooterAddress;
