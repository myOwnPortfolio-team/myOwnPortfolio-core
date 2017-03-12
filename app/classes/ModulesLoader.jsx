import React from 'react';
import Component from './Component.jsx';

const modules = require('../config/import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let properties = {
      "ids" : [],
    };
    let modules_list = modules.map((data) => {
      let Module = data.module;
      properties.ids.push("module_"+data.name);
      return (
        <Component
          id={"module_" + data.name}
          key={data.name}
        >
          <Module
            content={data.content}
            style={data.style}
            properties={properties.ids}
          />
        </Component>
      );
    });
    return (
      <div>
        {modules_list}
      </div>
   );
  }
});
