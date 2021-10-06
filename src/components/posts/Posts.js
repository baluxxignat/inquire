import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/API";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(response => {
            setPosts([...response.data]);
        });
    }, []);

return (
    <div>
        {
            posts.map(singlePost => <Post key={singlePost.id} toPost={singlePost} />)
        }
    </div>
   );
 }
