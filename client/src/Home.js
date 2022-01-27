// a user's home screen after they register/login

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MuiCardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccessTime from "@mui/icons-material/AccessTime";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import LocationOn from "@mui/icons-material/LocationOn";
import Notifications from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid";

import {
  Card,
  PageWrapper,
  InnerTabPanel,
  JobKeyDetails,
  CardActions,
} from "./App.styles";

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

const JobCard = ({ job, registeredActions, opportunityActions }) => {
  const {
    title,
    location,
    dateTime,
    jobType,
    openings,
    reminders,
    description,
    poster,
  } = job;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={poster}
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
      {opportunityActions && (
        <CardActions>
          <Button size="small" variant="contained" color="secondary">
            Register
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      )}
      {registeredActions && (
        <MuiCardActions>
          <Button size="small" color="error">
            Cancel Event
          </Button>
        </MuiCardActions>
      )}
    </Card>
  );
};

const registeredList = [
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "January 29, 2022 | 5:00-8:00 PM",
    jobType: "Delivery Driver",
    reminders: [
      "Please arrive 15 minutes early to sign in and load your vehicle.",
      "Masks and gloves required for this role.",
    ],
    description:
      "Pick up and deliver meals from New Toronto Street Food Bank to 25 Toronto area households.",
    poster: "/driver.png",
  },
  {
    title: "Meal Packing",
    location: "New Toronto Street Food Bank",
    dateTime: "February 10, 2022 | 12:00-5:00 PM",
    jobType: "Pantry Meal Packing",
    reminders: [
      "Masks and gloves are required for this role and will be provided.",
    ],
    description:
      "Package food hampers for mobile pantry distribution. You will be assigned a specific task when you arrive for this event.",
    poster: "/packing.png",
  },
];

const opportunitiesList = [
  {
    title: "Meal Delivery",
    location: "Greater Toronto Area",
    dateTime: "anuary 30, 2022 | 5:00-8:00 PM",
    jobType: "Delivery Driver",
    openings: 3,
    reminders: ["Masks and gloves required for this role."],
    description:
      "Pick up and deliver meals from New Toronto Street Food Bank to 25 Toronto area households. ",
    poster: "/driver.png",
  },
  {
    title: "Meal Packing",
    location: "New Toronto Street Food Bank",
    dateTime: "January 29, 2022 | 5:00pm-7:00pm",
    jobType: "Pantry Meal Packing",
    openings: 5,
    reminders: ["Masks and gloves required for this role will be provided."],
    description:
      "Package food hampers for on-site and mobile pantry distribution.",
    poster: "/packing.png",
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
      body: "New Toronto Street Food Bank is looking for delivery drivers: January 30, 2022 | 5:00-8:00 PM",
      data: "/register",
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
    <PageWrapper>
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
            <JobCard registeredActions={true} key={index} job={job} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {opportunitiesList.map((job, index) => (
            <JobCard opportunityActions={true} key={index} job={job} />
          ))}
        </TabPanel>
      </Box>
    </PageWrapper>
  );
};

export default Home;
