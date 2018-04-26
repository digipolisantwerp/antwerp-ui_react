import React from 'react';

type Props = {
  style?: object,
  children?: any
};
const Footer = (props: Props) => {
  const { style, children } = props;
  return (
    <footer className="o-footer" style={style}>
      <span className="o-footer__label">{children || '© 2018 Stad Antwerpen'}</span>
      <a href="/" className="o-footer__button a-button a-button--secondary has-icon">
        <i className="fa fa-arrow-up"></i>
      </a>
    </footer>
  )
}

export default Footer;