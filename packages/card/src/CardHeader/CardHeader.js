import React from 'react';
import Contact from '../../../contact';

type Props = {
  title: string,
  actions?: Array<any>,
  avatar: any,
};

const CardHeader = (props: Props) => {
  const { title, actions, avatar }  = props;
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