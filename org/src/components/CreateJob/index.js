import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'

const Container = ({ children }) => (
  <Box width="90%" maxWidth="500px" mx="auto" my={10}>
    {children}
  </Box>
)

const Field = ({ children, mt = 5 }) => <Box sx={{ mt }}>{children}</Box>

const fieldIsRequired = 'Field is required'

const validationSchema = yup.object({
  name: yup.string().required(fieldIsRequired),
  description: yup.string().required(fieldIsRequired),
  role: yup.string().required(fieldIsRequired),
})

const WithMaterialUI = () => {
  let navigate = useNavigate()

  const [role, setRole] = React.useState('')

  const handleChange = (event) => {
    setRole(event.target.value)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      role,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate('/dashboard')
    },
  })

  return (
    <Container>
      <Typography variant="h2">Create Job</Typography>
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
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Field>
        <Field>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              fullWidth
              id="role"
              name="role"
              label="Role"
              labelId="role-label"
              value={role}
              onChange={handleChange}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="driver">Driver</MenuItem>
              <MenuItem value="server">Server</MenuItem>
            </Select>
            {formik.touched.role && Boolean(formik.errors.role) && (
              <FormHelperText sx={{ color: "error" }}>
                {formik.errors.role}
              </FormHelperText>
            )}
          </FormControl>
        </Field>
        <Field>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Field>
        <Field mt={3}>
          <Button
            href="/dashboard"
            color="primary"
            variant="outlined"
            fullWidth
          >
            Cancel
          </Button>
        </Field>
      </form>
    </Container>
  )
}

export default WithMaterialUI
