var docson = require('docson');
var props = require('./import.js');

props.paths.map((path, pos) => {
  var element = document.body.appendChild(document.createElement("div"));
  var schema = require(path)
  docson.doc(element, schema);
});
