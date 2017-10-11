/* global window */

import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import AnimatedBackground from './classes/AnimatedBackground.jsx';
import Avatar from './classes/Avatar.jsx';

class Home extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        className="module-home"
      >
        <div className="module-home-content">
          <Avatar properties={this.props.properties.avatar} />
          <div className="module-home-typewriter">
            <span>{this.props.content.before_typewriter}</span>
            <ReactRotatingText
              items={this.props.properties.typewriter.items}
              cursor={this.props.properties.typewriter.cursor}
              pause={this.props.properties.typewriter.pause}
              emptyPause={this.props.properties.typewriter.emptyPause}
              typingInterval={this.props.properties.typewriter.typingInterval}
              deletingInterval={this.props.properties.typewriter.deletingInterval}
            />
          </div>
          <button
            className="module-home-button btn btn-default"
            onClick={() => window.scrollTo(0, window.innerHeight)}
          >
            <i className="fa fa-chevron-down" aria-hidden="true" />
          </button>
        </div>
        <AnimatedBackground properties={this.props.properties.background} />
      </div>
    );
  }
}

module.exports = Home;
