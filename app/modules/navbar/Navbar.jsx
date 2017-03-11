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
          <h1>INVALID JSON ENTRY</h1>
          <span>{JSON.stringify(ajv.errors)}</span> <br/>
          <span>Check the JSON-Schemas</span>
        </div>
      );
    }

    return (
      <div>
        {this.props.content.title}
      </div>
    );
  }
});
