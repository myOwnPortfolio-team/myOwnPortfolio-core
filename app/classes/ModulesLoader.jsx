import React from 'react';
import {Helmet} from "react-helmet";

const slug = require('slug');
const modules = require('../import.js').modules_list;
const properties = require('../import.js').properties;

class ModuleLoader extends React.Component {
  render() {
    let links = {
      id_list : [],
      name_list: [],
      name_unreferenced: [],
    };
    let modules_list = modules.map((data) => {
      let name = slug('module ' + data.name, {lower: true, replacement: '_'});
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
          <title>{properties.title}</title>
          <link rel="icon" href=""/>
        </Helmet>
        {modules_list}
      </div>
   );
  }
}

module.exports = ModuleLoader;
