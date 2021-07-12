import {useCollection} from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import Post from "./Post";

function Posts({posts}) {
    const [realtimeposts] = useCollection(
        db.collection("posts").orderBy("timestamp" ,"desc")
    );
    return (
        <div>
            {realtimeposts?
            realtimeposts?.docs.map((post) =>(
                <Post 
                key={post.id}
                name={post.data().name}
                email={post.data().email}
                message={post.data().message}
                image={post.data().image}
                postImage={post.data().postImage}
                timestamp={post.data().timestamp}
                />
            )): 
            posts.map(post=>(
                <Post 
                key={post.id}
                name={post.name}
                email={post.email}
                message={post.message}
                image={post.image}
                postImage={post.postImage}
                timestamp={post.timestamp}
                />
            ))}
        </div>
    )
}

export default Posts
