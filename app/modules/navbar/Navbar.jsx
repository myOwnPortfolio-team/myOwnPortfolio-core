import React from 'react';
import Ajv from 'ajv';

module.exports = React.createClass({
  getDefaultProps: function() {
    return({
      content: require('./json_config/content.json'),
      style: require('./json_config/style.json'),
    });
  },

  errors: function(schema, data, errors){
    return (
      <div>
        <h1>INVALID JSON ENTRY</h1>
        <span>{JSON.stringify(errors)}</span><br/><br/>

        <h2>JSON_SCHEMA:</h2>
        <span>{JSON.stringify(schema)}</span><br/><br/>

        <h2>THE JSON FILE:</h2>
        <span>{JSON.stringify(data)}</span><br/>
      </div>
    );
  },

  render: function() {
    let ajv = new Ajv();
    let content_schema = require("./json_schema/content.json");
    let style_schema = require("./json_schema/style.json");

    if (!ajv.validate(content_schema, this.props.content)) {
      return this.errors(content_schema, this.props.content, ajv.errors);
    }

    if (!ajv.validate(style_schema, this.props.style)) {
      return this.errors(style_schema, this.props.style, ajv.errors);
    }

    return (
      <div style={this.props.style}>
        {this.props.content.title}
      </div>
    );
  }
});
