import React from 'react';
import { Helmet } from 'react-helmet';

const slug = require('slug');
const modules = require('../import.js').modules_list;
const properties = require('../import.js').properties;

class ModuleLoader extends React.Component {
  render() {
    const links = {
      id_list: [],
      name_list: [],
      name_unreferenced: [],
    };
    const modulesList = modules.map((data) => {
      const name = slug(`module ${data.name}`, { lower: true, replacement: '_' });
      const Module = data.module;
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
      <div className="module-loader">
        <Helmet>
          <title>{properties.title}</title>
          <link rel="icon" href="" />
        </Helmet>
        { modulesList }
      </div>
    );
  }
}

module.exports = ModuleLoader;
