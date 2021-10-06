export default function Comment({oneComment: {id, body}}) {
return (
    <div>
        {id}-{body}
        <hr/>
    </div>
   );
 }
