var fs = require('fs');
var Ajv = require('ajv');

var data = require("../../app/config/modules_list.json").modules_list;
var ajv = new Ajv();
var valid = ajv.validate(require("../../app/config/modules_schema.json"), data);

if (!valid) {
  return console.log(JSON.stringify(ajv.errors));
}

var content = 'module.exports = { \n\
  "modules_list": [\n';

for (var i = 0; i < data.length; i++) {
  content += '\
    { \n\
      "name": "' + data[i].name + '", \n\
      "module": require("' + data[i].module_path + '"), \n';

  if (data[i].content_path !== undefined && data[i].content_path !== "") {
    content += '\
      "content": require("' + data[i].content_path + '"), \n';
  }
  else {
    content += '\
      "content": "' + data[i].content_path + '", \n';
  }

  if (data[i].style_path !== undefined && data[i].style_path !== "") {
    content += '\
      "style": require("' + data[i].style_path + '") \n';
  }
  else {
    content += '\
      "style": "' + data[i].style_path + '" \n';
  }

  content += '\
    }';
  if (i < data.length - 1) {
    content += ',';
  }
  content += '\n';
}

content += '\
  ]\n\
}';

fs.writeFile("./app/config/import.js", content, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Script import.js généré");
});
