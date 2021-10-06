export default function Post({toPost: {id, title}, showDetail}) {

return (
    <div>
        {id} - {title} -
        <button onClick={() => {
            showDetail(id);
        }}>click</button>
    </div>
   );
 }
