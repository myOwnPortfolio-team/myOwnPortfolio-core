import React from 'react';
import Bloc from './classes/Bloc.jsx';
const slug = require('slug');

module.exports = React.createClass({
  generateRubric: function(rubric) {
    return rubric.map((obj, pos) => {
      let key = slug("module rubric bloc " + pos, {lower: true, replacement: "_"});
      return (
        <Bloc
          content={obj}
          properties={this.props.properties}
          key={key}
        />
      )
    })
  },

  render: function() {
    return (
      <section
        id={this.props.id}
        className="module_rubric"
        data-aos={this.props.properties.rubric_animation}
      >
        <h2
          className="module_rubric_title"
        >
          {this.props.content.title}
        </h2>

        <div className="timeline timeline-left gray-blue">
        	{this.generateRubric(this.props.content.rubric)}
        </div>
      </section>
    );
  }
});
