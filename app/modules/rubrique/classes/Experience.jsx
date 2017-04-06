import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <p>{this.props.content.post}</p>
        <p>{this.props.content.company}</p>
        <p>{this.props.content.start} à {this.props.content.end} - {this.props.content.place}</p>
        <ReactMarkdown source={this.props.content.description} />
      </article>
    );
  },
});
