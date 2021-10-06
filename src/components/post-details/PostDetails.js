import Comment from "../comment/Comment";

export default function PostDetails({details}) {

return (
    <div>
       <h2>{details.id}-{details.title}</h2>
        <div><p>{details.body}</p></div>
        <div>
            <h3>Comments: </h3>
            {
                details.comments.map(singleComment => <Comment key={singleComment.id} oneComment={singleComment} />)
            }
        </div>
    </div>
   );
 }
