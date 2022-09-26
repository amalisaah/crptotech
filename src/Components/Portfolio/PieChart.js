import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default PieChart;