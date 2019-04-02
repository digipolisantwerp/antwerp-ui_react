import React from 'react';

type Props = {
  /** Contact name */
  name: string,
  avatar?: any,
  style?: object,
  info?: string,
};

const Contact = (props: Props) => {
  const { name, avatar, style, info } = props;
  return (
    <div className="m-contact" style={style}>
      {avatar}
      <div className="m-contact__info">
        <p className="u-text-bold">{name}</p>
        {info && <p class="small">{info}</p>}
      </div>
    </div>
  )
}

export default Contact;