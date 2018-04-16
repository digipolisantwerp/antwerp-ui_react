import React from 'react';

const Footer = ({ style }) => {
  return (
    <footer className="o-footer" style={style}>
      <span className="o-footer__label">© 2017 Stad Antwerpen</span>
      <a href="/" className="o-footer__button a-button a-button--secondary has-icon">
        <i className="fa fa-arrow-up"></i>
      </a>
    </footer>
  )
}

export default Footer;