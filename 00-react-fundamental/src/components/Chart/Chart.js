import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const total = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          totalValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
