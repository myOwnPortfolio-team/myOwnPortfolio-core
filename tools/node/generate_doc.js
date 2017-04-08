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
  for (var i=0; i < modules_list.length; i++) {
    for (var j=0; j < schemas.length; j++) {
      paths.push(pwd + src + '/' + modules_list[i] + '/json_schema/' + schemas[i]);
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
