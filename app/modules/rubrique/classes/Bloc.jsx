import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  generateBlocs: function(bloc) {
    return bloc.map((obj, pos) => {
      return (
        <div
          data-aos={this.props.properties.line_animation}
          key={"bloc_" + obj.title + "_" + pos}
          className="module_rubrique_bloc"
        >
          <div className="module_rubrique_descriptor">
            {obj.title}
          </div>
          <ReactMarkdown
            className="module_rubrique_content"
            source={obj.content.join(" \n")}
          />
        </div>
      )
    });
  },

  render: function() {
    return (
      <div className="timeline-block">
        <div className="timeline-icon"></div>
        <div
          className="timeline-content"
          data-aos={this.props.properties.bloc_animation}
        >
          <article>
            {this.generateBlocs(this.props.content.bloc)}
          </article>

          <div className="timeline-date">
            {this.props.content.date}
          </div>
        </div>
      </div>
    );
  }
});
