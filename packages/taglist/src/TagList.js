import React from 'react';

const TagList = ({ children }) => {
  return (
    <ul className="o-tag-list">
      {children}
    </ul>
  )
};

export default TagList;