import React from 'react';
import AnimatedBackground from './classes/AnimatedBackground.jsx';
import Avatar from './classes/Avatar.jsx';
import ReactRotatingText from 'react-rotating-text';


module.exports = React.createClass({
  render: function() {
    return(
      <div
        id={this.props.id}
        className="module_home"
      >
        <div className="module_home_content">
          <Avatar properties={this.props.properties.avatar}/>
          <div className="module_home_typewriter">
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
        </div>
        <AnimatedBackground properties={this.props.properties.background}/>
      </div>
    );
  }
});
