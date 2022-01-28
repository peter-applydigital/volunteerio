import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Button, TextField, Typography, Grid } from '@mui/material'
import LockOutlined from '@mui/icons-material/LockOutlined'

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
})

const WithMaterialUI = () => {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
            <LockOutlined fontSize="large" />
          </StyledAvatar>
          <Typography align="center" component="h2">
            Sign In
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
