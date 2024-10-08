import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/page";
import PropertyPage from "./pages/property/page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Charts from "./pages/charts/page";
import Add from "./pages/dashboard/add/page";
import Edit from "./pages/dashboard/edit/page";
import BottomNav from "./components/BottomNav/page";
import { DataProvider } from "./context/DataContext";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <DataProvider>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/charts">
            <Charts />
          </Route>
          <Route exact path="/dashboard/add">
            <Add />
          </Route>
          <Route exact path="/dashboard/edit/:slug">
            <Edit />
          </Route>
          <Route path="/property/:slug" component={PropertyPage} />
        </DataProvider>
      </IonRouterOutlet>
      <BottomNav />
    </IonReactRouter>
  </IonApp>
);

export default App;
