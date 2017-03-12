import React from 'react';

module.exports = React.createClass({
  render: function() {
    return(
      <div
        id={this.props.id}
        style={{marginTop: 500}}
      >
        Module de test
      </div>
    );
  }
});
