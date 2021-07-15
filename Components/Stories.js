import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Mayank Saxena",
    src: "https://lh3.googleusercontent.com/a-/AOh14GgbNawgMRtcpDlnIlfo-GLoSIAq4TP-3t_sylr0Yw=s96-c",
    profile:
      "https://lh3.googleusercontent.com/a-/AOh14GgbNawgMRtcpDlnIlfo-GLoSIAq4TP-3t_sylr0Yw=s96-c",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return <div className="stories ">
      {stories.map((story ) =>(
          <StoryCard
          key={story.src}
          src={story.src}
          name={story.name}
          profile={story.profile}
          />
      ))}
  </div>;
}

export default Stories;
