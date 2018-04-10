import React from 'react';

const styles = {
  overflow: 'auto'
};

const Hero = ({ children }) => {
  return (
    <div class="u-wrapper u-bg-light" style={styles}>
      <div class="u-container">
        <div class="u-text-center u-margin-lg">
        {children}
        </div>
      </div>
    </div>
  )
}

export default Hero;