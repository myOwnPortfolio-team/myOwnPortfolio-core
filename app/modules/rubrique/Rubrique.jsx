import React from 'react';

import Experience from './classes/Experience.jsx';
import Education from './classes/Education.jsx';


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
        data-aos="flip-down"
      >
        <h2 className="module_rubrique_title">{this.props.content.title}</h2>
        {this.generateExeriences(this.props.content.experience)}
        {this.generateEducation(this.props.content.education)}
      </section>
    );
  }
});
