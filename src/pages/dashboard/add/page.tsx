import { IonContent, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useIonRouter } from "@ionic/react";
import { DataContext } from "../../../context/DataContext";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#A0AAB4",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
    "& input": {
      color: "#A0AAB4",
    },
  },
});

function Add() {
  const Router = useIonRouter();

  const [image, setImage] = useState<string | null>();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [slug, setSlug] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  const { propData }: any = useContext(DataContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newEntry = {
      title: title,
      city: city,
      location: location,
      state: state,
      price: price,
      slug: slug,
      type: type,
      rooms: rooms,
      bathrooms: bathrooms,
      image: image,
    };

    propData[newEntry.slug] = newEntry;

    localStorage.setItem("propData", JSON.stringify(propData));

    setTitle("");
    setImage(null);

    Router.push("/dashboard");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Add New Property</IonTitle>
      </IonToolbar>
      <IonContent className="h-screen">
        <Box>
          <form
            onSubmit={handleSubmit}
            className="p-4 mb-16 flex flex-col gap-8"
          >
            <Box className="flex flex-row justify-around items-center">
              <Box className={'w-[160px] h-[160px] border-4 border-red-gray'}>
                {image && (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-[150px] h-[150px]"
                  />
                )}
              </Box>
              <input
                accept="image/*"
                className="mb-4"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" className="w-fit">
                <Button variant="contained" component="span" className="">
                  Upload
                </Button>
              </label>
            </Box>
            <CssTextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
            />

            <CssTextField
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="Number Of Rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              fullWidth
              required
            />
            <CssTextField
              label="Number Of Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              fullWidth
              required
            />
            <Box className="text-center">
              <Button variant="contained" color="primary" type="submit">
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </IonContent>
    </IonPage>
  );
}

export default Add;
