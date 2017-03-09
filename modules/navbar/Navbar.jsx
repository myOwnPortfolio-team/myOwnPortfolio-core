import React from 'react';
import Ajv from 'ajv';

const Navbar = React.createClass({
  getDefaultProps: function() {
    return({
      content_path: "./content.json",
    });
  },

  render: function() {
    let data = require(this.props.content_path);
    let schema = require("./content_schema.json");

    let ajv = new Ajv();
    let valid = ajv.validate(schema, data);
    if (!valid) {
      return (
        <div>
          <h1>INVALID JSON ENTRY</h1>
          <span>{JSON.stringify(ajv.errors)}</span> <br/>
          <span>Check the JSON-Schemas</span>
        </div>
      );
    }

    return (<div>{data.title}</div>);
  }
})
