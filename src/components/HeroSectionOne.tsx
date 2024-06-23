import { ChevronDownIcon } from "@/utils";
import { mainHero } from "@/constants";

const HeroSectionOne = () => {
  const { title, description, heroImg } = mainHero;

  return (
    <section
      className="main-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="main-hero__contents">
        <div>
          <h1 className="main-hero__title">{title}</h1>
          <p className="main-hero__description">{description}</p>
        </div>

        <a href="#Next" className="main-hero--link">
          <ChevronDownIcon width={45} height={45} fill="var(--light-clr)" />
        </a>
      </div>
    </section>
  );
};

export default HeroSectionOne;
