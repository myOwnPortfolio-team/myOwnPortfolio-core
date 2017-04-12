import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <section
        className="module_project_list"
        id={this.props.id}
      >
        <h2 className="module_project_list_title">Liste de projets</h2>
      </section>
    );
  }
});
