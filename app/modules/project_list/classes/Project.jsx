import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <article
        className="module_project_list_project"
        data-aos={this.props.animation}
      >
        <h3>{this.props.content.title}</h3>
        <div>{this.props.content.description}</div>
        <button
          className="btn"
          onClick={() => { window.open(this.props.content.href); }}
        >
          {this.props.buttonText}
        </button>
      </article>
    );
  }
});
