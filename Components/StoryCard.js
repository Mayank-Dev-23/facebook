import Image from "next/image";


function StoryCard({ src, name, profile }) {
  return (
    <div   className="storycard ">
   
<img src={profile}  className="profileimage"/>
<img src={src} className="storyimage" />
<p className="storyname">{name}</p>

    </div>
  );
}

export default StoryCard;
