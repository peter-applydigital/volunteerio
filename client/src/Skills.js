import {
    Button,
    TextField,
    Box,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
    RadioGroup,
    Radio,
} from '@mui/material'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import { Link } from 'react-router-dom'
import {
    StyledFormWrapper,
    StyledAvatar,
    StyledContainer,
    StyledPaper,
    StyledRadioGroup,
} from './Form.styles'

const Skills = () => {
    return (
        <StyledFormWrapper>
            <StyledContainer component="main" maxWidth="sm">
                <StyledPaper elevation={1}>
                    <StyledAvatar>
                        <VolunteerActivismIcon fontSize="large" />
                    </StyledAvatar>
                    <Typography component="h2">Tell Us About You</Typography>
                    <Typography component="h4">
                        Oprah Gail Winfrey is an American talk show host,
                        television producer, actress, author, and
                        philanthropist. She is best known for her talk show, The
                        Oprah Winfrey Show
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 0 }}>
                        <Grid item sx={{ textAlign: 'left' }} xs={12}>
                            <Typography component="h3">
                                Where Are You Coming From
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="City"
                                autoFocus
                                hiddenLabel
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Postal Code"
                                autoFocus
                                hiddenLabel
                                size="small"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Typography component="h5">
                                Would you be willing to travel?
                            </Typography>
                            <StyledRadioGroup>
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </StyledRadioGroup>
                        </Grid> */}
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Typography
                                component="h3"
                                align="left"
                                gutterBottom
                            >
                                What Are You Good At?
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Driving"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Heavy Lifting"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Food Preparation"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Food Packaging"
                                    />
                                </FormGroup>
                            </Box>
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
                                component={Link}
                                size="large"
                                to="/home"
                                variant="contained"
                                color="primary"
                            >
                                Go To Dashboard
                            </Button>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </StyledContainer>
        </StyledFormWrapper>
    )
}

export default Skills
