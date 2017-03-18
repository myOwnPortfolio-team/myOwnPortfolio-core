const main = function() {
  const data = require("../../app/config/modules_list.json").modules_list;
  const schema = require("../../app/config/modules_schema.json");
  validateJSON(data, schema);

  var importJS = 'module.exports = { \n\
    "modules_list": [\n';
  var importSCSS = '';

  for (var i = 0; i < data.length; i++) {
    importJS += makeJS(data[i], i < data.length - 1);
    importSCSS += makeSCSS(data[i]);
  }

  importJS += '\
    ]\n\
  }';

  writeFile(importJS, importSCSS);
}


const validateJSON = function(jsonData, jsonSchema) {
  var Ajv = require('ajv');
  var ajv = new Ajv();
  var valid = ajv.validate(jsonSchema, jsonData);

  if (!valid) {
    return console.log(JSON.stringify(ajv.errors));
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

const writeFile = function(importJS, importSCSS){
  let fs = require('fs');

  fs.writeFile("./app/config/import.js", importJS, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Script import.js généré");
  });

  fs.writeFile("./app/config/import.scss", importSCSS, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Fichier import.scss généré");
  });
}

const makeStylePath = function(module_path) {
  var firstPart = "../modules/";
  var style_path = module_path.substring(firstPart.length);
  style_path = style_path.substring(0, style_path.indexOf("/"));
  return firstPart + style_path + "/style/json_config.json";
}

main();
