import React from 'react';
import ReactMarkdown from 'react-markdown';

const slug = require('slug');

class Block extends React.Component {
  generateBlocs(block) {
    return block.map((obj, pos) => {
      const key = slug(`module rubric block ${obj.title} ${pos}`, { lower: true, replacement: '_' });
      return (
        <div
          key={key}
          data-aos={this.props.properties.line_animation}
        >
          <div className="module-rubric-descriptor">
            {obj.title}
          </div>
          <ReactMarkdown
            className="module-rubric-content"
            source={obj.content.join(' \n')}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="timeline-block">
        <div className="timeline-icon" />
        <div
          className="timeline-content"
          data-aos={this.props.properties.bloc_animation}
        >
          <article>
            {this.generateBlocs(this.props.content.block)}
          </article>

          <div className="timeline-date">
            {this.props.content.date}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Block;
