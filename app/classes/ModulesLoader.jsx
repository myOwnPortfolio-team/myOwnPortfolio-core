import React from 'react';
import {Helmet} from "react-helmet";
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
        <Helmet>
          <title>Portfolio de Thibault</title>
          <link rel="icon" href="https://fr.gravatar.com/userimage/45448759/031c14bdffe709c881b0ed4bced8e433.jpg?size=48"/>
        </Helmet>
        {modules_list}
      </div>
   );
  }
});
