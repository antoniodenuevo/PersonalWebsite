import React from 'react';
import './Info.css';
import infoImage from './assets/info/antonioprofile.jpg'; // Make sure this path is correct

const Info = () => {
  return (
    <div>
      <div className="info-container">
        <div className="info-image-wrapper">
          <img src={infoImage} alt="About" className="info-image" />
        </div>
        <div className="info-text">
          <h2>About</h2>
          <p>I am a digital artist and designer based in London.</p>
          <p>My role encompasses the research, design, and management of innovative digital products. Recently, I have spearheaded projects such as creating a digital experience for Tate’s Collection and developing new ways to discover exhibitions. My work is driven by a deep curiosity about the interplay between the digital realm, human behaviour, and the social and political impacts of technology.</p>
          <p>In addition to my professional work, I have explored generative design tools to create live visuals, installations, interactive posters, and generative artworks. I am fascinated by the beauty of code and node-based languages as mediums for artistic expression. To me, the computer is an extension of the artist, and writing code has a poetic rhythm that mirrors the creative process.</p>
          <p>I am captivated by the modern world’s rhythm and the symbiosis between humans and machines. The glitches within our repetitive lives and the unique soul of manufactured goods intrigue me, resembling movements in a tribal dance. Through my work and experimentation, I strive to uncover the hidden connections between technology and human experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
