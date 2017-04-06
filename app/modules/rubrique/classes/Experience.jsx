import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <div className="module_rubrique_post">
          <div className="module_rubrique_descriptor">
            Poste
          </div>
          <div className="module_rubrique_content">
            {this.props.content.post}
          </div>
        </div>

        <div className="module_rubrique_company">
          <div className="module_rubrique_descriptor">
            Société
          </div>
          <div className="module_rubrique_content">
            {this.props.content.company}
          </div>
        </div>

        <div className="module_rubrique_details">
          <div className="module_rubrique_descriptor">
            Détails
          </div>
          <div className="module_rubrique_content">
            {this.props.content.start} à {this.props.content.end} - {this.props.content.place}
          </div>
        </div>

        <div className="module_rubrique_description">
          <div className="module_rubrique_descriptor">
            Description
          </div>
          <ReactMarkdown 
            className="module_rubrique_content"
            source={this.props.content.description.join(" \n")}
          />
        </div>
      </article>
    );
  },
});
