import React, { useEffect } from "react";
import { IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import BottomNav from "../../components/BottomNav/page";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  let propData: any;

  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("propData");
    if (storedData) {
      propData = JSON.parse(storedData);
    } else {
      propData = {};
    }
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bar Chart Example",
      },
    },
  };

  const labels = [
    "city1",
    "city2",
    "city3",
    "city4",
    "city5",
    "city6",
    "city7",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 1000),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Charts</IonTitle>
      </IonToolbar>
      <IonContent className="h-screen">
        <Box className="h-full">
          <Bar options={options} data={data} />
        </Box>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default BarChart;
