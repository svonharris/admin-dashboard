import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      {/* <AnimateSharedLayout> */}
      {expanded ? "Expanded" : <CompactCard params={props} />}
      {/* </AnimateSharedLayout> */}
    </div>
  );
};

//Compact Card
function CompactCard({ params }) {
  const Png = params.png;

  return (
    <div
      className="compactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>
      <div className="detail">
        <Png size={25} />
        <span>${params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

//Expanded Card
function ExpandedCard() {
  return <div className="expanedCard"></div>;
}

export default Card;
