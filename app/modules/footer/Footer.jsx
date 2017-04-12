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
        <div
          className="module_footer_center"
        >
          <button
            className="btn"
            onClick={function() {
              window.scrollTo(0, 0);
            }}
          >
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </button>
        </div>
        <ReactMarkdown
          className="module_footer_content_right"
          source={this.props.content.content_right}
        />
      </footer>
    );
  }
});
