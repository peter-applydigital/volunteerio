import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Button, TextField, Typography, Grid } from '@mui/material'
import Assignment from '@mui/icons-material/Assignment'

import {
  StyledFormWrapper,
  StyledContainer,
  StyledPaper,
  StyledAvatar,
} from '../../Form.styles'

const fieldIsRequired = 'Field is required'

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required(fieldIsRequired),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required(fieldIsRequired),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(fieldIsRequired),
  organization: yup.string().required(fieldIsRequired),
  address: yup.string().required(fieldIsRequired),
  phoneNumber: yup.string().required(fieldIsRequired),
})

const WithMaterialUI = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: '',
      confirmPassword: '',
      organization: 'Foobar Worldwide',
      address: '1 Main St, A1B 2C3, Toronto, ON',
      phoneNumber: '(416) 967-1111',
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
            <Assignment fontSize="large" />
          </StyledAvatar>
          <Typography align="center" component="h2">
            Sign Up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 0, mb: 4 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="organization"
                  name="organization"
                  label="Organization"
                  value={formik.values.organization}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.organization &&
                    Boolean(formik.errors.organization)
                  }
                  helperText={
                    formik.touched.organization && formik.errors.organization
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
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
                <Button href="/" color="primary" variant="outlined" fullWidth>
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
