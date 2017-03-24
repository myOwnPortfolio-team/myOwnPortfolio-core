import React from 'react';

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      src: "#"
    }
  },

  render: function() {
    return(
      <img
        src={this.props.src}
        alt="profile"
        className="module_home_profile_picture"
      />
    );
  }
});
