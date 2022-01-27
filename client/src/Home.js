// a user's home screen after they register/login

// TODO: show a list of upcoming commitments
// TODO: simulate a browser notification that leads the user to an upcoming event

// TODO: navbar with settings? (stretch goal)

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import AccessTime from "@mui/icons-material/AccessTime";
import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import LocationOn from "@mui/icons-material/LocationOn";

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

const JobCard = ({ job }) => {
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
      </CardActionArea>
    </Card>
  );
};

const jobList = [
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <HomeWrapper>
      <Typography variant="h3" component="h1">
        Home
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Registered" {...a11yProps(0)} />
            <Tab label="Opportunities" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {jobList.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Box>
    </HomeWrapper>
  );
};

export default Home;
