import { useState } from "react";

import Card from "../components/Card";
import Navbar from "../components/Navbar";
import ProjectModal from "./ProjectModal";

import jiraImg from "../assets/proj-jira.png";
import jiraSoloImg from "../assets/proj-jira-solo.png";
import jiraFigmaImg from "../assets/proj-figma.png";
import jiraDashboardImg from "../assets/proj-jira-db.png";
import jiraElementsImg from "../assets/proj-jira-ele.png";
import jiraActivityImg from "../assets/proj-jira-ab.png";

import protoImg from "../assets/proj-proto.png";
import profileImg from "../assets/proj-profile.png";
import roomImg from "../assets/proj-er.png";
import presImg from "../assets/proj-pr.png";
import findImg from "../assets/proj-fyf.png";
import sleepImg from "../assets/proj-sb.png";
import Footer from "../components/Footer";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
                link={`/projects/${project.id}`}
                onReadMore={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;

export const projects = [
  {
    id: "jiraquest",
    img: jiraImg,
    title: "Atlassian Forge: JiraQuest",
    description: "A custom Atlassian Forge app that gamifies Jira. Users can level up, collect coins, and customise their profile based on activity, transforming routine task management into a more engaging experience.",
    overview: "WIP. I created pixel art assets for the app.",
    languages: ["html", "css", "javascript", "react", "git", "figma", "piskel"],
    images: [jiraSoloImg, jiraFigmaImg, jiraDashboardImg, jiraElementsImg, jiraActivityImg],
  },
  {
    id: "wiki",
    img: profileImg,
    title: "Y2K-Style Character Wiki",
    description: "A character wiki designed as a faux early-2000s social media platform. Instead of a traditional encyclopedia layout, character information is distributed across profiles, logs, and posts, encouraging exploration.",
    overview: "This character wiki is part of a larger hybrid web project/social media account I made to host my digital illustrations. The site is designed to mimic a myspace-esque social media layout and features lots of fun, interactive elements including: general profile information, a friends list, and a chatlog. (Considering to add on profile comments, and a post board in the future.)",
    languages: ["html", "css", "javascript"],
    images: [profileImg],
  },
  {
    id: "beekeepers",
    img: protoImg,
    title: "Mobile App Prototype for Beekeepers",
    description: "A high-fidelity mobile app prototype designed for beekeepers of all experience levels. The app provides access to beekeeping news, interactive maps, educational articles, videos, and resources, helping users monitor, learn, and engage with the beekeeping community in one accessible platform.",
    overview: "WIP",
    languages: ["figma"],
    images: [],
  },
  {
    id: "cyberescaperoom",
    img: roomImg,
    title: "Cybersecurity Escape Room",
    description: "An educational website that introduces cybersecurity concepts using escape room-inspired interactions. Content is presented through challenges and feedback-driven UI elements, encouraging active learning rather than passive reading. Play here: https://something-awesome.vercel.app/",
    overview: "WIP",
    languages: ["html", "css", "javascript", "react", "git", "deployed on vercel"],
    images: [roomImg],
  },
  {
    id: "presentation",
    img: presImg,
    title: "Presentation Builder",
    description: "An interactive web-based tool that allows users to create presentation slides with custom text and images directly in the browser.",
    overview: "WIP",
    languages: ["html", "css", "javascript", "react", "git", "mui"],
    images: [],
  },
  {
    id: "findyourfriends",
    img: findImg,
    title: "Find Your Friends",
    description: "A web app designed to help students locate friends around campus and share real-time status updates, encouraging connection.",
    overview: "WIP",
    languages: ["html", "css", "javascript", "react", "git", "figma"],
    images: [],
  },
  {
    id: "sleepbuddies",
    img: sleepImg,
    title: "Sleep Buddies",
    description: "A gamified wellness app that motivates consistent sleep by rewarding timely sleep habits with virtual pets and providing consequences if routines are missed.",
    overview: "WIP",
    languages: ["html", "css", "javascript", "react", "git", "figma"],
    images: [],
  }
];
