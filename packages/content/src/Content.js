import React from 'react';

const Content = ({ children }) => {
  return (
    <div class="u-wrapper">
      <div class="u-container">
        {children}
      </div>
    </div>
  )
}

export default Content;