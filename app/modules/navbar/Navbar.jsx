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
            href={"#"+id}
            className="nav-item nav-link"
          >
            {this.props.links.name_list[pos]}
          </a>
        );
      }
    });

    return (
      <nav id={RANDOM_ID} className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top module_navbar">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">{content.title}</a>
        <div
          className="collapse navbar-collapse"
          id="navbarResponsive"
        >
          <div className="navbar-nav">
            {links}
          </div>
        </div>
      </nav>
    );
  }
});
