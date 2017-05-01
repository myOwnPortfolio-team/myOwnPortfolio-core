import React from 'react';
import Bloc from './classes/Bloc.jsx';
const slug = require('slug');

module.exports = React.createClass({
  generateRubrique: function(rubrique) {
    return rubrique.map((obj, pos) => {
      let key = slug("module rubrique bloc " + pos, {lower: true, replacement: "_"});
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
        className="module_rubrique"
        data-aos={this.props.properties.rubrique_animation}
      >
        <h2
          className="module_rubrique_title"
        >
          {this.props.content.title}
        </h2>

        <div className="timeline timeline-left gray-blue">
        	{this.generateRubrique(this.props.content.rubrique)}
        </div>
      </section>
    );
  }
});
