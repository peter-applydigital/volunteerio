import React, { useState } from 'react'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DataGrid from "@mui/x-data-grid"

const columns = [
  { field: 'job', headerName: 'Job', width: 90 },
  { field: 'description', headerName: 'Description', width: 90 },
  { field: 'tag', headerName: 'Tags', width: 90 },
  { field: 'requested', headerName: 'Requested', width: 90 },
  { field: 'confirmed', headerName: 'Confirmed', width: 90 },
  { field: 'date', headerName: 'Date', width: 90 },
]

function Dashboard() {
  var [items, setItems] = useState([
    {
      id: 1,
      job: 'Driver',
      description: 'Lunch drive',
      tag: 'event',
      requested: 2,
      confirmed: 1,
      date: '02/13/2022',
    },
  ])

  return (
    <div>
      <h2>Dashboard</h2>
      <List>
        {items.map((item) => {
          return <ListItem key={item.id}>{item.job}</ListItem>
        })}
        <ListItem>Test</ListItem>
      </List>
    </div>
  )
}

function Row({item}) {
  return (
    <ListItem key={item.id}>
      {item.job}
    </ListItem>
  );
}

export default Dashboard
