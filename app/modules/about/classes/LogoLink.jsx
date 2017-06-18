import React from 'react';

class LogoLink extends React.Component {
  render() {
    return (
      <a href={this.props.properties.href}>
        <img
          className="module_about_logo"
          src={this.props.properties.src}
          alt={this.props.properties.alt}
        />
      </a>
    );
  }
}

module.exports = LogoLink;
