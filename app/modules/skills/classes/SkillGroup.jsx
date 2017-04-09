import React from 'react';
import Visible from 'react-on-visible';

import Skill from './Skill.jsx';


module.exports = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
    }
  },

  restartGauge: function(visible) {
    this.setState({
      visible: visible
    });
  },

  generateSkills: function(skills) {
    return skills.map((obj, pos) => {
      return (
        <Skill
          key={"skill_" + obj.name + "_" + pos}
          content={obj}
          visible={this.state.visible}
        />
      )
    });
  },

  render: function() {
    return (
      <Visible
        onChange={this.restartGauge}
        bounce={true}
        percent={100}
      >
        <div className="module_skills_group">
          <h3>{this.props.content.name}</h3>
          {this.generateSkills(this.props.content.skills)}
        </div>
      </Visible>
    );
  }
});
