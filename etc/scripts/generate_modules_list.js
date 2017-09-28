const Ajv = require('ajv');
const fs = require('fs');

const pwd = process.cwd();
const absoluteModulePath = '/app/modules/';
const relativeModulePath = './modules/';

const main = function() {
  const data = require(pwd + '/app/config/modules_list.json');
  const schema = require(pwd + '/app/config/modules_list_schema.json');

  validateJSON(schema, data);

  var appProperties = require(pwd + '/app/config/app_properties.json');
  var appPropertiesSchema = require(pwd + '/app/config/app_properties_schema.json');

  validateJSON(appPropertiesSchema, appProperties);

// TODO: VALIDATE JSON_SCHEMA

  var importJS = 'module.exports = { \n\
  "properties": require("' + pwd + '" + "/app/config/app_properties"), \n\
  "modules_list": [\n';
  var importSCSS = '';

  for (var i = 0; i < data.length; i++) {
    importJS += makeJS(data[i], i === data.length - 1);
    importSCSS += makeSCSS(data[i]);
  }

  importJS += '\
    ]\n\
  }';

  writeFiles(importJS, importSCSS);
}


const validateJSON = function(jsonSchema, jsonData) {
  var ajv = new Ajv();
  var valid = ajv.validate(jsonSchema, jsonData);

  if (!valid) {
    throw new Error(jsonSchema.title + "\n" + JSON.stringify(ajv.errors));
  }
}


const fileExists = function(path) {
  if (fs.existsSync(path)) {
    return true;
  }
  throw new Error('File ' + path + ' does not exist.');
}


const makeJS = function(data, isTheLast) {
  let moduleName = getModuleName(data.module_path);
  let JSONSchema = pwd + absoluteModulePath + moduleName + '/json_schema/content.json';
  let JSONData = pwd + absoluteModulePath + moduleName + '/json_config/content.json';

  let importJS = '\
  { \n\
    "name": "' + data.name + '", \n\
    "module": require("' + data.module_path + '"), \n';


  if (data.content_path !== undefined && data.content_path !== "") {
    JSONData = pwd + '/app' + data.content_path.substring(1);
  }
  importJS += '\
    "content": require("' + checkJSON(JSONSchema, JSONData) + '"), \n';

  JSONSchema = pwd + absoluteModulePath + moduleName + '/json_schema/properties.json';
  JSONData = pwd + absoluteModulePath + moduleName + '/json_config/properties.json';
  if (data.properties_path !== undefined && data.properties_path !== "") {
    JSONData = pwd + '/app' + data.properties_path.substring(1);
  }
  importJS += '\
    "properties": require("' + checkJSON(JSONSchema, JSONData) + '"), \n\
    "referenced": ' + data.referenced + ', \n\
  }';

  if (!isTheLast) {
    importJS += ',';
  }
  importJS += '\n';

  return importJS;
}


const makeSCSS = function(data) {
  let moduleName = getModuleName(data.module_path);
  let importSCSS = '@import "' + relativeModulePath + moduleName  + '/style.scss";\n'

  let JSONSchema = pwd + absoluteModulePath + moduleName + '/json_schema/style.json';
  let JSONData = pwd + absoluteModulePath + moduleName + '/json_config/style.json';

  if (data.style_path !== undefined && data.style_path !== "") {
    JSONData = pwd + '/app' + data.style_path.substring(1);
    return '@import "' + checkJSON(JSONSchema, JSONData) + '";\n' + importSCSS;
  }
  return '@import "' + checkJSON(JSONSchema, JSONData) + '";\n' + importSCSS
}


const writeFiles = function(importJS, importSCSS){
  fs.writeFile(pwd + '/app/import.js', importJS, function(err) {
    if(err) {
      throw new Error(err);
    }
    console.log('Script import.js généré');
  });

  fs.writeFile(pwd + '/app/import.scss', importSCSS, function(err) {
    if(err) {
      throw new Error(err);
    }
    console.log('Fichier import.scss généré');
  });
}


const getModuleName = function(modulePath, firstPart) {
  let moduleName = modulePath.substring(relativeModulePath.length);
  return moduleName.substring(0, moduleName.indexOf('/'));
}


const checkJSON = function(JSONSchema, JSONData) {
  if (fileExists(JSONSchema) && fileExists(JSONData)) {
    validateJSON(require(JSONSchema), require(JSONData));
  }
  return JSONData;
}

main();