/* global window */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import LogoLink from './classes/LogoLink.jsx';

const slug = require('slug');

function generateLogosLinks(links) {
  return links.map((obj) => {
    const key = slug(`link to ${obj.alt}`, { lower: true, replacement: '_' });
    return (
      <LogoLink
        key={key}
        properties={obj}
      />
    );
  });
}

class About extends React.Component {
  render() {
    return (
      <section
        className="module-about"
        id={this.props.id}
        data-aos={this.props.properties.module_animation}
      >
        <h2
          className="module-about_title"
          data-aos={this.props.properties.content_animation}
        >
          {this.props.content.title}
        </h2>

        <div
          className="module-about-content"
          data-aos={this.props.properties.content_animation}
        >
          <ReactMarkdown
            source={this.props.content.text.join(' \n')}
          />
        </div>

        <div
          className="module-about-links"
          data-aos={this.props.properties.content_animation}
        >
          {generateLogosLinks(this.props.properties.links)}
        </div>

        <button
          className="btn module-about-download"
          onClick={() => window.open(this.props.properties.resume_link)}
        >
          {this.props.content.download}
        </button>
      </section>
    );
  }
}

module.exports = About;
