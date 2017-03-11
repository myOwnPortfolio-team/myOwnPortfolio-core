var fs = require('fs');
var Ajv = require('ajv');

var data = require("../../app/config/modules_list.json").modules_list;
var ajv = new Ajv();
var valid = ajv.validate(require("../../app/config/modules_schema.json"), data);

if (!valid) {
  return console.log(JSON.stringify(ajv.errors));
}

var file = 'module.exports = {\n\
  "modules_list": [\n\
    {\n\
      "name": "navbar",\n\
      "component": require("../modules/navbar/Navbar.jsx"),\n\
      "content": require("../modules/navbar/content.json")\n\
    },\n\
    {\n\
      "name": "test",\n\
      "component": require("../classes/Test.jsx"),\n\
      "content": ""\n\
    }\n\
  ]\n\
}';

var content = 'module.exports = { \n\
  "modules_list": [\n';

for (var i = 0; i < data.length; i++) {
  content += '\
  { \n\
    "name": "' + data[i].name + '", \n\
    "component": require("' + data[i].module_path + '"), \n\
    "content": "' + data[i].content_path + '" \n\
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
