import React from 'react';
import Ajv from 'ajv';

module.exports = React.createClass({
  getDefaultProps: function() {
    return({
      content: require('./content.json'),
      style: require('./style.json'),
    });
  },

  render: function() {
    let content_schema = require("./json_schema/content_schema.json");
    let style_schema = require("./json_schema/style_schema.json")

    let ajv = new Ajv();
    let valid = ajv.validate(content_schema, this.props.content);
    if (!valid) {
      return (
        <div>
          <h1>INVALID JSON ENTRY (CONTENT.JSON)</h1>
          <span>{JSON.stringify(ajv.errors)}</span> <br/>
          <span>JSON_SCHEMA:</span><br/>
          <span>{JSON.stringify(content_schema)}</span><br/>
          <span>THE JSON FILE:</span><br/>
          <span>{JSON.stringify(this.props.content)}</span><br/>
        </div>
      );
    }

    valid = ajv.validate(style_schema, this.props.style);
    if (!valid) {
      return (
        <div>
          <h1>INVALID JSON ENTRY (STYLE.JSON)</h1>
          <span>{JSON.stringify(ajv.errors)}</span> <br/>
          <span>JSON_SCHEMA:</span><br/>
          <span>{JSON.stringify(style_schema)}</span><br/>
          <span>THE JSON FILE:</span><br/>
          <span>{JSON.stringify(this.props.style)}</span><br/>
        </div>
      );
    }

    return (
      <div style={this.props.style}>
        {this.props.content.title}
      </div>
    );
  }
});
