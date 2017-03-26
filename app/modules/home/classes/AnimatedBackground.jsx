import React from 'react';
import Particles from 'particlesjs';

module.exports = React.createClass({
  componentDidMount: function() {
    Particles.init({
      selector: '.module_home_background',
      color: this.props.properties.color,
      maxParticles:	this.props.properties.maxParticles,
      sizeVariations:	this.props.properties.sizeVariations,
      speed: this.props.properties.speed,
      minDistance: this.props.properties.minDistance,
      connectParticles: this.props.properties.connectParticles,
      responsive: this.props.properties.responsive,
    });
  },

  render: function() {
    return(
      <canvas className="module_home_background" />
    );
  }
});
