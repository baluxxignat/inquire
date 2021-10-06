import Post from "../post/Post";

export default function Posts({items, showDetail}) {

return (
    <div>
        {
            items.map(singlePost => <Post key={singlePost.id} toPost={singlePost} showDetail={showDetail}/>)
        }
    </div>
   );
 }
