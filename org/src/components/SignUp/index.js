import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Container = ({ children }) => (
  <Box width="90%" maxWidth="500px" mx="auto" my={10}>
    {children}
  </Box>
)

const Field = ({ children, mt = 5 }) => <Box sx={{ mt }}>{children}</Box>

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter a password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Container>
      <Typography variant="h2">Sign Up</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Field>
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
        </Field>
        <Field>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Field>
        <Field>
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
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </Field>
        <Field>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Field>
        <Field mt={3}>
          <Button href="/" color="primary" variant="outlined" fullWidth>
            Cancel
          </Button>
        </Field>
      </form>
    </Container>
  )
}

export default WithMaterialUI
