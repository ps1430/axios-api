import React, {useState} from 'react'
import { Box,Button,TextField,Typography } from '@mui/material'
//import {addUser} from '../components/service/api';

  function Login()  {
  //  const [user, setUser] = useState(initialvalue); // user areobject 
  //  const onValueChane = (e) => {
  //    //console.log(e.target.id,e.target.value)
  //    setUser({...user,[e.target.id]: e.target.value}) // setUser  store valuen in the  user object (key=e.tag.id that's why use in [e.taget.id])
  //    //console.log(user)
  //  }
  //  const addUserDetails = async () => {
  //   await addUser(user);  // call
  //  }

    
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
  
     <TextField id="email" label="Email" type={"email"} variant="filled" onChange={(e)=>onValueChane(e)} /><br/>
     <TextField id="pasword" label="Password" type={"password"} variant="filled" onChange={(e)=>onValueChane(e)}S/><br/>
     <Button  variant="contained" color="warning" onClick={()=>addUserDetails()}>Signup</Button>
     <Button  sx={{marginTop:3, borderRadius:3}}>Reset</Button>
    </Box>
      

  );
}

export default Login
