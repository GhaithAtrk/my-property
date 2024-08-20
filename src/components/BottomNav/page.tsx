import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from "@mui/icons-material/Home";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Charts from "@mui/icons-material/StackedLineChart";
import { useState } from "react";
import { useIonRouter } from "@ionic/react";

export default function BottomNav() {
  const Router = useIonRouter();

  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="fixed bottom-0 w-full"
    >
      <BottomNavigationAction
        onClick={() => {
          Router.push("/home");
        }}
        label="Home"
        icon={<Home />}
      />
      <BottomNavigationAction
        onClick={() => {
          Router.push("/dashboard");
        }}
        label="Dashboard"
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction
        onClick={() => {
          Router.push("/charts");
        }}
        label="Charts"
        icon={<Charts />}
      />
    </BottomNavigation>
  );
}
