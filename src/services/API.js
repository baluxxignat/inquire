import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/posts',
    headers: {"Content-Type": "application/json"}
});

const getAllPosts = () => axiosInstance('');
const getSinglePost = (id) => axiosInstance.get('/'+ id, {params: {_embed: "comments"}});
const deleteSinglePost = (id) => axiosInstance.delete('/'+ id );
const createPost = (title, body ) => axiosInstance.post('',{title, body});
const updatePostById = (id, newtitle, newbody) => axiosInstance.put('/'+ id, {newtitle, newbody} );


export {getAllPosts, getSinglePost, createPost, updatePostById, deleteSinglePost};
