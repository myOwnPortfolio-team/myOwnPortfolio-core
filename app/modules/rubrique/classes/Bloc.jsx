import React from 'react';
import ReactMarkdown from 'react-markdown';

module.exports = React.createClass({
  generateBlocs: function(bloc) {
    return bloc.map((obj, pos) => {
      return (
        <div
          data-aos="flip-left"
          key={"bloc_" + obj.title + "_" + pos}
          className="module_rubrique_bloc"
        >
          <div className="module_rubrique_descriptor">
            {obj.title}
          </div>
          <ReactMarkdown
            className="module_rubrique_content"
            source={obj.content.join(" \n")}
          />
        </div>
      )
    });
  },

  render: function() {
    return (
      <article>
        {this.generateBlocs(this.props.content)}
      </article>
    );
  }
});
