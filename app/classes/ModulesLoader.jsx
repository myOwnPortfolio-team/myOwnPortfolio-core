import React from 'react';
var modules = require('../config/import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let modules_list = modules.map((data) => {
      let Component = data.component;
      return (<div key={data.name}><Component content={data.content} /></div>);
    });

    return (<div> {modules_list} </div>);
  }
});
