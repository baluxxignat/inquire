import React, {useState} from "react";
import {getSinglePost} from "../../services/API";
import PostDetails from "../post-details/PostDetails";
import './Post.css';
import {Route, Switch, Link, BrowserRouter as Router} from "react-router-dom";
import UpdatePost from "../updatePost/UpdatePost";

export default function Post({toPost: {id, title}}) {

    let [postDetails, setPostDetails] = useState(null);

    function showDetail(id) {
        getSinglePost(id).then(value => setPostDetails(value.data));
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

                <div>
                    <Router >
                        <div>
                            <Link to={'/' + id + '/update'}>Update post</Link>
                        </div>

                        <Switch>
                            <Route path={'/' + id + '/update'} render={() => {
                               return <UpdatePost id={id}/>;
                            }}/>;
                        </Switch>
                    </Router>
                </div>
            </div>
            <hr/>
            {
                postDetails && <PostDetails details={postDetails}/>
            }
        </div>
    );
}
