import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  render: function() {
    return (
      <article>
        <div className="module_rubrique_school">
          <div className="module_rubrique_descriptor">
            École
          </div>
          <div className="module_rubrique_content">
            {this.props.content.school}
          </div>
        </div>

        <div className="module_rubrique_degree">
          <div className="module_rubrique_descriptor">
            Diplôme
          </div>
          <div className="module_rubrique_content">
            {this.props.content.degree}
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
  }
});
