import { IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import SearchBox from "../../components/SearchBox/page";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useIonRouter } from "@ionic/react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Dashboard() {
  const router = useIonRouter();

  const { propData, setPropData }: any = useContext(DataContext);

  function handleDelete(slug: string) {
    const updatedData = { ...propData };
    delete updatedData[slug];
    setPropData(updatedData);
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
        <Box className="mb-14">
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
                  <IonTitle className="text-sm">{property.title}</IonTitle>
                </Box>
                <Box className="flex flex-row gap-2">
                  <Button
                    variant="contained"
                    onClick={() => {
                      router.push(`/dashboard/edit/${property.slug}`);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(property.slug)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </IonContent>
    </IonPage>
  );
}

export default Dashboard;
