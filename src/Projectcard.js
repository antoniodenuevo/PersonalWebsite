import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, tagline, image, link }) => {
  return (
    <Link to={link} className="project-card">
      <div className="project-image-wrapper">
        <div className="project-image" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{tagline}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
