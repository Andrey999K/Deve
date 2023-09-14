import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../App";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2.5,
  scales: {
    y: {
      min: 0,
      max: 20,
      ticks: {
        stepSize: 5, // шаг значений, т.е. количество меток,
        font: {
          family: "ManropeRegular",
          size: 13,
          weight: "regular"
        }
      }
    },
    x: {
      ticks: {
        font: {
          family: "ManropeRegular",
          size: 13,
          weight: "regular"
        }
      }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    line: {
      tension: 0.4 // установите значение tension для плавной линии
    },
    point: {
      radius: 0
    }
  }
};

function getDatesArray(startDateStr, endDateStr) {
  const datesArray = [];
  const date = new Date(startDateStr);

  while (date <= new Date(endDateStr)) {
    const day = date.getDate().toString().padStart(2, "0");
    datesArray.push(day);

    date.setDate(date.getDate() + 1);
  }

  return datesArray;
}

const Chart = ({ from, to }) => {
  const { darkTheme } = useContext(ThemeContext);
  const labels = getDatesArray(from, to);
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => Math.random() * 20),
        borderColor: darkTheme ? "#FFFFFF" : "#1F1F21"
      }
    ]
  };
  return <Line options={options} data={data} />;
};

Chart.propTypes = {
  from: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};

export default Chart;
