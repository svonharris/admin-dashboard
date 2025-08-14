import "./Cards.css";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";
// import { div } from "framer-motion/client";

export const Cards = () => {
  return (
    <div className="cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};
