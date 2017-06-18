import React from 'react';
import ReactMarkdown from 'react-markdown';
const slug = require('slug');

class Bloc extends React.Component {
  generateBlocs(bloc) {
    return bloc.map((obj, pos) => {
      let key = slug("module rubric bloc " + obj.title + " " + pos, {lower: true, replacement: "_"});
      return (
        <div
          key={key}
          data-aos={this.props.properties.line_animation}
          className="module_rubric_bloc"
        >
          <div className="module_rubric_descriptor">
            {obj.title}
          </div>
          <ReactMarkdown
            className="module_rubric_content"
            source={obj.content.join(" \n")}
          />
        </div>
      )
    });
  }

  render() {
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
}

module.exports = Bloc;
