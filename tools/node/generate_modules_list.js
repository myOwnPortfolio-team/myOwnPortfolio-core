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
    process.exit(1);
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

  importJS += '\
    }';
  if (!isTheLast) {
    importJS += ',';
  }
  importJS += '\n';

  return importJS;
}


const makeSCSS = function(data) {
  let first_part = "../modules/";
  let importSCSS = '@import "' + first_part + getModuleName(data.module_path, first_part) + '/style.scss";\n'
  if (data.style_path !== undefined && data.style_path !== "") {
    return importSCSS + '@import "' + data.style_path + '";\n';
  }
  else {
    return importSCSS + '@import "' + makeStylePath(data.module_path, first_part) + '";\n'
  }
}


const writeFiles = function(importJS, importSCSS){
  let fs = require('fs');

  fs.writeFile("./app/config/import.js", importJS, function(err) {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    console.log("Script import.js généré");
  });

  fs.writeFile("./app/config/import.scss", importSCSS, function(err) {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    console.log("Fichier import.scss généré");
  });
}


const getModuleName = function(module_path, first_part) {
  let module_name = module_path.substring(first_part.length);
  return module_name.substring(0, module_name.indexOf("/"));
}


const makeStylePath = function(module_path, first_part) {
  let app_path = "../../app/modules/";
  let module_name = getModuleName(module_path, first_part);
  let style_path = module_name + "/json_config/style.json";
  let schema_path = module_name + "/json_schema/style.json"

  validateJSON(require(app_path + style_path), require(app_path + schema_path));

  return first_part + style_path;
}



const makeContentPath = function(module_path) {
  let first_part = "../modules/";
  let app_path = "../../app/modules/";
  let module_name = getModuleName(module_path, first_part);
  let style_path = module_name + "/json_config/style.json";
  let schema_path = module_name + "/json_schema/style.json"

  validateJSON(require(app_path + style_path), require(app_path + schema_path));

  return first_part + style_path;
}


main();
