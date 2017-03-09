import React from 'react';
import Ajv from 'ajv';

const ModulesLoader = React.createClass({
  render: function() {
    let data = require("../config/modules_list.json").modules_list;
    let schema = require("../config/modules_schemas.json");

    let ajv = new Ajv();
    let valid = ajv.validate(schema, data);
    if (!valid) console.log(ajv.errors);

    return (<div>Hello World</div>);
  }
})

export default ModulesLoader;
