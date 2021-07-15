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
    <div className="postbox">
      <div className="postbox_image">
        <img src={session.user.image} width="40" height="40" layout="fixed" />

        <form>
          <input
            ref={inputRef}
            className="input"
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
            className="imageviewer "
          >
            <img className=" imageviewer_img " src={imagetopost} />
            <p className="imageviewer_remove">Remove</p>
          </div>
        )}
      </div>

      <div className="icon_container">
        <div className="icon_container_child ">
          <VideoCameraIcon className="videoicon" />
          <p className="icon_container_childtext">Live video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="icon_container_child "
        >
          <CameraIcon className="CameraIcon" />
          <p className="icon_container_childtext">Photos/Videos</p>
          <input
            onChange={addimagetopost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="icon_container_child">
          <EmojiHappyIcon className="emoji" />
          <p className="icon_container_childtext">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
