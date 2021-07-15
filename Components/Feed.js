import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed({posts}) {
    return (
        <div className="feed ">
            <div className="feed_posts">
                {/* STORIES  */}
                <Stories />

                {/* INPUT */}
                <InputBox />

                {/* POSTS */}
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed
