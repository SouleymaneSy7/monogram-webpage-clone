import { footerSubscribe } from "@/constants";
import Inputs from "./Inputs";
import Button from "./Button";
import Icons from "./Icons";

const FooterSubscribe = () => {
  const { title, description, inputPlaceholder, buttonText, socialIcons } =
    footerSubscribe;

  return (
    <div className="footer__children footer--subscribe">
      <h3 className="footer--subscribe__title">{title}</h3>
      <p className="footer--subscribe__descritpion">{description}</p>

      <form className="footer--subscibe__form">
        <Inputs
          type="email"
          name="footer--email"
          className="footer--subscribe__input"
          placeholder={inputPlaceholder}
        />

        <Button type="submit" classNames="footer--subscribe--btn">
          {buttonText}
        </Button>
      </form>

      <ul className="footer--subscribe__social__list">
        {socialIcons.map((icon, index) => (
          <li key={index} className="footer--subscribe__social__list__item">
            <a href="#">
              <Icons iconSrc={icon} alt="social icons" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSubscribe;
