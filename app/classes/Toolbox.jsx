import React from 'react';

module.exports = {
  json_validation_error: function(schema, data, errors) {
    return (
      <div>
        <h1>INVALID JSON ENTRY</h1>
        <span>{JSON.stringify(errors)}</span><br/><br/>

        <h2>JSON_SCHEMA:</h2>
        <span>{JSON.stringify(schema)}</span><br/><br/>

        <h2>THE JSON FILE:</h2>
        <span>{JSON.stringify(data)}</span><br/>
      </div>
    );
  },

  is_name_unreferenced: function(unreferenced_name, current_name) {
    for (var i = 0; i < unreferenced_name.length; i++) {
      if (unreferenced_name[i] === current_name) {
        return true;
      }
    }
    return false;
  },
}
