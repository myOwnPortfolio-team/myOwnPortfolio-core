import React from 'react';

const LogoLink = props => (
  <a href={props.properties.href}>
    <img
      className="module-about-logo"
      src={props.properties.src}
      alt={props.properties.alt}
    />
  </a>
);

module.exports = LogoLink;
