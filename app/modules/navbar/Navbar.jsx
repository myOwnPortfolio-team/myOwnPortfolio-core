import React from 'react';
import Headroom from 'headroom.js';
// import Headroom from 'react-headroom';

import LogoLink from './classes/LogoLink.jsx';
import Toolbox from '../../classes/Toolbox.jsx';

const RANDOM_ID = "randomId" + parseInt(Math.random() * 10000);
console.log(RANDOM_ID);

module.exports = React.createClass({
  componentDidMount: function() {
    var headroom = new Headroom(document.getElementById(RANDOM_ID));
    console.log(RANDOM_ID);
    headroom.init();
  },

  generate_links: function(links) {
    return links.map((id, pos) => {
      if (id !== this.props.id && !Toolbox.is_name_unreferenced(this.props.links.name_unreferenced, this.props.links.name_list[pos])) {
        return (
          <a
            key={"link_to_" + id}
            className="module_navbar_link"
            href={"#"+id}
          >
            {this.props.links.name_list[pos]}
          </a>
        );
      }
    });
  },

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
        <nav id={RANDOM_ID} className="navbar navbar-light bg-faded module_navbar">
          <div className="module_navbar_link_list">
            {this.generate_links(this.props.links.id_list)}
          </div>
          <div className="module_navbar_logo_list" >
            {this.generate_logos_links(this.props.properties.logoslinks)}
          </div>
        </nav>
    );
  }
});
