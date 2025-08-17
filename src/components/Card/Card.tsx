import "./Card.css";
import { motion, AnimatePresence } from "motion/react"; // motion.dev import
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <AnimatePresence mode="wait">
        {expanded ? (
          <ExpandedCard
            key="expanded"
            params={props}
            setExpanded={() => setExpanded(false)}
          />
        ) : (
          <CompactCard
            key="compact"
            params={props}
            setExpanded={() => setExpanded(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Compact Card
function CompactCard({ params, setExpanded }) {
  const Png = params.png;

  return (
    <motion.div
      layout
      initial={{ borderRadius: "1rem", opacity: 0 }}
      animate={{ borderRadius: "1rem", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="compactCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpanded}
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
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ params, setExpanded }) {
  return (
    <motion.div
      layout
      initial={{ borderRadius: "1rem", opacity: 0 }}
      animate={{ borderRadius: "1rem", opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="expandedCard"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
    >
      <div>
        <UilTimes onClick={setExpanded} style={{ cursor: "pointer" }} />
        <span>{params.title}</span>
        <div className="chartContainer">Chart</div>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

export default Card;
