export default function Post({toPost, showDetail}) {

return (
    <div>
        {toPost.id} - {toPost.title} -
        <button onClick={() => {
            showDetail(toPost.id);
        }}>click</button>
    </div>
   );
 }
