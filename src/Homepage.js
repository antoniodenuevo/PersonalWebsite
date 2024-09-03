import React from 'react';
import ProjectCard from './Projectcard.js';
import './Homepage.css';

import project1Image from './assets/thepresidentialdebate/thepresidentialchoir01.jpg';
import project2Image from './assets/stilllife/stilllifethumb.jpg';
import project3Image from './assets/landscape/landscapethumb.jpg';
import project4Image from './assets/genfilm/genfilmthumb.jpg';


const Homepage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <div className="projects-grid">
        <ProjectCard title="The Presidential Choir" tagline="2024" image={project1Image} link="/project/thepresidentialchoir"/>
          <ProjectCard title="Still Life" tagline="2024" image={project2Image} link="/project/stilllife"/>
          <ProjectCard title="Landscape" tagline="2024" image={project3Image} link="/project/landscape"/>
          <ProjectCard title="Echoes Of Sadness" tagline="2023" image={project4Image} link="/project/echoesofsadness"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
