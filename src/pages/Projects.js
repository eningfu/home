import Card from "../components/Card";
import Navbar from "../components/Navbar";

import jiraImg from "../assets/proj-jira.png";
// import gameImg from "../assets/proj-game.png";
import profileImg from "../assets/proj-profile.png";
import roomImg from "../assets/proj-er.png";
import presImg from "../assets/proj-pr.png";
import findImg from "../assets/proj-fyf.png";
import sleepImg from "../assets/proj-sb.png";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-proj">
          <div className="gallery">
            {projects.map((project, index) => (
              <Card
                key={index}
                img={project.img}
                title={project.title}
                description={project.description}
                languages={project.languages.join(", ")}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;

export const projects = [
  {
    img: jiraImg,
    title: "Atlassian Forge: JiraQuest",
    description: "A custom Atlassian Forge app that \"game-fies\" Jira. Users can level up, collect coins, and customise their profile based on activity, transforming routine task management into a more engaging experience.",
    languages: ["html", "css", "javascript", "react", "git", "figma"]
  },
  // {
  //   img: gameImg,
  //   title: "(WIP) Mini Arcade",
  //   description: "Just a bunch of mini-games.",
  //   languages: ["html", "css", "javascript", "react", "git"]
  // },
  {
    img: profileImg,
    title: "Y2K-Style Character Wiki",
    description: "A character wiki designed as a faux early-2000s social media platform. Instead of a traditional encyclopedia layout, character information is distributed across profiles, logs, and posts, encouraging exploration.",
    languages: ["html", "css", "javascript"]
  },
  {
    img: roomImg,
    title: "Cybersecurity Escape Room",
    description: "An educational website that introduces cybersecurity concepts using escape room-inspired interactions. Content is presented through challenges and feedback-driven UI elements, encouraging active learning rather than passive reading. Play here: https://something-awesome.vercel.app/",
    languages: ["html", "css", "javascript", "react", "git", "deployed on vercel"]
  },
  {
    img: presImg,
    title: "Presentation Builder",
    description: "An interactive web-based tool that allows users to create presentation slides with custom text and images directly in the browser.",
    languages: ["html", "css", "javascript", "react", "git", "mui"]
  },
  {
    img: findImg,
    title: "Find Your Friends",
    description: "A web app designed to help students locate friends around campus and share real-time status updates, encouraging connection.",
    languages: ["html", "css", "javascript", "react", "git", "figma"]
  },
  {
    img: sleepImg,
    title: "Sleep Buddies",
    description: "A gamified wellness app that motivates consistent sleep by rewarding timely sleep habits with virtual pets and providing consequences if routines are missed.",
    languages: ["html", "css", "javascript", "react", "git", "figma"]
  }
];
