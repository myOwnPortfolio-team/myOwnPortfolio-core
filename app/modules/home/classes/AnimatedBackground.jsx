import React from 'react';
import Particles from 'particlesjs';

module.exports = React.createClass({
  componentDidMount: function() {
    Particles.init({
      selector: '.background',
      color: this.props.color,
      maxParticles:	this.props.maxParticles,
      sizeVariations:	this.props.sizeVariations,
      speed: this.props.speed,
      minDistance: this.props.minDistance,
      connectParticles: this.props.connectParticles,
      responsive: this.props.responsive,
    });
  },

  getDefaultProps: function() {
    return {
      color: '#75A5B7',
      maxParticles:	100,
      sizeVariations:	3,
      speed: 0.5,
      minDistance: 120,
      connectParticles: true,
      responsive: null,
    }
  },

  render: function() {
    return(
      <canvas className="background" />
    );
  }
});
