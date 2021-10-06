import Post from "../post/Post";

export default function Posts({items}) {

return (
    <div>
        {
            items.map(singlePost => <Post toPost={singlePost}/>)
        }
    </div>
   );
 }
