// Display a commitment that a user can accept

import { useState } from "react";
import { google } from "calendar-link";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import AccessTime from "@mui/icons-material/AccessTime";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import LocationOn from "@mui/icons-material/LocationOn";
import Event from "@mui/icons-material/Event";

import {
  Card,
  PageWrapper,
  JobKeyDetails,
  InnerTabPanel,
  CardActions,
} from "./App.styles";

// Set event as an object
const event = {
  title: "Meal Delivery",
  description:
    "Pick up and deliver meals from New Toronto Street Food Bank to 25 Toronto area households.",
  start: "2022-01-30 18:00:00 +0100",
  duration: [3, "hour"],
};

const Commitment = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <PageWrapper>
      <AppBar position="static">
        <Typography variant="h6" component="h1">
          Registration: Meal Delivery
        </Typography>
      </AppBar>
      <InnerTabPanel>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/driver.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Meal Delivery
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Available openings: 3
            </Typography>
            <JobKeyDetails>
              <Typography variant="body1">
                <LocationOn fontSize="small" />
                Greater Toronto Area
              </Typography>
              <Typography variant="body1">
                <AccessTime fontSize="small" />
                January 30, 2022 | 5:00-8:00 PM
              </Typography>
              <Typography variant="body1">
                <AccessibilityNew fontSize="small" />
                Delivery driver
              </Typography>
            </JobKeyDetails>
            <Typography variant="body2" color="text.secondary" component="p">
              Pick up and deliver meals from New Toronto Street Food Bank to 25
              Toronto area households.
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Masks and gloves required for this role.
                </Typography>
              </li>
            </ul>
            {registered && (
              <Typography variant="h4" component="h4" mt={3}>
                Registered
              </Typography>
            )}
          </CardContent>
          <CardActions>
            {!registered ? (
              <Button
                onClick={() => {
                  setRegistered(true);
                }}
                size="small"
                variant="contained"
                color="secondary"
              >
                Register Now
              </Button>
            ) : (
              <Button
                onClick={() => {
                  window.open(google(event));
                }}
                size="small"
                variant="contained"
                color="info"
                startIcon={<Event />}
              >
                Add to Calendar
              </Button>
            )}
          </CardActions>
          <CardContent>
            <Typography variant="h6" component="h3">
              About the New Toronto Street Food Bank
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="p"
              gutterBottom
            >
              I'm baby kogi cardigan keffiyeh edison bulb, slow-carb readymade
              craft beer freegan artisan tofu shoreditch. Tofu thundercats cloud
              bread iPhone everyday carry salvia williamsburg. XOXO hot chicken
              woke kinfolk. Letterpress actually you probably haven't heard of
              them la croix vinyl af, banjo unicorn scenester neutra flexitarian
              hexagon. Godard hell of pickled VHS aesthetic. Meditation twee
              helvetica everyday carry iceland.
            </Typography>
            <Typography variant="body1" color="text.secondary" component="p">
              Wolf affogato ethical, post-ironic sriracha shaman cliche godard.
              Sartorial cray succulents offal, thundercats butcher four dollar
              toast skateboard before they sold out copper mug. Viral bicycle
              rights 90's sriracha salvia, tilde vexillologist helvetica banjo
              umami. Pabst organic iceland swag, bushwick semiotics pug.
              Aesthetic chia skateboard microdosing cliche offal pop-up
              post-ironic ethical bespoke, ramps portland polaroid.
            </Typography>
          </CardContent>
        </Card>
      </InnerTabPanel>
    </PageWrapper>
  );
};

export default Commitment;
