import React from 'react';
import AnimatedBackground from './classes/AnimatedBackground.jsx';
import Avatar from './classes/Avatar.jsx';

module.exports = React.createClass({
  render: function() {
    return(
      <div
        id={this.props.id}
        className="module_home"
      >
        <div className="module_home_info">
          <span className="module_home_title">PORTFOLIO</span>
          <Avatar src="https://fr.gravatar.com/userimage/45448759/031c14bdffe709c881b0ed4bced8e433.jpg?size=200" />
          <span className="module_home_username">Thibault THÉOLOGIEN</span>
        </div>

        <AnimatedBackground />
      </div>
    );
  }
});
