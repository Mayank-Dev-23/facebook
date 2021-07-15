import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Post({ name, email, message, image, postImage, timestamp }) {
  return (
    <div className="post_container">
      <div className="post_container2">
        <div className="post_container3">
          <Image className="post_containerimg" src={image} width={40} height={40} />

          <div className="name_container">
            <p className="name">{name}</p>
            <p className="date">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="message">{message}</p>
      </div>
      {postImage && (
        <a href={postImage}>
          <div
            className="postimage" >
            <Image src={postImage} objectFit="cover" layout="fill" />
          </div>
        </a>
      )}
      <div className="footer">
        <div  className="footer_container2">
          <ThumbUpIcon className="footer_icon" />
          <p className="footer_icon_name">like</p>
        </div>
        <div  className="footer_container2">
      
          <ChatIcon className="footer_icon" />
          <p className="footer_icon_name">comment</p>
        </div>
        <div  className="footer_container2">
          <ShareIcon className="footer_icon" />
          <p className="footer_icon_name">share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
