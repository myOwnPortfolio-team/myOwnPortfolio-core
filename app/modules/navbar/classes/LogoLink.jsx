import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <a href={this.props.properties.href}>
        <img
          className="module_navbar_logo"
          src={this.props.properties.src}
          alt={this.props.properties.alt}
        />
      </a>
    );
  }
});
