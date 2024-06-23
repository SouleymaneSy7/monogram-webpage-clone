import { footerSubscribe } from "@/constants";
import Inputs from "./Inputs";
import Button from "./Button";

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

        <Button type="submit" className="footer--subscribe--btn">
          {buttonText}
        </Button>
      </form>

      <ul className="footer--subscribe__social__list">
        {socialIcons.map((Icon, index) => (
          <li key={index} className="footer--subscribe__social__list__item">
            <a href="#">
              <Icon fill="var(--primary-clr)" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSubscribe;
