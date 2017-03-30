import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <p>{this.props.content.post}</p>
        <p>{this.props.content.company}</p>
        <p>{this.props.content.start} à {this.props.content.end} - {this.props.content.place}</p>
        <p>{this.props.content.description}</p>
      </article>
    );
  }
});
