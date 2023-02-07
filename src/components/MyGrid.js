import React from 'react'
import MyTable from './MyTable'
//import Login from './Login'
import {Grid} from '@mui/material'

function MyGrid() {
  return (
    <div>
        <Grid container spacing={2}> 
           <Grid item xs={6}> <Login/> </Grid> 
           <Grid item xs={6}> <MyTable /> </Grid>
        </Grid>
      
    </div>
  )
}

export default MyGrid
