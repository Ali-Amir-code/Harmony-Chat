import axios from 'axios'
export async function isValidUser(user){
    const res =  await axios.post('api/auth/checkUser', user);
    return res.data.isValidUser
}
