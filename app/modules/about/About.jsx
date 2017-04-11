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
    var content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra molestie purus, convallis condimentum magna ultrices ac. Curabitur semper vel purus eu posuere. Curabitur non libero non enim dapibus commodo venenatis a lacus. Maecenas pellentesque nisl lorem, et posuere eros convallis sit amet. Integer molestie vestibulum finibus. Donec eget maximus metus. Nulla congue fringilla turpis, nec vestibulum nibh condimentum sed. Integer gravida eros sit amet ante hendrerit, id molestie purus eleifend. Aenean ac varius nisl. Duis et venenatis est, suscipit faucibus lectus. Cras euismod auctor eros in imperdiet. Maecenas vulputate tempor urna non tincidunt."
    return (
      <section
        id={this.props.id}
        className="module_about"
        data-aos="flip-down"
      >
        <h2
          className="module_about_title"
        >
          Thibault THEOLOGIEN
        </h2>

        <ReactMarkdown
          className="module_about_content"
          source={content}
        />

        <div
          className="module_about_links"
        >
          {this.generate_logos_links(this.props.properties.links)}
        </div>
      </section>
    );
  }
});
