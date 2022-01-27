// screen where the user registers
import { Avatar,  Container, Button, TextField, Box, FormGroup, FormControlLabel, Checkbox, Paper, Grid, Typography } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom';

// TODO: add form fields that showcase the various skills/preferences/availability of a user
// TODO: send the user to the home screen after they register

const Skills = () => {
  return( 
    <Container component='main'  sx={{mt: 7}}>
      <Paper elevation={1} sx={{padding: '20px'}}>
        <Avatar sx={{ my: 2, mx: 'auto', bgcolor: 'tomato' }}>
          <VolunteerActivismIcon />
        </Avatar>
        <Typography component='h2'>Tell Us About You</Typography>   
        <Grid container spacing={2} sx={{mt: 2,}}>
        <Grid item sx={{textAlign: 'left'}} xs={12}>
         <Typography component='h2'>Where Are You Coming From</Typography> 
        </Grid>
            <Grid item xs={6}>
                <TextField
                fullWidth
                label="City"
                autoFocus
                hiddenLabel
                />
            </Grid>
             <Grid item xs={6}>
                <TextField
                fullWidth
                label="Postal Code"
                autoFocus
                hiddenLabel
                />
            </Grid>
            <Grid item xs={12} sx={{mb: 2}}>
              <Typography align="left" gutterBottom>What Are You Good At?</Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Driving" />
                  <FormControlLabel control={<Checkbox />} label="Heavy Lifting" />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Food Preparation" />
                  <FormControlLabel control={<Checkbox />} label="Food Packaging" />
                </FormGroup>
              </Box>
            </Grid>
        </Grid>
         <Button component={Link} to="/home" variant="contained" color="primary">Volunteer!</Button>
      </Paper>
    </Container>

  )
};

export default Skills;
