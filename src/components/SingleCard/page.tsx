import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useIonRouter } from "@ionic/react";

export default function SingleCard({ card }: any) {

  const Router = useIonRouter();


  return (
    <Card
      sx={{ mx: "auto" }}
      onClick={() => {
        Router.push(`/property/${card.slug}`);
      }}
      className="w-[80%] md:w-1/4"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            location: {card.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {card.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
