import React from 'react';
import Particles from 'particlesjs';

module.exports = React.createClass({
  componentDidMount: function() {
    Particles.init({
       selector: '.background',
       color: this.props.color,
     });
  },

  getDefaultProps: function() {
    return {
      color: '#75A5B7',
    }
  },

  render: function() {
    return(
      <canvas className="background" />
    );
  }
});
