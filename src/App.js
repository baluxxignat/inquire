import './App.css';
import Posts from "./components/posts/Posts";
import {useEffect, useState} from "react";
import {getAllPosts, getSinglePost} from "./services/API";
import PostDetails from "./components/post-details/PostDetails";

function App() {
    let [posts, setPosts] = useState([]);
    let [postDetails, setPostDetails] = useState(null);

    function showDetail(id) {
        getSinglePost(id).then(value => setPostDetails(value.data));
    }

    useEffect(() => {
        getAllPosts().then(responce => {
            setPosts(responce.data);
        });
    }, []);

    return (
        <div>
            <Posts items={posts} showDetail={showDetail}/>
            <hr/>
            {
                postDetails && <PostDetails details={postDetails}/>
            }
        </div>
    );
}

export default App;
