import Comment from "../comment/Comment";

export default function PostDetails({details: {id, title, body, comments}}) {

return (
    <div>
       <h2>{id}-{title}</h2>
        <div><p>{body}</p></div>
        <div>
            <h3>Comments: </h3>
            {
                comments.map(singleComment => <Comment key={singleComment.id} oneComment={singleComment} />)
            }
        </div>
    </div>
   );
 }
