import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { chartOptions, randomColors } from "@/lib/app/charts";

function BarChart() {
  const chartContainer = useRef(null);
  const chartConfig = {
    type: "bar",
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
          data: [12, 19, 3, 5, 2, 3],
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
