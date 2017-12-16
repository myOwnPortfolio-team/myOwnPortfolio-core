import React from 'react';
import { Helmet } from 'react-helmet';

const Scroll = require('react-scroll');
const slug = require('slug');
const importation = require('../import.js');

const links = {
  id_list: [],
  name_list: [],
  name_unreferenced: [],
};

const modulesList = importation.modules_list.map((data) => {
  const name = slug(`module ${data.name}`, { lower: true, replacement: '_' });
  const Module = data.module;
  links.id_list.push(name);

  links.name_list.push(data.name);
  if (!data.referenced) {
    links.name_unreferenced.push(data.name);
  }
  return (
    <Scroll.Element key={name} name={name}>
      <Module
        id={name}
        content={data.content}
        properties={data.properties}
        links={links}
      />
    </Scroll.Element>
  );
});

const ModuleLoader = () => (
  <div className="module-loader">
    <Helmet>
      <title>{importation.properties.title}</title>
      <link rel="icon" href="" />
    </Helmet>
    { modulesList }
  </div>
);

module.exports = ModuleLoader;
