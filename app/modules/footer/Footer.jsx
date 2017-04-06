import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  render: function() {
    return (
      <footer
        id={this.props.id}
        className="module_footer"
      >
        <ReactMarkdown
          className="module_footer_content_left"
          source={this.props.content.content_left}
        />
        <ReactMarkdown
          className="module_footer_content_right"
          source={this.props.content.content_right}
        />
      </footer>
    );
  }
});
