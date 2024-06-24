import CardsBottom from "./CardsBottom";
import CardsTop from "./CardsTop";
import HeroSectionOne from "./HeroSectionOne";
import HeroSectionTwo from "./HeroSectionTwo";

const Main = () => {
  return (
    <main className="main">
      <HeroSectionOne />
      <CardsTop />
      <HeroSectionTwo />
      <CardsBottom />
    </main>
  );
};

export default Main;
