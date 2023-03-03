import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { chartOptions, randomColors } from "@/lib/app/charts";

function DoughnutChart() {
  const chartContainer = useRef(null);
  const chartConfig = {
    type: "doughnut",
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: randomColors(5),
          data: [2478, 5267, 734, 784, 433],
        },
      ],
    },
    options: {
      ...chartOptions,
      maintainAspectRatio: false,
    },
  };
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      return () => newChartInstance.destroy();
    }
  }, [chartContainer]);

  return (
    <div className="">
      <canvas ref={chartContainer} />
    </div>
  );
}
export default DoughnutChart;
