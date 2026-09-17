function ProjectModal({ project, onClose }) {
  if (!project) return null;
  
  return (
    <>
      <div className="project-modal-overlay" onClick={onClose}>
        <div className="project-modal" onClick={(e) => e.stopPropagation()}>
          <button
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            ×
          </button>
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
    </>
  );
}

export default ProjectModal;