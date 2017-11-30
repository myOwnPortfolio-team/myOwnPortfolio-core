/* global window */

import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import { Button } from 'semantic-ui-react';

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
      <Button
        circular
        icon="chevron down"
        className="module-home-button"
        onClick={() => window.scrollTo(0, window.innerHeight)}
      />
    </div>
    <AnimatedBackground properties={props.properties.background} />
  </div>
);


module.exports = Home;
