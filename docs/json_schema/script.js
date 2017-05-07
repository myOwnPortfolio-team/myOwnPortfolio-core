var docson = require('docson');
var props = require('./import.js');
var currentGroup = "";

props.schemas.map((schema, pos) => {
  if (currentGroup !== schema.group) {
    currentGroup = schema.group;
    (document.body.appendChild(document.createElement("h1"))).innerText = currentGroup;
  }
  var element = document.body.appendChild(document.createElement("div"));
  docson.doc(element, schema);
});
