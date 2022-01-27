import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"

import Article from "../components/Article";
import Hero from "../components/Hero";
import volunteerImg from "../resources/images/volunteer-banner.png"

const heroDescription = `
Are you searching for the right volunteers matching to the work you do?
Or you would like to volunteer in an food bank organisation and don't know if you're able to help?

We are matching helping hands with food bank organisations who need it.
`

const organisationDescription = `
Are you searching for volunteers who are at the right place for the right work?
Sign up with your organisation!

If your organisation is already registered, use the Sign in button.
`

const appDescription = `
Download the app for iOS or Android and start helping today!
`

function Home() {
  return (
    <div>
      <Hero title={"volunteer.io"} description={heroDescription} background={volunteerImg} />
      <Container fixed>
        <Box my={5}>
          <Article title={"Searching for Volunteers?"} description={organisationDescription} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button href="/signup" variant="contained">Sign Up</Button>
            <Button href="/signin" variant="contained" sx={{ ml: 5 }}>Sign In</Button>
          </Box>
        </Box>
        
        <Box my={5}>
          <Article title={"Wanna be a Volunteer?"} description={appDescription} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button href="https://www.apple.com/ca/app-store/" target="_blank" variant="outlined">iOS</Button>
            <Button href="https://play.google.com/store/apps/" target="_blank" variant="outlined" sx={{ ml: 5 }}>Android</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;