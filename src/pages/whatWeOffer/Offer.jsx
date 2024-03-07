import Card from "../../components/UI/card/Card";
import styles from "./Offer.module.css";
import { cardData } from "./data/OfferData";

const Offers = () => {

  return (
    <div className={styles.offerContainer}>
      <h2 className={styles.heading}> What We Offer</h2>
      <div className={styles.offers}>
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
