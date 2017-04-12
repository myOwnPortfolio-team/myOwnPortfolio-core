import React from 'react';
import ReactMarkdown from 'react-markdown';

import LogoLink from './classes/LogoLink.jsx';

module.exports = React.createClass({
  generate_logos_links: function(links) {
    return links.map((obj, pos) => {
      return (
        <LogoLink
          key={"link_to_" + obj.alt}
          properties={obj}
        />
      )
    });
  },

  render: function() {
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
            source={this.props.content.text.join(" \n")}
          />
        </div>

        <div
          className="module_about_links"
          data-aos={this.props.properties.content_animation}
        >
          {this.generate_logos_links(this.props.properties.links)}
        </div>
      </section>
    );
  }
});
