import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { DataGrid } from '@mui/x-data-grid'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from "@mui/material/Chip"

const columns = [
  { field: 'date', headerName: 'Date', minWidth: 100 },
  { field: 'role', headerName: 'Role', minWidth: 100 },
  { field: 'description', headerName: 'Description', minWidth: 190, sortable: false },
  { field: 'tag', headerName: 'Tags' },
  {
    field: 'confirmed',
    headerName: 'Confirmed',
    valueGetter: getConfirmationStatus,
    sortable: false
    
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: getStatusChip
  },
]

function getConfirmationStatus(params) {
  return `${params.row.confirmed || '0'} / ${params.row.requested || '0'}`
}

function getStatusChip(params) {
  if (params.row.confirmed >= params.row.requested) {
    return <Chip label={"Full"} color="success" variant="outlined" size="small" />
  } else {
    return <Chip label={"Open"} color="warning" variant="outlined" size="small" />
  }
}

function Dashboard() {
  var [items] = useState([
    {
      id: 1,
      role: 'Driver',
      description: 'Lunch drive',
      tag: 'event',
      requested: 2,
      confirmed: 1,
      date: '02/13/2022',
    },
    {
      id: 2,
      role: 'Packer',
      description: 'Lunch drive',
      tag: 'event',
      requested: 2,
      confirmed: 2,
      date: '02/13/2022',
    },
  ])

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, justifyContent: 'flex-start' }}
            >
              Foodbank Toronto
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
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
