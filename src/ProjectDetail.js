import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import FullWidthMedia from './FullWidthMedia';

import stilllifeImage1 from './assets/stilllife/stilllifedetail1.jpg';
import stilllifeImage2 from './assets/stilllife/stilllifedetail2.jpg';
import stilllifeImage3 from './assets/stilllife/stilllifedetail3.jpg';
import stilllifeImage4 from './assets/stilllife/stilllifepatch.jpg';
import video1 from './assets/haknam/haknamlive1.mp4';
import video2 from './assets/haknam/haknamvid1.mp4';
import video3 from './assets/haknam/haknamvid2.mp4';
import video4 from './assets/haknam/haknamvid3.mp4';
import video5 from './assets/haknam/haknamvid4.mp4';
import landscapeImage1 from './assets/landscape/landscapedetail1.jpg';
import landscapeImage2 from './assets/landscape/landscapedetail2.jpg';
import landscapeImage3 from './assets/landscape/landscapedetail3.jpg';
import landscapeImage4 from './assets/landscape/landscapedetail4.jpg';



const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    1: {
      title: "haknam: the whole picture",
      description: "creating a fictional world of visuals for a live performance",
      technologies: "[touchdesigner, c4d]",
      details: `I was approached by composer and artist Xavier Bonfill to create a set of interactive visuals that would accompany the live performances of his piece (the.whole.picture).<br><br>
    
    The project is about the fragmentation of memory and how we can’t ever be certain of the things that we remember.<br><br>
    
    The visuals are rooted in the music, and follow it all along the performance, but don't try to recreate the notes or the rhythm itself.<br><br>
    
    I created a fictional world that was created by the sound itself. A world that feels familiar, yet unknown. Tactile but not physical. A world that we perhaps remember.<br><br>
    
    This fictional world purposely resembles, at instances, places that we all might know: a desert at night, snowy mountains, a forest, a red sky at night.<br><br>
    
    After all, the earth, our landscape, is the only thing that we can be certain of if we know that we can’t trust our memories.<br><br>
    
    The project was created with Touchdesigner, a node-based visual programming language for real-time interactive multimedia content.<br><br>
    
    I created a patch that allows one of the musicians to trigger different instances via a MIDI keyboard. The performance is designed to use 2 projectors, creating an immersive 32:9 panorama.`,
      fullWidthMedia: { type: 'video', src: video1 }, // Optional full-width media
      media: [
        { type: 'video', src: video2 },
        { type: 'video', src: video3 },
        { type: 'video', src: video4 },
        { type: 'video', src: video5 }
      ]
    },
    2: {
      title: "still life",
      description: "an interactive installation that blends real-time video, light, and sound",
      technologies: "[max msp, ableton live, 3 webcams, projector, speakers]",
      details: `Still Life marks the first instalment in a series of interactive audiovisual installations that transform a simple still life setup into a space where digital technology meets traditional artistry.<br><br>
      
      Using video cameras, the installation captures diverse perspectives from a carefully arranged scene. Data from the cameras is processed and translated into a generative musical composition and video projection, creating a dynamic sensory experience. This transformation continuously reshapes the viewer's perception through the interplay of sound, light, and movement.<br><br>

      I created a Max MSP patch that orchestrates the core of the interaction, handling inputs from three strategically placed webcams. These inputs form the basis for both the visual and auditory outputs. The visuals are arranged into a dynamic grid that showcases various zoom levels and pixelated transformations and perspective, projected in real-time via HDMI.<br><br>

      The colour data (RGB values) captured from each webcam feed is translated into musical notes. The system creates a variable tempo for each camera channel, ranging from 3000ms to 4000ms, ensuring a continuously evolving but harmonious musical composition. These notes are then routed to MIDI channels in Ableton Live, where they are played using Live’s core library grand piano virtual instrument.<br><br>

      Lighting is crucial in shaping the installation’s atmosphere and interactivity. Additionally, visitors can interact with the installation using their mobile phones or other portable light sources. The choice of using such simple lights was made to not overcomplicate the setup for this first iteration, focusing instead on the simplicity of the scene and the music.`,
      videoUrl: "https://player.vimeo.com/video/936356832?autoplay=1&muted=1",
      media: [
        { type: 'image', src: stilllifeImage1 },
        { type: 'image', src: stilllifeImage2 },
        { type: 'image', src: stilllifeImage3 },
        { type: 'image', src: stilllifeImage4 },
      ]
    },
    3: {
      title: "landscape",
      description: "an evolving soundscape generated from visual data of the Thames River's changing light, reflecting the subtle transformation of the landscape.",
      technologies: "[max msp, ableton live, 3 webcams]",
      details: `Positioned strategically along the Thames River, three surveillance cameras capture the changing light over an industrial area as the sun sets.<br><br>

This visual data is converted into a dynamic soundscape that evolves with the shifting light—from bright and rapid sounds in daylight to deep, low tones as darkness falls.<br><br>

Mirroring the river's subtle, persistent flow, the soundscape of "Landscape #1" offers a nuanced auditory experience that evolves almost imperceptibly. Engaging closely with the piece reveals its continuous, gentle transformation, reflecting the ever-changing yet seemingly static landscape.`,
      videoUrl: "https://player.vimeo.com/video/945507727?autoplay=1&muted=1",
      media: [
        { type: 'image', src: landscapeImage1 },
        { type: 'image', src: landscapeImage2 },
        { type: 'image', src: landscapeImage3 },
        { type: 'image', src: landscapeImage4 },
      ]
    },
    4: {
      title: "echoes of sadness: a generative film odyssey",
      description: "using computational methods and film to explore the categorization of human emotions",
      technologies: "[p5js, personal video archive, projector, speaker]",
      details: `How can computational methods and film navigate and represent the dichotomy between discrete categorisation and the continuous spectrum of human emotions?<br><br>

Using borrowed TV footage from the 1990s and material from my family archive, this generative film operates autonomously, weaving together visuals and sounds to present a non-linear, evolving exploration of emotions, with a particular focus on the complexities and nuances of sadness.<br><br>

The concept of this project is anchored in exploring human emotions, particularly sadness. Despite decades of research into the psychophysiology of emotion, there has been no consensus on the specific physiological pattern of this emotion.<br><br>

A discrete emotions perspective is useful for understanding individual differences in the dimension of affective valence. Categorical theories are based on the assumption that there is a limited set of basic emotion categories, such as joy, sadness, fear, anger, and disgust. In contrast, dimensional theories do not distinguish between discrete emotions, but view emotions as states that can be represented as points within a continuous space defined by two or three dimensions.<br><br>

This dichotomy between the discrete and the continuous mirrors the initial interest in the difference between online (discrete) and offline (continuous) human interactions. The realisation that emotions, especially sadness, can be both universal and unique to each individual, led to a deeper investigation into their nature and representation.<br><br>

The choice of film as the medium is supported by its effectiveness in eliciting emotions. Films, with their dynamic visual and auditory components, offer a more intense representation of stories and emotions than text alone. Influenced by filmmakers like Steve McQueen and Wong Kar-Wai, the project employs various cinematic techniques to convey feelings of loneliness, longing, and melancholy. It explores the use of fragmentation, ellipsis, and pause in creating mood and allowing for reflection, both on the meaning and the feeling of events.<br><br>

Videos were sourced from personal archives and Spanish TV footage from the 1990s, chosen for their emotional resonance and cultural nuances. The chosen content ranged from urban floods and images of religious celebrations to family albums evoking nostalgia. The music has been created by mixing found royalty-free sounds with my own sounds, which I've then turned into soundscapes. The voice heard as narration also comes from various sources of Spanish TV.`,
      videoUrl: "https://player.vimeo.com/video/981796039?autoplay=1&muted=1",
      media: [
      ],
      externalLink: "https://antoniodenuevo.github.io/Generative-film/"
    }
  };

  const project = projectData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className="project-detail-container">
        <div className="left-section">
          {project.videoUrl && (
            <div className="video-embed-wrapper">
              <iframe
                src={project.videoUrl}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Vimeo Video"
                className="video-embed"
              ></iframe>
            </div>
          )}
          {project.fullWidthMedia && (
            <FullWidthMedia media={project.fullWidthMedia} />
          )}
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
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link-button"
            >
              <p>Watch Echoes Of Sadness</p>
            </a>
          )}
        </div>
        <div className="right-section">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <p className="technologies-used">{project.technologies}</p>
          <p className="project-description-text" dangerouslySetInnerHTML={{ __html: project.details }}></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
