import { ChatIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Post({ name, email, message, image, postImage, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-lg shadow-sm">
        <div className="flex items-center space-x-2">
          <Image className="rounded-full" src={image} width={40} height={40} />

          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-500">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <a href={postImage}>
          <div
            className="relative h-56 md:h-96 bg-white transition
            duration transform hover:scale-105 
              "
          >
            <Image src={postImage} objectFit="cover" layout="fill" />
          </div>
        </a>
      )}
      <div className="flex items-center justify-between bg-white rounded-sm shadow-md text-gray-400
      bo2der-t2 
      ">
        <div  className="flex items-center cursor-pointer space-x-1 hover:bg-gray-100 p-2 rounded-sml">
          <ThumbUpIcon className="h-5" />
          <p className="text-xs">like</p>
        </div>
        <div  className="flex items-center cursor-pointer space-x-1 hover:bg-gray-100 p-2 rounded-sm">
      
          <ChatIcon className="h-5" />
          <p className="text-xs">comment</p>
        </div>
        <div  className="flex items-center cursor-pointer space-x-1 hover:bg-gray-100 p-2 rounded-xl">
          <ShareIcon className="h-5" />
          <p className="text-xs">share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
