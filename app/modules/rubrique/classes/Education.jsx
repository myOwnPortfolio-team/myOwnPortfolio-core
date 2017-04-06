import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <p>{this.props.content.school}</p>
        <p>{this.props.content.degree}</p>
        <p>{this.props.content.start} à {this.props.content.end} - {this.props.content.place}</p>
        <ReactMarkdown source={this.props.content.description.join(" \n")} />
      </article>
    );
  }
});
