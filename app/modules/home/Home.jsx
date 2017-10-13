/* global window */

import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import AnimatedBackground from './classes/AnimatedBackground.jsx';
import Avatar from './classes/Avatar.jsx';

const Home = props => (
  <div
    id={props.id}
    className="module-home"
  >
    <div className="module-home-content">
      <Avatar properties={props.properties.avatar} />
      <div className="module-home-typewriter">
        <span>{props.content.before_typewriter}</span>
        <ReactRotatingText
          items={props.properties.typewriter.items}
          cursor={props.properties.typewriter.cursor}
          pause={props.properties.typewriter.pause}
          emptyPause={props.properties.typewriter.emptyPause}
          typingInterval={props.properties.typewriter.typingInterval}
          deletingInterval={props.properties.typewriter.deletingInterval}
        />
      </div>
      <button
        className="module-home-button btn btn-default"
        onClick={() => window.scrollTo(0, window.innerHeight)}
      >
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </button>
    </div>
    <AnimatedBackground properties={props.properties.background} />
  </div>
);


module.exports = Home;
