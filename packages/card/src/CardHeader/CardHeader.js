import React from 'react';
import Contact from '../../../contact';

const CardHeader = ({ title, actions, avatar }) => {
  const cardHeader = (
    <div className="m-card__header" style={{ display: 'flex' }}>
      <Contact
        avatar={avatar}
        name={title}
        style={{ flex: 1, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} />
      <div style={{ float: 'right', textAlign: 'right' }}>{actions}</div>
    </div>
  );

  return (title || actions) ? cardHeader : null
}

export default CardHeader;