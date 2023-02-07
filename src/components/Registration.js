import React, {useState} from 'react'
import { Box,Button,TextField,Typography } from '@mui/material'
//import {addUser} from '../components/service/api';

//  const initialvalue= {
//    Name: '',
//    Address:'',
//    Email:'',
//    Password:''
//  }
  function Registration()  {
//    const [user, setUser] = useState(initialvalue); // user areobject 
//    const onValueChane = (e) => {
//      //console.log(e.target.id,e.target.value)
//      setUser({...user,[e.target.id]: e.target.value}) // setUser  store valuen in the  user object (key=e.tag.id that's why use in [e.taget.id])
//      //console.log(user)
//    }
//    const addUserDetails = async () => {
//     await addUser(user);  // call
//    }
    const [name, setName] = useState("")
    const[address,setAddress]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    
  return (
  
    <Box 
     display="flex"
     flexDirection={"Column"}
     maxWidth={400}
     alignitems="auto"
     justifyContent={"auto"}
     margin="auto"
     marginTop={5}
     padding={3}
       borderRadius={5}
       boxShadow={"5px 5px 10px #ccc"}
    >
     <Typography variant="h2"padding={3}textAlign="center">Form</Typography>
     <TextField id="name" label="Name" type={"text"} variant="filled"  onChange={(e)=>onValueChane(e)}/><br/>
     <TextField id="address" label="Address" type={"text"} variant="filled" onChange={(e)=>onValueChane(e)} /><br/>
     <TextField id="email" label="Email" type={"email"} variant="filled" onChange={(e)=>onValueChane(e)} /><br/>
     <TextField id="pasword" label="Password" type={"password"} variant="filled" onChange={(e)=>onValueChane(e)}S/><br/>
     <Button  variant="contained" color="warning" onClick={()=>addUserDetails()}>Signup</Button>
     <Button  sx={{marginTop:3, borderRadius:3}}>Reset</Button>
    </Box>
      

  );
}

export default Registration
