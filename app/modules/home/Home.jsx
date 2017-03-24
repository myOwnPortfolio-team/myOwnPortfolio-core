import React from 'react';
import AnimatedBackground from './classes/AnimatedBackground.jsx';
import Avatar from './classes/Avatar.jsx';
import ReactRotatingText from 'react-rotating-text';


module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      items: ['unItem'],
      cursor: true,
      pause: 1500,
      emptyPause: 1000,
      typingInterval: 50,
      deletingInterval: 50,
    }
  },

  render: function() {
    return(
      <div
        id={this.props.id}
        className="module_home"
      >
        <div className="module_home_content">
          <Avatar src="https://fr.gravatar.com/userimage/45448759/031c14bdffe709c881b0ed4bced8e433.jpg?size=200" />
          <div className="module_home_typewriter">
            <span>Vous cherchez</span>
            <ReactRotatingText
              items={[' un développeur Web ?', ' un développeur Java ?', ' Thibault THEOLOGIEN !']}
              cursor={this.props.cursor}
              pause={this.props.pause}
              emptyPause={this.props.emptyPause}
              typingInterval={this.props.typingInterval}
              deletingInterval={this.props.deletingInterval}
            />
          </div>
        </div>
        <AnimatedBackground />
      </div>
    );
  }
});
