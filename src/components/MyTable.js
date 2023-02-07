
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios'; 


function createData(id, name, address, email, password ) {
  return {id,name,address,email,password } ;
}


export default function MyTable() {
   const [users,  setUsers] = useState([]);
  
    useEffect(()=> {
      axios
        .get('http://localhost:3002/users')
        .then(response => {
          setUsers(response.data)
          console.log(response.data, 'profile data')
        }).catch(error => console.log(error));        
    }, [])
    
  return (
 
      <Table sx={{ minWidth: 650, margin: 10 }} stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow> 
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name&nbsp;</TableCell>
            <TableCell align="right">Address&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Password&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell align="right">{users.id}</TableCell>`
              <TableCell align="right">{users.name}</TableCell>
              <TableCell align="right">{users.address}</TableCell>
              <TableCell align="right">{users.email}</TableCell>
              <TableCell align="right">{users.password}</TableCell>
            </TableRow>
           
        
        </TableBody>
      </Table>
  
  );
}