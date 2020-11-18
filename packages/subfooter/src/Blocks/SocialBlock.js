import React from 'react';

const generateSocialLinkFor = ({ name, handle }) => {
  if (handle === '') {
    return null;
  }
  return (
    <a
      href={handle}
      className={`a-button a-button--${name} has-icon u-margin-right-xs`}
      target="_blank"
      title={name}
      aria-label={name}
      rel="external noopener noreferrer">
      <span className={`fa fa-${name}`} />
    </a>
  );
};

const SocialBlock = ({
  title,
  facebook = '',
  twitter = '',
  instagram = '',
  linkedIn = '',
}) => {
  return (
    <React.Fragment>
      <h5 className="u-margin-bottom-xs">{title}</h5>
      <div>
        {generateSocialLinkFor({ name: 'facebook', handle: facebook })}
        {generateSocialLinkFor({ name: 'twitter', handle: twitter })}
        {generateSocialLinkFor({ name: 'instagram', handle: instagram })}
        {generateSocialLinkFor({ name: 'linkedin', handle: linkedIn })}
      </div>
    </React.Fragment>
  );
};

export default SocialBlock;
