import React from 'react';
import ProjectCard from './Projectcard.js';
import './Homepage.css';

import project1Image from './assets/haknam/haknamthumb.jpg';
import project2Image from './assets/stilllife/stilllifethumb.jpg';
import project3Image from './assets/landscape/landscapethumb.jpg';
import project4Image from './assets/genfilm/genfilmthumb.jpg';


const Homepage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="section-title">Featured projects</h2>
        <div className="projects-grid">
          <ProjectCard title="Haknam: The Whole Picture" tagline="Touchdesigner, live generative visuals" image={project1Image} link="/project/haknam"/>
          <ProjectCard title="Still Life" tagline="Max MSP, video data processing" image={project2Image} link="/project/stilllife"/>
          <ProjectCard title="Landscape" tagline="Max MSP, video data processing" image={project3Image} link="/project/landscape"/>
          <ProjectCard title="Echoes Of Sadness" tagline="p5js, generative film" image={project4Image} link="/project/echoesofsadness"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
