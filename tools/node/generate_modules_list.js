const Ajv = require('ajv');

const main = function() {
  const data = require("../../app/config/modules_list.json").modules_list;
  const schema = require("../../app/config/modules_schema.json");
  validateJSON(data, schema);

  var importJS = 'module.exports = { \n\
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


const validateJSON = function(jsonData, jsonSchema) {
  var ajv = new Ajv();
  var valid = ajv.validate(jsonSchema, jsonData);

  if (!valid) {
    console.log(JSON.stringify(ajv.errors));
    process.exit();
  }
}


const makeJS = function(data, isTheLast) {
  var importJS = '\
    { \n\
      "name": "' + data.name + '", \n\
      "module": require("' + data.module_path + '"), \n';

  if (data.content_path !== undefined && data.content_path !== "") {
    importJS += '\
      "content": require("' + data.content_path + '"), \n';
  }
  else {
    importJS += '\
      "content": "none", \n';
  }

  if (data.style_path !== undefined && data.style_path !== "") {
    importJS += '\
      "style": require("' + data.style_path + '") \n';
  }
  else {
    importJS += '\
      "style": "none" \n';
  }

  importJS += '\
    }';
  if (!isTheLast) {
    importJS += ',';
  }
  importJS += '\n';

  return importJS;
}


const makeSCSS = function(data) {
  if (data.style_path !== undefined && data.style_path !== "") {
    return '@import "' + data.style_path + '";\n';
  }
  else {
    return '@import "' + makeStylePath(data.module_path) + '";\n'
  }
}


const writeFiles = function(importJS, importSCSS){
  let fs = require('fs');

  fs.writeFile("./app/config/import.js", importJS, function(err) {
    if(err) {
      console.log(err);
      process.exit();
    }
    console.log("Script import.js généré");
  });

  fs.writeFile("./app/config/import.scss", importSCSS, function(err) {
    if(err) {
      console.log(err);
      process.exit();
    }
    console.log("Fichier import.scss généré");
  });
}


const makeStylePath = function(module_path) {
  var first_part = "../modules/";
  var app_path = "../../app/modules/";
  var module_name = module_path.substring(first_part.length);
  module_name = module_name.substring(0, module_name.indexOf("/"));
  style_path = module_name + "/json_config/style.json";
  schema_path = module_name + "/json_schema/style.json"

  validateJSON(require(app_path + style_path), require(app_path + schema_path));

  return first_part + style_path;
}


main();
