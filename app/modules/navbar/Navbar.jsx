import React from 'react';
import Headroom from 'headroom.js';

import Toolbox from '../../classes/Toolbox.jsx';

const RANDOM_ID = "randomId" + parseInt(Math.random() * 10000);

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      id: "navbar",
      content: "none",
      links: {
        "id_list": [],
        "name_list": [],
        "name_unreferenced": [],
      },
    }
  },

  componentDidMount: function() {
    var headroom = new Headroom(document.getElementById(RANDOM_ID));
    headroom.init();
  },

  render: function() {
    let content = this.props.content;

    if (content === "none") {
      content = require('./json_config/content.json');
    }

    let links = this.props.links.id_list.map((id, pos) => {
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

    return (
      <nav id={RANDOM_ID} className="navbar navbar-light bg-faded module_navbar">
        <div className="module_navbar_link_list">
          {links}
        </div>
        <div className="module_navbar_logo_list" >
          <a href="https://github.com/MacBootglass">
            <img className="module_navbar_logo" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
          </a>
          <a href="https://www.linkedin.com/in/thibault-theologien/">
            <img className="module_navbar_logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
          </a>
        </div>
      </nav>
    );
  }
});
