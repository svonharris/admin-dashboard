import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./CustomerReview.css";

const CustomerReview = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: "auto",
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
      colors: ["#ff929f"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2022-09-19T00:00:00.000Z",
        "2022-09-19T01:30:00.000Z",
        "2022-09-19T02:30:00.000Z",
        "2022-09-19T03:30:00.000Z",
        "2022-09-19T04:30:00.000Z",
        "2022-09-19T05:30:00.000Z",
        "2022-09-19T06:30:00.000Z",
      ],
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: "Review",
      data: [10, 50, 30, 90, 40, 120, 100],
    },
  ];

  return (
    <div className="CustomerReview">
      <Chart series={series} options={options} type="area" />
    </div>
  );
};

export default CustomerReview;
