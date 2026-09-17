import { useParams } from "react-router-dom";
import { projects } from "./Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-details">
          <h1 className="project-title">{project.title}</h1>

          <div className="section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </div>

          <div className="section">
            <h2>Technologies</h2>
            <div className="lang">
              {project.languages.join(", ")}
            </div>
          </div>

          <div className="section">
            <h2>Gallery</h2>
            <div className="project-images">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;