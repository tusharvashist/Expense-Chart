import React from "react";
import "./chart.scss";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const amounts = props.dataPoints.map((data) => data.value);
  const maxamount = Math.max(...amounts);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxamount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
