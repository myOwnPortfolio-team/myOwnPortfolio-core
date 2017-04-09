import React from 'react';
import Visible from 'react-on-visible';

import Skill from './classes/Skill.jsx';


module.exports = React.createClass({
  getInitialState: function() {
    return {
      visible: false,
    }
  },

  generateSkillGroup: function(skill_group) {
    return skill_group.map((obj, pos) => {
      return (
        <div className="module_skills_group">
          <h3>{obj.name}</h3>
          {this.generateSkills(obj.skills)}
        </div>
      )
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

  restartGauge: function(visible) {
    this.setState({
      visible: visible
    });
  },

  render: function() {
    return (
      <section
        id={this.props.id}
        className="module_skills"
        data-aos="flip-down"
      >
        <Visible
          onChange={this.restartGauge}
          bounce={true}
          percent={100}
        >
          <h2 className="module_skills_title">{this.props.content.title}</h2>
          <div className="module_skills_group">
            {this.generateSkillGroup(this.props.content.skill_group)}
          </div>
        </Visible>
      </section>
    );
  }
});
