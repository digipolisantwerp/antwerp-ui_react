import React from 'react';

const styles = {
  overflow: 'auto'
};

const Hero = ({ children }) => {
  return (
    <div className="u-wrapper u-bg-light" style={styles}>
      <div className="u-container">
        <div className="u-text-center u-margin-lg">
        {children}
        </div>
      </div>
    </div>
  )
}

export default Hero;