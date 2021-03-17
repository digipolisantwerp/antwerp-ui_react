import React from 'react';

const styles = {
  overflow: 'auto'
};

type Props = {
  children?: any,
};

const Hero = (props: Props) => {
  const { children } = props;
  return (
    <div className="u-wrapper u-bg-light" style={styles}>
      <div className="u-container">
        <div className="u-text-center u-margin-lg">
        {children}
        </div>
      </div>
    </div>
  )
};

export default Hero;
