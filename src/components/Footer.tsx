import FooterAddress from "./FooterAddress";
import FooterList from "./FooterList";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterAddress />
        <FooterSubscribe />
        <FooterList />
      </div>
    </footer>
  );
};

export default Footer;
