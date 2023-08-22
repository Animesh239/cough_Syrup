import axios from "axios";
const baseURL = "http://localhost:3000"
   
const client = axios.create({ baseURL });
export default client;
