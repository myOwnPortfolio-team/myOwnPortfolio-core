import React from 'react';
import Block from './classes/Block.jsx';

const slug = require('slug');

class Rubric extends React.Component {
  generateRubric(rubric) {
    return rubric.map((obj, pos) => {
      const key = slug(`module rubric block ${pos}`, { lower: true, replacement: '_' });
      return (
        <Block
          content={obj}
          properties={this.props.properties}
          key={key}
        />
      )
    });
  }

  render() {
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
}

module.exports = Rubric;
