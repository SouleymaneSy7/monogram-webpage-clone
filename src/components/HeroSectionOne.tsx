import Icons from "./Icons";
import { mainHero } from "@/constants";

const HeroSectionOne = () => {
  const { title, description, heroImg, heroIcon } = mainHero;

  return (
    <section className="main-hero">
      <div className="main-hero__img">
        <img src={heroImg} alt="A Music Pad Images" />
      </div>

      <div className="main-hero__contents">
        <div>
          <h1 className="main-hero__title">{title}</h1>
          <p className="main-hero__description">{description}</p>
        </div>

        <a href="#Next" className="main-hero--link">
          <Icons iconSrc={heroIcon} alt="Chevron Down Icons" />
        </a>
      </div>
    </section>
  );
};

export default HeroSectionOne;
