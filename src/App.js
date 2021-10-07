import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import CreatePost from "./components/createPost/CreatePost";
import './App.css';

function App() {
    return (
        <div className={'wrap'}>
            <Router>
                <div className={'navigation'}>
                    <Link to={'/posts'}>list of all Posts</Link>
                    <Link to={'/create'}>Create Post</Link>
                </div>

                <Switch>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/create'} component={CreatePost}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
