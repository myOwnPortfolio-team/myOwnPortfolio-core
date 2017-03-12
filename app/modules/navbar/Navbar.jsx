import React from 'react';
import Ajv from 'ajv';

var Toolbox = require('../../classes/Toolbox.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      id: "navbar",
      content: "none",
      style: "none",
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
    let style_schema = require("./json_schema/style.json");
    let content = this.props.content;
    let style = this.props.style;

    if (content === "none") {
      content = require('./json_config/content.json');
    }

    if (style === "none") {
      style = require('./json_config/style.json');
    }

    if (!ajv.validate(content_schema, content)) {
      return Toolbox.json_validation_error(content_schema, content, ajv.errors);
    }

    if (!ajv.validate(style_schema, style)) {
      return Toolbox.json_validation_error(style_schema, style, ajv.errors);
    }

    let links = this.props.properties.id_list.map((id, pos) => {
      if (id !== this.props.id && !Toolbox.is_name_unreferenced(this.props.properties.name_unreferenced, this.props.properties.name_list[pos])) {
        return (<a href={"#"+id}> {this.props.properties.name_list[pos]} </a>)
      }
    });

    return (
      <div
        id={this.props.id}
        style={style}
      >
        {content.title}
        {links}
      </div>
    );
  }
});
