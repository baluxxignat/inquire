import './App.css';
import Posts from "./components/posts/Posts";
import {useEffect, useState} from "react";
import {getAllPosts} from "./services/API";

function App() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(responce => {
            setPosts(responce.data);
            return console.log(responce.data);
        });
    }, []);

  return (
    <div>
      <Posts items={posts}/>
    </div>
  );
}

export default App;
