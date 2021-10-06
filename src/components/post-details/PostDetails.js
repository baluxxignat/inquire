export default function PostDetails({details}) {
    console.log(details.comments);
return (
    <div>
       <h2>{details.id}-{details.title}</h2>
        <div><p>{details.body}</p></div>
        <div><h3>Comments: </h3>{details.comments}</div>
    </div>
   );
 }
