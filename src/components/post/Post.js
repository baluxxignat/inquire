import React, {useState} from "react";
import {getSinglePost, updatePostById} from "../../services/API";
import PostDetails from "../post-details/PostDetails";
import './Post.css';
import {Route} from "react-router-dom";
import UpdatePost from "../updatePost/UpdatePost";

export default function Post({toPost: {id, title}}) {

    let [postDetails, setPostDetails] = useState(null);

    function showDetail(id) {
        getSinglePost(id).then(value => setPostDetails(value.data));
    }

    function updatePostInfo(id) {
        <Route path={'/:id/update'} component={UpdatePost}/>;

    }

    return (
        <div>
            <div className={'wrap'}>
                {id} - {title} -

                <button
                    onClick={() => {
                        showDetail(id);
                    }}>Display details&comments
                </button>

                <button
                    onClick={() => {
                        updatePostInfo(id);
                    }}>Update post
                </button>

            </div>
            <hr/>
            {
                postDetails && <PostDetails details={postDetails}/>
            }
        </div>
    );
}
