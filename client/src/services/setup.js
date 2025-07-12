import axios from "axios";
export async function getData(user){
    const res =  await axios.post('api/auth/getData', user);
    return res.data
}