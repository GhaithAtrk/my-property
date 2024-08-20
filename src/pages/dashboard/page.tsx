import { IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import BottomNav from "../../components/BottomNav/page";
import SearchBox from "../../components/SearchBox/page";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useIonRouter } from "@ionic/react";

function Dashboard() {
  const router = useIonRouter();

  let propData: any;

  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("propData");
    if (storedData) {
      propData = JSON.parse(storedData);
    } else {
      propData = {};
    }
  }

  function handleDelete(title: string) {
    let data = JSON.parse(localStorage.getItem("propData") || "{}");

    delete data[title];

    localStorage.setItem("propData", JSON.stringify(data));
  }

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Dashboard</IonTitle>
      </IonToolbar>
      <IonContent className="h-screen">
        <Box className="px-4 py-6 rounded-sm flex flex-row gap-2">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              router.push("/dashboard/add");
            }}
          >
            Add
          </Button>
          <SearchBox />
        </Box>
        {Object.entries(propData).map(([key, property]: [string, any]) => (
          <Box
            key={key}
            className="bg-gray-600 border-b-2 py-4 px-0 inline-flex flex-row justify-between w-full"
          >
            <Box className="flex w-fit flex-1 justify-center items-center">
              <img
                src={property.image}
                alt={property.slug}
                loading="lazy"
                className="w-[160px] rounded-sm"
              />
            </Box>
            <Box className="flex flex-col flex-1 w-fit justify-around items-center">
              <Box>
                <IonTitle className="text-sm">{property.location}</IonTitle>
              </Box>
              <Box className="flex flex-row gap-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    router.push("/dashboard/edit");
                  }}
                >
                  Edit
                </Button>
                <Button variant="contained" onClick={() => handleDelete(property.title)}>
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </IonContent>
      <BottomNav />
    </IonPage>
  );
}

export default Dashboard;
