import React, { useState, useEffect } from 'react';
import './Subtitle01.css';

const Subtitle01 = ({ subtitles, colorPrimario, colorSecundario }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (subtitles && subtitles.length > 0) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setSubtitleIndex(prevIndex => (prevIndex + 1) % subtitles.length);
          setIsVisible(true);
        }, 1000);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [subtitles]);

  return (
    <div 
      className={`landing__subtitle ${isVisible ? 'fadeIn' : 'fadeOut'}`} 
      style={{ backgroundColor: colorPrimario, color: colorSecundario }}
    >
      {subtitles && subtitles[subtitleIndex]}
    </div>
  );
};

export default Subtitle01;
