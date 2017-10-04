/* global window */

import React from 'react';
import ReactMarkdown from 'react-markdown';

class Footer extends React.Component {
  render() {
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
            onClick={() => window.scrollTo(0, 0)}
          >
            <i className="fa fa-chevron-up" aria-hidden="true" />
          </button>
        </div>
        <ReactMarkdown
          className="module_footer_content_right"
          source={this.props.content.content_right}
        />
      </footer>
    );
  }
}

module.exports = Footer;
