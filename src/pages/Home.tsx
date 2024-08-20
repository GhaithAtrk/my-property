import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import BottomNav from "../components/BottomNav/page";
import Cards from "../components/Cards/page";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyProperty</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="h-screen">
        <Cards />
      </IonContent>
      <BottomNav />
    </IonPage>
  );
};

export default Home;
