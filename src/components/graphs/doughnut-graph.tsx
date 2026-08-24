"use client";

import { GraphData } from "@/types";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { plugins } from "chart.js/auto";

interface Props {
  data: GraphData;
}

const options = {
  layout: {
    padding: {
      bottom: 16,
    },
  },

  plugins: {
    legend: {
      position: "bottom",
      labels: { usePointStyle: true },
    },
  },
  responsive: true,
  // percentage, not a fixed px value — a fixed cutout can exceed the
  // chart's own outer radius on narrow (mobile) canvases, making the
  // ring's band width collapse to zero so nothing draws
  cutout: "65%",
  maintainAspectRatio: true,
} as const;

const DoughnutGraph: FC<Props> = ({ data }) => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutGraph;
