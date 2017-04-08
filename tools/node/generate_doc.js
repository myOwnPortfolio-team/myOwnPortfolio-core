const fs = require('fs');

const pwd = process.cwd();
const src = "/app/modules";
const dist = "/docs/import.js";

const schemas = [
  "content.json",
  "properties.json",
  "style.json"
];

var paths = [];


fs.readdir(pwd + src, (err, modules_list) => {
  for (var module_name in modules_list) {
    for (var schema in schemas) {
      paths.push(pwd + src + '/' + module_name + '/json_schema/' + schema);
    }
  }

  var output = 'module.exports = ' + JSON.stringify({
    "schema": schemas,
    "modules": modules_list,
    "paths": paths
  });
    
  fs.writeFile(pwd + dist, output, function(err) {
    if(err) {
      throw new Error(err);
    }
    console.log("Script import.js généré");
  });
});
