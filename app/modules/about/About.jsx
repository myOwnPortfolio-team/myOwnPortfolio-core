/* global window */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
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
        className="module_about"
        id={this.props.id}
        data-aos={this.props.properties.module_animation}
      >
        <h2
          className="module_about_title"
          data-aos={this.props.properties.content_animation}
        >
          {this.props.content.title}
        </h2>

        <div
          className="module_about_content"
          data-aos={this.props.properties.content_animation}
        >
          <ReactMarkdown
            source={this.props.content.text.join(' \n')}
          />
        </div>

        <div
          className="module_about_links"
          data-aos={this.props.properties.content_animation}
        >
          {generateLogosLinks(this.props.properties.links)}
        </div>

        <button
          className="btn module_about_download"
          onClick={() => window.open(this.props.properties.resume_link)}
        >
          {this.props.content.download}
        </button>
      </section>
    );
  }
}

About.propTypes = {
  id: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    module_animation: PropTypes.string,
    content_animation: PropTypes.string,
    links: PropTypes.array,
    resume_link: PropTypes.string,
  }).isRequired,
  content: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.array,
    download: PropTypes.string,
  }).isRequired,
};

module.exports = About;
