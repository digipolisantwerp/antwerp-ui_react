import React from 'react';

const Contact = ({ name, avatar, style }) => {
  return (
    <div class="m-contact" style={style}>
      {avatar}
      <div class="m-contact__info">
        <p class="u-text-bold">{name}</p>
      </div>
    </div>
  )
}

export default Contact;