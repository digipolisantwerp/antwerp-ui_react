import React from 'react';

type Props = {
  /** Contact name */
  name: string,
  avatar?: any,
  style?: object,
  info?: string,
  /** Qa id */
  qa?: string,
};

const Contact = (props: Props) => {
  const { name, avatar, style, info, qa } = props;
  return (
    <div className="m-contact" style={style} data-qa={qa}>
      {avatar}
      <div className="m-contact__info">
        <p className="u-text-bold">{name}</p>
        {info && <p className="small">{info}</p>}
      </div>
    </div>
  )
}

export default Contact;