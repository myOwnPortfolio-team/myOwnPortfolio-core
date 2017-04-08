var docson = require('docson');
var props = require('./import.js');

props.schemas.map((schema, pos) => {
  var element = document.body.appendChild(document.createElement("div"));
  docson.doc(element, schema);
});
