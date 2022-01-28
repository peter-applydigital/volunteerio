import React from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'

import {
  StyledFormWrapper,
  StyledContainer,
  StyledPaper,
  StyledAvatar,
} from '../../Form.styles'

import { jobs, roles } from '../../data'

const fieldIsRequired = 'Field is required'

const validationSchema = yup.object({
  role: yup.string().required(fieldIsRequired),
  quantity: yup
    .number()
    .min(1, 'There has to be at least one position')
    .required(fieldIsRequired),
  tags: yup.string(),
  location: yup.string().required(fieldIsRequired),
  duration: yup
    .number()
    .min(1, 'Job has to be at least 1 hour')
    .required(fieldIsRequired),
  dateTime: yup.date(),
})

const WithMaterialUI = () => {
  let navigate = useNavigate()

  const [date, setDate] = React.useState('')

  const formik = useFormik({
    initialValues: {
      role: '',
      quantity: '',
      tags: '',
      location: '',
      duration: '',
      dateTime: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      jobs.push({
        ...values,
        dateTime: dayjs(values.dateTime).format('MM/DD/YYYY HH:mm'),
        id: Math.floor(Math.random() * 1000),
      })
      navigate('/dashboard')
    },
  })

  return (
    <StyledFormWrapper>
      <StyledContainer component="main" maxWidth="sm">
        <StyledPaper elevation={4}>
          <StyledAvatar>
            <WorkIcon fontSize="large" />
          </StyledAvatar>
          <Typography align="center" component="h2">
            Create Job
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 0, mb: 4 }}>
              <Grid item xs={6}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    fullWidth
                    id="role"
                    name="role"
                    label="Role"
                    labelId="role-label"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    error={formik.touched.role && Boolean(formik.errors.role)}
                  >
                    {roles.map(({ name }) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.role && Boolean(formik.errors.role) && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {formik.errors.role}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  type="number"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.quantity && Boolean(formik.errors.quantity)
                  }
                  helperText={formik.touched.quantity && formik.errors.quantity}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="tags"
                  name="tags"
                  label="Tags"
                  value={formik.values.tags}
                  onChange={formik.handleChange}
                  error={formik.touched.tags && Boolean(formik.errors.tags)}
                  helperText={formik.touched.tags && formik.errors.tags}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location (address)"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="duration"
                  name="duration"
                  type="number"
                  label="Duration (hours)"
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.duration && Boolean(formik.errors.duration)
                  }
                  helperText={formik.touched.duration && formik.errors.duration}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    id="dateTime"
                    name="dateTime"
                    label="Pick a date and time"
                    value={date}
                    onChange={(e) => {
                      setDate(e)
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                {formik.touched.dateTime && Boolean(formik.errors.dateTime) && (
                  <FormHelperText sx={{ color: 'error' }}>
                    {formik.errors.dateTime}
                  </FormHelperText>
                )}
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
                <Button
                  href="/dashboard"
                  color="primary"
                  variant="outlined"
                  fullWidth
                >
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
