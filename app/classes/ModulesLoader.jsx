import React from 'react';
import Component from './Component.jsx';
var modules = require('../config/import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let modules_list = modules.map((data) => {
      let Module = data.component;
      return (
        <Component id={"module_" + data.name} key={data.name}>
          <Module content={data.content} />
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
