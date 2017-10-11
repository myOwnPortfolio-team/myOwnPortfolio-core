import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <img
        src={this.props.properties.src}
        alt={this.props.properties.alt}
        className="module-home-profile-picture"
      />
    );
  }
}

module.exports = Avatar;
