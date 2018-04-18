import React from 'react';

type Props = {
  /** Contact name */
  name: string,
  avatar?: any,
  style?: object,
};

const Contact = (props: Props) => {
  const { name, avatar, style } = props;
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