import React from 'react';
import Experience from './classes/Experience.js';
import Education from './classes/Education.js';


module.exports = React.createClass({
  generateExeriences: function(experience) {
    return experience.map((obj, pos) => {
      return (
        <Experience
          key={"exp_" + pos}
          content={obj}
        />
      )
    })
  },

  generateEducation: function(education) {
    return education.map((obj, pos) => {
      return (
        <Education
          key={"edu_" + pos}
          content={obj}
        />
      )
    })
  },

  render: function() {
    return (
      <section
        id={this.props.id}
        className="module_rubrique"
      >
        <h2>{this.props.content.title}</h2>
        {this.generateExeriences(this.props.content.experience)}
        {this.generateEducation(this.props.content.education)}
      </section>
    );
  }
});
