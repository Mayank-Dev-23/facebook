import { useSession } from "next-auth/client";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef();
  const filepickerRef = useRef();
  const [imagetopost, setimagetopost] = useState(null);

  const Removeimage = () => {
    setimagetopost(null);
  };

  const addimagetopost = (e) => {
    const reader = new FileReader();

    // reading the image as a url
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setimagetopost(readerEvent.target.result);
    };
  };

  const sendpost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        message: inputRef.current.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imagetopost) {
          const uploadtask = storage
            .ref(`posts/${doc.id}`)
            .putString(imagetopost, "data_url");

          Removeimage();

          uploadtask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = " ";
  };

  return (
    <div className="bg-white rounded-xl shadow-md text-gray-500 font-medium mt-6 p-2">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="rounded-full"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />

        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="outline-none rounded-full h-10 bg-gray-100 flex-grow px-5"
            type="text"
            placeholder={`What's on your mind ${session.user.name}?`}
          />

          <button hidden type="submit " onClick={sendpost}>
            submit
          </button>
        </form>
        {imagetopost && (
          <div
            onClick={Removeimage}
            className="flex flex-col items-center justify-center cursor-pointer transition duration-200 transform hover:scale-105
         filter hover:brightness-75
         "
          >
            <img className="  h-12 object-contain " src={imagetopost} />
            <p className="text-xs text-red-500 font-semiBold">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-2 border-t">
        <div className="flex items-center space-x-1 flex-grow hover:bg-gray-100 cursor-pointer justify-center p-2 rounded-xl ">
          <VideoCameraIcon className="h-7 text-red-600" />
          <p className="text-xs">Live video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="flex items-center space-x-1 flex-grow hover:bg-gray-100 cursor-pointer justify-center p-2 rounded-xl "
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs">Photos/Videos</p>
          <input
            onChange={addimagetopost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="flex items-center space-x-1 flex-grow hover:bg-gray-100 cursor-pointer justify-center p-2 rounded-xl ">
          <EmojiHappyIcon className="h-7 text-yellow-400" />
          <p className="text-xs">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
