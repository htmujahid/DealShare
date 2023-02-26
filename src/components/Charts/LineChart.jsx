import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { chartOptions } from "@/lib/app/charts";
function LineChart() {
  const chartContainer = useRef(null);
  const chartConfig = {
    type: "line",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Sales",
          data: [4, 7, 3, 5, 2, 3, 1, 4, 2, 3, 5, 2],
          fill: false,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgb(75, 192, 192)",
          tension: 0.5,
        },
        {
          label: "Expenses",
          data: [2, 3, 5, 2, 4, 7, 3, 5, 2, 3, 1, 4],
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          tension: 0.5,
        },
      ],
    },
    options: chartOptions,
  };
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      return () => newChartInstance.destroy();
    }
  }, [chartContainer]);
  return <canvas ref={chartContainer} />;
}

export default LineChart;
