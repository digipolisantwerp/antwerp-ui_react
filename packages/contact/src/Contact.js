import React from 'react';

const Contact = ({ name, avatar, style }) => {
  return (
    <div className="m-contact" style={style}>
      {avatar}
      <div className="m-contact__info">
        <p className="u-text-bold">{name}</p>
      </div>
    </div>
  )
}

export default Contact;