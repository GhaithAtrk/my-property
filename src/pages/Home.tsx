import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import Cards from "../components/Cards/page";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Home: React.FC = () => {
  const { propData }: any = useContext(DataContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyProperty</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="h-screen">
        <Cards propData={propData} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
