import React from 'react';
import SkillGroup from './classes/SkillGroup.jsx';

module.exports = React.createClass({
  generateSkillGroup: function(skill_group) {
    return skill_group.map((obj, pos) => {
      return (
        <SkillGroup
          content={obj}
          key={"module_skills_group_" + obj.name + "_" + pos}
        />
      )
    });
  },

  render: function() {
    return (
      <section
        id={this.props.id}
        className="module_skills"
        data-aos="flip-down"
      >
        <h2 className="module_skills_title">{this.props.content.title}</h2>
        {this.generateSkillGroup(this.props.content.skill_group)}
      </section>
    );
  }
});
