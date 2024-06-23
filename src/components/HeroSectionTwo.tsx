import { sectionHero } from "@/constants";

const HeroSectionTwo = () => {
  const { title, description, sectionHeroImg } = sectionHero;

  return (
    <section
      className="section-hero"
      style={{ backgroundImage: `url(${sectionHeroImg})` }}
    >
      <div className="section-hero__contents">
        <div>
          <h1 className="section-hero__title">{title}</h1>
          <p className="section-hero__description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
