import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <footer
        id={this.props.id}
        className="module_footer"
      >
        Généré à partir de <a href="https://github.com/MacBootglass/myOwnPortfolio">myOwnPortfolio</a>
      </footer>
    );
  }
});
