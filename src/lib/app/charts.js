export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
        padding: 20,
      },
    },
  },
};

export const randomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const randomColors = (length) => {
  return Array.from({ length }, randomColor);
};
