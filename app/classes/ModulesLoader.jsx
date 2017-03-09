import React from 'react';
import Ajv from 'ajv';

const ModulesLoader = React.createClass({
  render: function() {
    let data = require("../config/modules_list.json").modules_list;
    let ajv = new Ajv();
    let valid = ajv.validate(require("../config/modules_schemas.json"), data);

    if (!valid) {
      return (
        <div>
          <h1>INVALID JSON ENTRY</h1>
          <span>{JSON.stringify(ajv.errors)}</span> <br/>
          <span>Check the JSON-Schemas</span>
        </div>
      );
    }

    const modules_list = data.map((module) =>
      <div key={module.name}>{module.name}</div>
    );

    return (<div> {modules_list} </div>);
  }
})

export default ModulesLoader;
