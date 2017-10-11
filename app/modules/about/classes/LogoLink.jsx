import React from 'react';
import PropTypes from 'prop-types';

class LogoLink extends React.Component {
  render() {
    return (
      <a href={this.props.properties.href}>
        <img
          className="module-about-logo"
          src={this.props.properties.src}
          alt={this.props.properties.alt}
        />
      </a>
    );
  }
}

LogoLink.propTypes = {
  properties: PropTypes.shape({
    href: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

module.exports = LogoLink;
