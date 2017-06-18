import React from 'react';

class Avatar extends React.Component {
  render() {
    return(
      <img
        src={this.props.properties.src}
        alt={this.props.properties.alt}
        className="module_home_profile_picture"
      />
    );
  }
}

module.exports = Avatar;
