// screen where the user registers
import {  Button, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@mui/material';
import {StyledFormWrapper, StyledAvatar, StyledContainer} from './Form.styles'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// TODO: add form fields that showcase the various skills/preferences/availability of a user
// TODO: send the user to the home screen after they register

const Registration = () => {
  return( 
    <StyledFormWrapper>
      <StyledContainer component='main' maxWidth="sm">
        <Paper elevation={1} sx={{padding: '20px', m: 'auto'}}>
          <StyledAvatar sx={{ my: 2, mx: 'auto', width: 56, height: 56 }}>
            <LockOutlinedIcon  />
          </StyledAvatar>
          <Typography align="center" component='h2'>Welcome!</Typography> 
          <Typography component='h4'>Oprah Gail Winfrey is an American talk show host, television producer, actress, author, and philanthropist. She is best known for her talk show, The Oprah Winfrey Show</Typography>   
          {/* form container  */}
          <Grid container spacing={2} sx={{mt: 0, mb: 4,}}>
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
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I agree to the terms and conditons"
                />
              </Grid>
          </Grid>
          <Box textAlign="center">
              <Button sx={{my: 'auto'}} component={Link} to="/skills" variant="contained" color="primary">
                Sign Up 
            </Button>
          </Box>
        </Paper>
      </StyledContainer>
    </StyledFormWrapper>
  )
};

export default Registration;
