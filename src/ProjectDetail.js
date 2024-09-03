import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import FullWidthMedia from './FullWidthMedia';
import projectData from './projectData'; // Import the project data

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projectData[id];

  if   (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      {project.fullWidthMedia && (
        <FullWidthMedia media={project.fullWidthMedia} />
      )}
      <div className="project-detail-container">
        <div className="project-details">
          <h2 className="project-title">{project.title}</h2>
          <p className="technologies-used">{project.technologies}</p>
          <p
            className="project-description-text"
            dangerouslySetInnerHTML={{ __html: project.details }}
          ></p>
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link-button"
            >
              <p>watch echoes of sadness</p>
            </a>
          )}
        </div>

        <div className="project-media">
          <div className="project-images-grid">
            {project.media.map((media, index) => (
              <div className="detail-project-media-wrapper" key={index}>
                {media.type === 'image' ? (
                  <img src={media.src} alt={`Project ${id} Media ${index + 1}`} />
                ) : (
                  <video autoPlay muted loop>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
