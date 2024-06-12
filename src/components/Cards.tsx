import Button from "./Button";

type CardPropsTypes = {
  cardImg: string;
  cardImgHover?: string | undefined;
  cardTitle: string;
  cardDescription?: string | null;
  cardPrice: string;
};

const Cards = ({
  cardImg,
  cardImgHover,
  cardTitle,
  cardDescription,
  cardPrice,
}: CardPropsTypes) => {
  let description;
  let imgHover;
  let badge;

  if (cardDescription) {
    description = (
      <p className="card__footer__description">{cardDescription}</p>
    );
  }

  if (cardImgHover) {
    imgHover = (
      <img
        src={cardImgHover}
        className="card__img card__img--hover"
        alt="Product Images"
      />
    );

    badge = (
      <div className="card__badge">
        <p>Pre-order</p>
      </div>
    );
  }

  return (
    <article className="card">
      <header className="card__header">
        <a href="#" title={cardTitle}>
          <div className="card__header__img">
            <img src={cardImg} className="card__img" alt="Products Images" />
            {imgHover}
          </div>

          {badge}
        </a>
      </header>

      <footer className="card__footer">
        <a href="#" title={cardTitle}>
          <div className="card__footer__flex">
            <h2 className="card__footer__title">{cardTitle}</h2>

            <div>
              <p className="card__footer__price">{cardPrice}</p>
              <Button type="button" className="card__footer--btn">
                Shop Now
              </Button>
            </div>
          </div>

          {description}
        </a>
      </footer>
    </article>
  );
};

export default Cards;
