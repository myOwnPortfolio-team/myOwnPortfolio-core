import React from 'react';

const slug = require('slug');
const modules = require('../import.js').modules_list;

module.exports = React.createClass({
  render: function() {
    let links = {
      "id_list" : [],
      "name_list": [],
      "name_unreferenced": [],
    };
    let modules_list = modules.map((data) => {
      let name = slug("module " + data.name, {lower: true, replacement: "_"});
      let Module = data.module;
      links.id_list.push(name);

      links.name_list.push(data.name);
      if (!data.referenced) {
        links.name_unreferenced.push(data.name);
      }

      return (
        <Module
          id={name}
          key={name}
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
