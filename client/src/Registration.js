// screen where the user registers
import { Avatar,  Container, Button, TextField, Box, FormGroup, FormControlLabel, Checkbox, Paper, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// TODO: add form fields that showcase the various skills/preferences/availability of a user
// TODO: send the user to the home screen after they register

const Registration = () => {
  return( 
    <Container component='main'  sx={{mt: 7}}>
      <Paper elevation={1} sx={{padding: '20px'}}>
        <Avatar sx={{ my: 2, mx: 'auto', bgcolor: 'tomato' }}>
        <LockOutlinedIcon  />
      </Avatar>
      <Typography component='h2'>Sign Up to Volunteer</Typography>   
      {/* form container  */}
      <Grid container spacing={2} sx={{mt: 2,}}>
         <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              autoFocus
              hiddenLabel
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              autoFocus
              hiddenLabel
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              hiddenLabel
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm Email Address"
              hiddenLabel
            />
          </Grid>
          <Grid item xs={12}>
          <Typography align="left" gutterBottom> Confirm Your Skills</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Driving" />
            <FormControlLabel control={<Checkbox />} label="Heavy Lifting" />
            <FormControlLabel control={<Checkbox />} label="Food Preperation" />
            <FormControlLabel control={<Checkbox />} label="Food Packaing" />
          </FormGroup>
          </Grid>

      </Grid>
        <Button variant='contained' fullWidth> Sign Up </Button>
        </Paper>
      </Container>

  )
};

export default Registration;
