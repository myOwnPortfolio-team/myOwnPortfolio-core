const Ajv = require('ajv');
const fs = require('fs');

const pwd = process.cwd();
const absolute_module_path = "/app/modules/";
const relative_module_path = "./modules/";

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
    throw new Error(JSON.stringify(ajv.errors));
  }
}


const fileExists = function(path) {
  if (fs.existsSync(path)) {
    return true;
  }
  throw new Error("File " + path + " does not exist.");
}


const makeJS = function(data, isTheLast) {
  var importJS = '\
    { \n\
      "name": "' + data.name + '", \n\
      "module": require("' + data.module_path + '"), \n';

  let module_name = getModuleName(data.module_path);
  let json_schema = pwd + absolute_module_path + module_name + "/json_schema/content.json";
  let json_data = pwd + absolute_module_path + module_name + "/json_config/content.json";

  if (data.content_path !== undefined && data.content_path !== "") {
    json_data = pwd + "/app" + data.content_path.substring(1);
    importJS += '\
      "content": require("' + checkJSON(json_schema, json_data) + '"), \n';
  }
  else {
    importJS += '\
      "content": require("' + checkJSON(json_schema, json_data) + '"), \n';
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
  let module_name = getModuleName(data.module_path);
  let importSCSS = '@import "' + relative_module_path + module_name  + '/style.scss";\n'

  let json_schema = pwd + absolute_module_path + module_name + "/json_schema/style.json";
  let json_data = pwd + absolute_module_path + module_name + "/json_config/style.json";

  if (data.style_path !== undefined && data.style_path !== "") {
    json_data = pwd + "/app" + data.style_path.substring(1);
    return '@import "' + checkJSON(json_schema, json_data) + '";\n' + importSCSS;
  }
  return '@import "' + checkJSON(json_schema, json_data) + '";\n' + importSCSS
}


const writeFiles = function(importJS, importSCSS){
  fs.writeFile(pwd + "/app/import.js", importJS, function(err) {
    if(err) {
      throw new Error(err);
    }
    console.log("Script import.js généré");
  });

  fs.writeFile(pwd + "/app/import.scss", importSCSS, function(err) {
    if(err) {
      throw new Error(err);
    }
    console.log("Fichier import.scss généré");
  });
}


const getModuleName = function(module_path, first_part) {
  let module_name = module_path.substring(relative_module_path.length);
  return module_name.substring(0, module_name.indexOf("/"));
}


const checkJSON = function(json_schema, json_data) {
  if (fileExists(json_schema) && fileExists(json_data)) {
    validateJSON(require(json_schema), require(json_data));
  }
  return json_data;
}

main();
