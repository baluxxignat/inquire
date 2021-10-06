import axios from "axios";

let axiosInstance =  axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com',
    headers: {'Content-Type: application/json'}
})
