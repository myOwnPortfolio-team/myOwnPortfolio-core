import React from 'react';
import Component from './Component.jsx';
var modules = require('../config/import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let modules_list = modules.map((data) => {
      let Module = data.module;
      return (
        <Component id={"module_" + data.name} key={data.name}>
          <Module content={data.content} style={data.style}/>
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
