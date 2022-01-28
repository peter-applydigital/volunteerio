/* eslint-disable no-unused-vars */
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
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const Hello = () => {
    return (
        <StyledFormWrapper>
            <StyledContainer component="main" maxWidth="sm">
                <StyledPaper elevation={4}>
                    <StyledAvatar>
                        <AutoAwesomeIcon fontSize="large" />
                    </StyledAvatar>
                    <Typography align="center" component="h2">
                        Volunteerio
                    </Typography>
                    <Typography align="center" component="h4">
                        Oprah Gail Winfrey is an American talk show host,
                        television producer, actress, author, and
                        philanthropist. She is best known for her talk show, The
                        Oprah Winfrey Show, broadcast from Chicago, which was
                        the highest-rated television program of its kind in
                        history and ran in national syndication for 25 years,
                        from 1986 to 2011.
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 0, mb: 4 }}></Grid>
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
                                Login
                            </Button>
                        </Grid>
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

export default Hello
