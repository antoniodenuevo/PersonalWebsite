// FullWidthMedia.js
import React from 'react';
import PropTypes from 'prop-types';
import './FullWidthMedia.css';

const FullWidthMedia = ({ media }) => {
  return (
    <div className="full-width-media-wrapper">
      {media.type === 'image' ? (
        <img src={media.src} alt="Full Width Media" className="full-width-media" />
      ) : (
        <video autoPlay muted loop className="full-width-media">
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

FullWidthMedia.propTypes = {
  media: PropTypes.shape({
    type: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default FullWidthMedia;
