import React from 'react';

module.exports = React.createClass({

  render: function() {
    return(
      <img
        src={this.props.properties.src}
        alt={this.props.properties.alt}
        className="module_home_profile_picture"
      />
    );
  }
});
