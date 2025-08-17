import "./Card.css";
import { motion, AnimatePresence } from "motion/react"; // motion.dev import
import { useState } from "react";
import Chart from "react-apexcharts";
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
      // layoutId="expandableCard"
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
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#fff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

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
      // layoutId="expandableCard"
    >
      <UilTimes
        onClick={setExpanded}
        style={{ cursor: "pointer", fill: "white", alignSelf: "flex-end" }}
        size={30}
      />
      <span>{params.title}</span>
      <div className="chartContainer">
        <Chart
          series={params.series || []}
          type="area"
          options={data.options}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
