// a user's home screen after they register/login

// TODO: show a list of upcoming commitments
// TODO: simulate a browser notification that leads the user to an upcoming event

// TODO: navbar with settings? (stretch goal)

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccessTime from "@mui/icons-material/AccessTime";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import LocationOn from "@mui/icons-material/LocationOn";
import Notifications from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";

import { Card, HomeWrapper, InnerTabPanel, JobKeyDetails } from "./Home.styles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return value !== index ? null : (
    <InnerTabPanel
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </InnerTabPanel>
  );
}

const JobCard = ({ job, hasActions }) => {
  const {
    title,
    location,
    dateTime,
    jobType,
    openings,
    reminders,
    description,
  } = job;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/driver.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          {openings && (
            <Typography variant="subtitle1" color="text.secondary">
              Available openings: {openings}
            </Typography>
          )}
          <JobKeyDetails>
            <Typography variant="body1">
              <LocationOn fontSize="small" />
              {location}
            </Typography>
            <Typography variant="body1">
              <AccessTime fontSize="small" />
              {dateTime}
            </Typography>
            <Typography variant="body1">
              <AccessibilityNew fontSize="small" />
              {jobType}
            </Typography>
          </JobKeyDetails>
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
          <ul>
            {reminders.map((reminder, index) => (
              <li key={index}>
                <Typography variant="body2" color="text.secondary">
                  {reminder}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
        {hasActions && (
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              Register
            </Button>
            <Button size="small" color="secondary">
              Learn More
            </Button>
          </CardActions>
        )}
      </CardActionArea>
    </Card>
  );
};

const registeredList = [
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "January 29, 2022 | 5:00pm-7:00pm",
    jobType: "Delivery Driver",
    reminders: ["Please wear a mask."],
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "January 29, 2022 | 5:00pm-7:00pm",
    jobType: "Delivery Driver",
    reminders: ["Please wear a mask."],
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const opportunitiesList = [
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "January 29, 2022 | 5:00pm-7:00pm",
    jobType: "Delivery Driver",
    openings: 3,
    reminders: ["Please wear a mask."],
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "January 29, 2022 | 5:00pm-7:00pm",
    jobType: "Delivery Driver",
    openings: 3,
    reminders: ["Please wear a mask."],
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createNotification = () => {
    const notification = new window.Notification("New opportunity posted", {
      body: "New Toronto Street Food Bank is looking for meal packers: February 10, 2022 | 12:00-5:00 PM.",
      data: "/commitment",
    });
    notification.onclick = function (e) {
      navigate(e.target.data);
    };
  };

  useEffect(() => {
    Notification.requestPermission().then(function (result) {
      console.log(result);
    });
  }, []);

  return (
    <HomeWrapper>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static">
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" component="h1">
                Home
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={createNotification}>
                <Notifications />
              </IconButton>
            </Grid>
          </Grid>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Registered" {...a11yProps(0)} />
            <Tab label="Opportunities" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {registeredList.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {opportunitiesList.map((job, index) => (
            <JobCard hasActions={true} key={index} job={job} />
          ))}
        </TabPanel>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
