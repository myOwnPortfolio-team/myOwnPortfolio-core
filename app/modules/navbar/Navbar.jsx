import React from 'react';
import Ajv from 'ajv';

var Toolbox = require('../../classes/Toolbox.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      id: "navbar",
      content: "none",
      properties: {
        "id_list": [],
        "name_list": [],
        "name_unreferenced": [],
      },
    }
  },

  render: function() {
    let ajv = new Ajv();
    let content_schema = require("./json_schema/content.json");
    let content = this.props.content;

    if (content === "none") {
      content = require('./json_config/content.json');
    }

    if (!ajv.validate(content_schema, content)) {
      return Toolbox.json_validation_error(content_schema, content, ajv.errors);
    }

    let links = this.props.properties.id_list.map((id, pos) => {
      if (id !== this.props.id && !Toolbox.is_name_unreferenced(this.props.properties.name_unreferenced, this.props.properties.name_list[pos])) {
        return (
          <a
            key={"link_to_" + id}
            href={"#"+id}
            className="nav-item nav-link"
          >
            {this.props.properties.name_list[pos]}
          </a>
        );
      }
    });

    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top container module_navbar">
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
