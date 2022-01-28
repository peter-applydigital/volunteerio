import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { DataGrid } from '@mui/x-data-grid'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from "@mui/material/Chip"

import data from '../data.js'

const columns = [
  { field: 'dateTime', headerName: 'Date & Time', minWidth: 140 },
  { field: 'role', headerName: 'Role', maxWidth: 80 },
  { field: 'location', headerName: 'Location', minWidth: 160, sortable: false },
  { field: 'tags', headerName: 'Tags', minWidth: 140 },
  {
    field: 'confirmed',
    headerName: 'Confirmed',
    valueGetter: getConfirmationStatus,
    sortable: false
    
  },
  {
    field: 'status',
    headerName: 'Status',
    maxWidth: 80,
    renderCell: getStatusChip
  },
]

function getConfirmationStatus(params) {
  return `${params.row.confirmed || '0'} / ${params.row.quantity || '0'}`
}

function getStatusChip(params) {
  if (params.row.confirmed >= params.row.quantity) {
    return <Chip label={"Full"} color="success" variant="outlined" size="small" />
  } else {
    return <Chip label={"Open"} color="warning" variant="outlined" size="small" />
  }
}

function Dashboard() {
  var [items] = useState(data)

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              Foodbank Toronto
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button href="/createrole" variant="outlined" color="inherit">
                Create Role
              </Button>
              <Button
                href="/createjob"
                variant="outlined"
                color="inherit"
                sx={{ ml: 3 }}
              >
                Create Job
              </Button>
              <Button
                href="/"
                variant="contained"
                color="secondary"
                sx={{ ml: 3 }}
              >
                Sign out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <h2>Dashboard</h2>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={items}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
