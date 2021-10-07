import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../services/API";
import PostDetails from "../post-details/PostDetails";
import {Route, Switch} from "react-router-dom";
import './Posts.css';

export default function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then(response => {
            setPosts([...response.data]);
        });
    }, []);

    return (
        <div>
            <h2>List of Posts</h2>
            <div className={'posts'}>
                {
                    posts.map(singlePost => <Post key={singlePost.id} toPost={singlePost}/>)
                }
            </div>
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>
    );
}
