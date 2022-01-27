import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"

import Article from "../components/Article";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero title={"Volunteer"} description={"Want to Volunteer or searching for Volunteers?"} />
      <Container fixed>
        <Box my={5}>
          <Article title={"Searching for Volunteers?"} description={"Sign in if you're already a registered organisation or sign up."} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button href="/signup" variant="contained">Sign Up</Button>
            <Button href="/signin" variant="contained" sx={{ ml: 5 }}>Sign In</Button>
          </Box>
        </Box>
        
        <Box my={5}>
          <Article title={"Wanna be a Volunteer?"} description={"Download the App for iOS or Android!"} />
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