import React from "react";
import { topCards } from "@/constants";
import Cards from "./Cards";

const CardsTop = () => {
  return (
    <section className="top-cards">
      <div className="container">
        {topCards.map(
          ({
            id,
            cardTitle,
            cardDescription,
            cardImg,
            cardImgHover,
            cardPrice,
          }) => {
            return (
              <React.Fragment key={id}>
                <Cards
                  cardImg={cardImg}
                  cardImgHover={cardImgHover}
                  cardTitle={cardTitle}
                  cardPrice={cardPrice}
                  cardDescription={cardDescription}
                />
              </React.Fragment>
            );
          }
        )}
      </div>
    </section>
  );
};

export default CardsTop;
