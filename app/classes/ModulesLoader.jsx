import React from 'react';
import Component from './Component.jsx';

const modules = require('../config/import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let properties = {
      "id_list" : [],
      "name_list": [],
      "name_unreferenced": [],
    };
    let modules_list = modules.map((data) => {
      let Module = data.module;
      properties.id_list.push("module_"+data.name);
      properties.name_list.push(data.name);

      return (
        <Module
          id={"module_" + data.name}
          key={"module" + data.name}
          content={data.content}
          properties={properties}
        />
      );
    });
    return (
      <div className="container">
        {modules_list}
      </div>
   );
  }
});
