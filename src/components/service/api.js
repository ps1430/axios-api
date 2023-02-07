import axios from 'axios'; 

const API_URL= 'http://localhost:3002/users';    // fetch api url which data fetch
export const addUser= async (data) => {     //add/save user (export adduserdeatil fun) data come from api
   try {
        return await axios.post(API_URL, data);                           //call post method post api take min two arguments
    }catch (error) {
        console.log("Error while calling addUser Api",error.message);
    }  
}
