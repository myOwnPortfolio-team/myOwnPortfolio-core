/* eslint global-require: "off", import/no-dynamic-require: "off" */

const fs = require('fs');

const pwd = process.cwd();
const src = '/app/modules';
const dist = '/docs/json_schema/import.js';

const schemaName = [
  'content.json',
  'properties.json',
  'style.json',
];

const schemas = [];

fs.readdir(pwd + src, (err, moduleList) => {
  schemas.push(require(`${pwd}/app/config/moduleList_schema`));
  schemas[schemas.length - 1].group = 'moduleList';

  schemas.push(require(`${pwd}/app/config/app_properties_schema`));
  schemas[schemas.length - 1].group = 'app_properties';

  for (let i = 0; i < moduleList.length; i++) {
    for (let j = 0; j < schemaName.length; j++) {
      schemas.push(require(`${pwd}${src}/${moduleList[i]}/json_schema/${schemaName[j]}`));
      schemas[schemas.length - 1].group = moduleList[i];
    }
  }

  const exportList = {
    schemaName,
    schemas,
    modules: moduleList,
  };
  const output = `module.exports = ${JSON.stringify(exportList)}`;

  fs.writeFile(pwd + dist, output, (errWrite) => { if (errWrite) throw new Error(err); });
});
