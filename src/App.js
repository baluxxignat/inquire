import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import CreatePost from "./components/createPost/CreatePost";

function App() {

    return (
        <Router>
            <div>
                <Link to={'/posts'}>list of all Posts</Link>
                <hr/>
                <Link to={'/create'}>create Post</Link>
            </div>

            <Switch>
                <Route path={'/posts'} component={Posts}/>
                <Route path={'/create'} component={CreatePost}/>
            </Switch>
        </Router>
    );
}

export default App;
