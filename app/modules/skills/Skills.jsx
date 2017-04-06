import React from 'react';

import Skill from './classes/Skill.jsx';

module.exports = React.createClass({
  generateSkills: function(skills) {
    console.log(skills);
    return skills.map((obj, pos) => {
      return (
        <li key={"skill_" + obj.name + "_" + pos}>
          <Skill
            content={obj}
          />
        </li>
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
        <ul>
          {this.generateSkills(this.props.content.skills)}
        </ul>
      </section>
    );
  }
});
