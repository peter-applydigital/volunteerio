import React from 'react'
import { useNavigate } from "react-router-dom";
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

const fieldIsRequired = "Field is required";

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required(fieldIsRequired),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required(fieldIsRequired),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(fieldIsRequired),
  organization: yup
    .string()
    .required(fieldIsRequired),
  address: yup
    .string()
    .required(fieldIsRequired),
  phoneNumber: yup
    .string()
    .required(fieldIsRequired),
})

const WithMaterialUI = () => {
  const navigate = useNavigate();

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
        </Field>
        
        <Field>
          <TextField
            fullWidth
            id="address"
            name="address"
            label="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={
              formik.touched.address &&
              Boolean(formik.errors.address)
            }
            helperText={
              formik.touched.address && formik.errors.address
            }
          />
        </Field>
        
        <Field>
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
