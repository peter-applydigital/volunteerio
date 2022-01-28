import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Button,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  FormGroup,
  Grid,
} from '@mui/material'
import {
  StyledFormWrapper,
  StyledAvatar,
  StyledContainer,
  StyledPaper,
} from '../../Form.styles'

import PersonIcon from '@mui/icons-material/Person'

const fieldIsRequired = 'Field is required'

const validationSchema = yup.object({
  name: yup.string().required(fieldIsRequired),
  description: yup.string(),
  minAge: yup.number(),
  driversLicense: yup.bool(),
  car: yup.bool(),
})

const WithMaterialUI = () => {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      minAge: '',
      driversLicense: false,
      car: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate('/dashboard')
    },
  })

  return (
    <StyledFormWrapper>
      <StyledContainer component="main" maxWidth="sm">
        <StyledPaper elevation={4}>
          <StyledAvatar>
            <PersonIcon fontSize="large" />
          </StyledAvatar>
          <Typography align="center" component="h2">
            Create Role
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 0, mb: 4 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="minAge"
                  name="minAge"
                  label="Minimum Age"
                  value={formik.values.minAge}
                  onChange={formik.handleChange}
                  error={formik.touched.minAge && Boolean(formik.errors.minAge)}
                  helperText={formik.touched.minAge && formik.errors.minAge}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="driversLicense"
                        name="driversLicense"
                        label="Drivers License"
                        value={formik.values.driversLicense}
                        onChange={formik.handleChange}
                      />
                    }
                    label="Does this role require a drivers license?"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="car"
                        name="car"
                        label="Car"
                        value={formik.values.car}
                        onChange={formik.handleChange}
                      />
                    }
                    label="Does this role require a car?"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>

              <Grid item xs={12}>
              <Button href="/dashboard" color="primary" variant="outlined" fullWidth>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </StyledPaper>
      </StyledContainer>
    </StyledFormWrapper>
  )
}

export default WithMaterialUI
