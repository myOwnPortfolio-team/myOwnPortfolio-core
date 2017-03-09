let Ajv = require('ajv');

let data = require("../../app/config/modules_list.json").modules_list;
let schema = require("../../app/config/modules_schemas.json");

let ajv = new Ajv();
let valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);
