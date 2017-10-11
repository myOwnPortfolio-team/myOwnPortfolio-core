import React from 'react';
import SkillGroup from './classes/SkillGroup.jsx';

const slug = require('slug');

function generateSkillGroup(skillGroup) {
  return skillGroup.map((obj, pos) => {
    const key = slug(`module skill list group ${obj.name} ${pos}`, { lower: true, replacement: '_' });
    return (
      <SkillGroup
        content={obj}
        key={key}
      />
    );
  });
}

class SkillList extends React.Component {
  render() {
    return (
      <section
        id={this.props.id}
        className="module-skill-list"
        data-aos="flip-down"
      >
        <h2 className="module-skill-list-title">{this.props.content.title}</h2>
        {generateSkillGroup(this.props.content.skill_group)}
      </section>
    );
  }
}

module.exports = SkillList;
