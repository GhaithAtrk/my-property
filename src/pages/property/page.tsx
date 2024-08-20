import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import BottomNav from "../../components/BottomNav/page";
import { Box } from "@mui/material";

const PropertyPage: React.FC = () => {
  const { routeInfo } = useIonRouter();

  const slug: any = routeInfo.pathname.split("/").pop();

  let propData: any = {};

  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("propData");
    if (storedData) {
      propData = JSON.parse(storedData);
    } else {
      propData = {};
    }
  }

  if (!propData || !propData[slug]) {
    return (
      <IonPage>
        <IonContent className="ion-text-center ion-padding">
          Loading..........
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{propData[slug].title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-flex-grow-1">
        <img
          src={propData[slug].image}
          alt="product-image"
          width={400}
          height={400}
        />
        <Box className="p-4 flex flex-col gap-4">
          <Box>Location: {propData[slug].location}</Box>
          <Box>City: {propData[slug].city}</Box>
          <Box>State: {propData[slug].state}</Box>
          <Box>Asking price: {propData[slug].price}</Box>
          <Box>Type Of Property: {propData[slug].type}</Box>
          <Box>Number Of Rooms: {propData[slug].rooms}</Box>
          <Box>Number Of Bathrooms: {propData[slug].bathrooms}</Box>
        </Box>
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default PropertyPage;
