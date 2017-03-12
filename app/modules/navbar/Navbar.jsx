import React from 'react';
import Ajv from 'ajv';

var Toolbox = require('../../classes/Toolbox.jsx');

module.exports = React.createClass({
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

    return (
      <div style={style}>
        {content.title}
      </div>
    );
  }
});
