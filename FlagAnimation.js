import React, { useEffect } from 'react';
import './FlagAnimation.css'; // Import file CSS

const FlagAnimation = () => {
  useEffect(() => {
    const container = document.querySelector('.bbugsoft-team-flag');
    const width = container.clientWidth;
    
    for (let i = 0; i < width; i++) {
      const bbugsoftFlag = document.createElement('div');
      bbugsoftFlag.className = 'bbugsoftFlag';
      bbugsoftFlag.style.backgroundPosition = `-${i}px 0`;
      bbugsoftFlag.style.animationDelay = `${i * 10}ms`;
      container.appendChild(bbugsoftFlag);
    }
  }, []);

  return (
    <div className="bbugsoft-team-container">
      <div className="bbugsoft-team-flag"></div>
    </div>
  );
};

export default FlagAnimation;
