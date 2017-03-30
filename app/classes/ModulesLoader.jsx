import React from 'react';

const modules = require('../import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let links = {
      "id_list" : [],
      "name_list": [],
      "name_unreferenced": [],
    };
    let modules_list = modules.map((data) => {
      let Module = data.module;
      links.id_list.push("module_" + data.name);
      links.name_list.push(data.name);
      if (!data.referenced) {
        links.name_unreferenced.push(data.name);
      }
      return (
        <Module
          id={"module_" + data.name}
          key={"module" + data.name}
          content={data.content}
          properties={data.properties}
          links={links}
        />
      );
    });
    return (
      <div className="module_loader">
        {modules_list}
      </div>
   );
  }
});
