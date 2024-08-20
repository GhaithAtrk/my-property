import React, { useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { Box } from "@mui/material";
import { DataContext } from "../../context/DataContext";

const PropertyPage: React.FC = () => {
  const { routeInfo } = useIonRouter();

  const slug: any = routeInfo.pathname.split("/").pop();

  const { propData }: any = useContext(DataContext);

  if (!propData || !propData[slug]) {
    return (
      <IonPage>
        <IonContent className="ion-text-center ion-padding">
          Loading.....
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
        <Box className="">
          <img
            src={propData[slug].image}
            alt="product-image"
            className="w-full md:w-[60%] mx-auto"
          />
        </Box>
        <Box className="p-4  mb-20">
          <Box className="flex flex-col gap-4 mx-auto md:w-[60%]">
            <Box>Location: {propData[slug].location}</Box>
            <Box>City: {propData[slug].city}</Box>
            <Box>State: {propData[slug].state}</Box>
            <Box>Asking price: {propData[slug].price}</Box>
            <Box>Type Of Property: {propData[slug].type}</Box>
            <Box>Number Of Rooms: {propData[slug].rooms}</Box>
            <Box>Number Of Bathrooms: {propData[slug].bathrooms}</Box>
          </Box>
        </Box>
      </IonContent>
    </IonPage>
  );
};

export default PropertyPage;
