import FooterAddress from "./FooterAddress";
import FooterList from "./FooterList";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterAddress />
      <FooterSubscribe />
      <FooterList />
    </footer>
  );
};

export default Footer;
