import React from 'react';

const Avatar = props => (
  <img
    src={props.properties.src}
    alt={props.properties.alt}
    className="module-home-profile-picture"
  />
);

module.exports = Avatar;
