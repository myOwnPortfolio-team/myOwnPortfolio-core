import React from 'react';

import Bloc from './classes/Bloc.jsx';

module.exports = React.createClass({
  generateRubrique: function(rubrique) {
    return rubrique.map((obj, pos) => {
      return (
        <Bloc
          key={"bloc_" + pos}
          content={obj}
          properties={this.props.properties}
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
        <h2 className="module_rubrique_title">{this.props.content.title}</h2>
        {this.generateRubrique(this.props.content.rubrique)}
      </section>
    );
  }
});
