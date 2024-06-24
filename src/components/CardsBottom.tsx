import React from "react";
import { bottomCards } from "@/constants";
import Cards from "./Cards";

const CardsBottom = () => {
  return (
    <section className="bottom-cards">
      <div className="container">
        {bottomCards.map(
          ({ id, cardTitle, cardImg, cardImgHover, cardPrice }) => {
            return (
              <React.Fragment key={id}>
                <Cards
                  cardImg={cardImg}
                  cardImgHover={cardImgHover}
                  cardTitle={cardTitle}
                  cardPrice={cardPrice}
                />
              </React.Fragment>
            );
          }
        )}
      </div>
    </section>
  );
};

export default CardsBottom;
