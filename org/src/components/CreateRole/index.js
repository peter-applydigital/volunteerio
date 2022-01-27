import React from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from "@mui/material/Checkbox"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from "@mui/material/FormGroup"

const Container = ({ children }) => (
  <Box width="90%" maxWidth="500px" mx="auto" my={10}>
    {children}
  </Box>
)

const Field = ({ children, mt = 5 }) => <Box sx={{ mt }}>{children}</Box>

const fieldIsRequired = "Field is required";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(fieldIsRequired),
  description: yup.string(),
  driversLicense: yup.bool(),
  car: yup.bool(),
  minAge: yup.string()
})


const WithMaterialUI = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      driversLicense: false,
      car: false,
      minAge: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate('/dashboard')
    },
  })

  return (
    <Container>
      <Typography variant="h2">Create Role</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Field>
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
        </Field>
        <Field>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Field>
        <Field>
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
        </Field>
        <Field>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox
                id="driversLicense"
                name="driversLicense"
                label="Drivers License"
                value={formik.values.driversLicense}
                onChange={formik.handleChange}
              />
            }
            label={"Does this role requires a drivers license"}
            />
            <FormControlLabel control={
              <Checkbox
                id="car"
                name="car"
                label="Car"
                value={formik.values.car}
                onChange={formik.handleChange}
              />
            }
            label={"Does this role requires a car"}
            />
          </FormGroup>

        </Field>
        <Field>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Field>
        <Field mt={3}>
          <Button href="/dashboard" color="primary" variant="outlined" fullWidth>
            Cancel
          </Button>
        </Field>
      </form>
    </Container>
  )
}

export default WithMaterialUI
