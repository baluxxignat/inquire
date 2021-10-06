import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/posts',
    headers: {"Content-Type": "application/json"}
});

const getAllPosts = () => axiosInstance();
const getSinglePost = (id) => axiosInstance.get('/'+ id, {params: {_embed: "comments"}});

export {getAllPosts, getSinglePost};
