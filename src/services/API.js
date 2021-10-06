import axios from "axios";

let axiosInstance =  axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com',
    headers: {"Content-Type": "application/json"}
})

const getAllPosts = () => axiosInstance.get();
const getSinglePost = (id) => axiosInstance.get(id)

export {getAllPosts, getSinglePost}
