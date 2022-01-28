// screen where the user registers
import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
} from '@mui/material'
import {
    StyledFormWrapper,
    StyledAvatar,
    StyledContainer,
    StyledPaper,
} from './Form.styles'
import { Link } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Registration = () => {
    return (
        <StyledFormWrapper>
            <StyledContainer component="main" maxWidth="sm">
                <StyledPaper elevation={4}>
                    <StyledAvatar>
                        <LockOutlinedIcon fontSize="large" />
                    </StyledAvatar>
                    <Typography align="center" component="h2">
                        Welcome!
                    </Typography>
                    <Typography component="h4">
                        Oprah Gail Winfrey is an American talk show host,
                        television producer, actress, author, and
                        philanthropist. She is best known for her talk show, The
                        Oprah Winfrey Show
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 0, mb: 4 }}>
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
                                label="I agree to the terms and conditions"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            <Button
                                size="large"
                                fullWidth
                                component={Link}
                                to="/skills"
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </StyledContainer>
        </StyledFormWrapper>
    )
}

export default Registration
