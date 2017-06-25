import React from 'react';
import SkillGroup from './classes/SkillGroup.jsx';
const slug = require('slug');

class SkillList extends React.Component {
  generateSkillGroup(skillGroup) {
    return skillGroup.map((obj, pos) => {
      let key = slug("module skill list group " + obj.name + " " + pos, {lower: true, replacement: "_"});
      return (
        <SkillGroup
          content={obj}
          key={key}
        />
      )
    });
  }

  render() {
    return (
      <section
        id={this.props.id}
        className="module_skill_list"
        data-aos="flip-down"
      >
        <h2 className="module_skill_list_title">{this.props.content.title}</h2>
        {this.generateSkillGroup(this.props.content.skill_group)}
      </section>
    );
  }
}

module.exports = SkillList;
