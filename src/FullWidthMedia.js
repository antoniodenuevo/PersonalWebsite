import React from 'react';
import './FullWidthMedia.css';

const FullWidthMedia = ({ media }) => {
  return (
    <div className="full-width-media-wrapper">
      {media.type === 'video' && media.src.includes("vimeo.com") ? (
        <iframe
          src={media.src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Video"
          className="full-width-media"
        ></iframe>
      ) : media.type === 'video' ? (
        <video controls className="full-width-media">
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={media.src} alt="Full width media" className="full-width-media" />
      )}
    </div>
  );
};

export default FullWidthMedia;
