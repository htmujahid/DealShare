import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { chartOptions, randomColors } from "@/lib/app/charts";

function BarChart() {
  const chartContainer = useRef(null);
  const chartConfig = {
    type: "bubble",
    data: {
      labels: [
        "Chicago",
        "New York",
        "Cape Town",
        "Los Angeles",
        "San Francisco",
        "Seattle",
      ],
      datasets: [
        {
          label: "# of orders",
          data: [
            {
              x: 12,
              y: 19,
              r: 15,
            },
            {
              x: 19,
              y: 3,
              r: 10,
            },
            {
              x: 3,
              y: 5,
              r: 5,
            },
            {
              x: 5,
              y: 2,
              r: 2,
            },
            {
              x: 2,
              y: 3,
              r: 1,
            },
            {
              x: 3,
              y: 1,
              r: 1,
            },
          ],
          backgroundColor: randomColors(6),
          borderWidth: 1,
        },
      ],
    },
    options: {
      ...chartOptions,
    },
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      return () => newChartInstance.destroy();
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}

export default BarChart;
