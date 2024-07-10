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
        <h2 className="section-title">featured projects</h2>
        <div className="projects-grid">
          <ProjectCard title="haknam: the whole picture" tagline="touchdesigner, live generative visuals" image={project1Image} link="/project/1"/>
          <ProjectCard title="still life" tagline="max msp, video data processing" image={project2Image} link="/project/2"/>
          <ProjectCard title="landscape" tagline="max msp, video data processing" image={project3Image} link="/project/3"/>
          <ProjectCard title="a generative film oddyssey" tagline="p5js, generative film" image={project4Image} link="/project/4"/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
