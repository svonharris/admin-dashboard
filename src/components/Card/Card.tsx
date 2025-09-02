import "./Card.css";
import { motion } from "motion/react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";

type CardProps = {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  value: string;
  png: React.ComponentType<{ size?: number }>;
  series: { name: string; data: number[] }[];
};

function Card(props: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      layoutId={`card-${props.title}`}
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      className={expanded ? "expandedCard" : "compactCard"}
      style={{
        background: props.color.backGround,
        boxShadow: props.color.boxShadow,
        borderRadius: "1rem",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? (
        <>
          <UilTimes
            onClick={() => setExpanded(false)}
            style={{ cursor: "pointer", fill: "white", alignSelf: "flex-end" }}
            size={30}
          />
          <span>{props.title}</span>
          <div className="chartContainer">
            <Chart
              series={props.series}
              type="area"
              options={{
                chart: { type: "area", height: "auto" },
                fill: { colors: ["#fff"], type: "gradient" },
                stroke: { curve: "smooth", colors: ["#fff"] },
                dataLabels: { enabled: false },
              }}
            />
          </div>
          <span>Last 24 hours</span>
        </>
      ) : (
        <>
          <div className="radialBar">
            <CircularProgressbar
              value={props.barValue}
              text={`${props.barValue}%`}
            />
            <span>{props.title}</span>
          </div>
          <div className="detail">
            <props.png size={25} />
            <span>${props.value}</span>
            <span>Last 24 hours</span>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Card;
