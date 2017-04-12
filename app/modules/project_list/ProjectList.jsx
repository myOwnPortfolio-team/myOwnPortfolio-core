import React from 'react';
import Project from './classes/Project.jsx'

module.exports = React.createClass({
  generateProjectList: function(projectList){
    return projectList.map((projet, pos) => {
      return (
        <Project
          content={projet}
          animation="flip-left"
          buttonText={this.props.content.button_text}
          key={"module_project_list_" + projet.title + "_" + pos}
        />
      );
    });
  },

  render: function() {
    return (
      <section
        className="module_project_list"
        id={this.props.id}
        data-aos="flip-down"
      >
        <h2
          className="module_project_list_title"
        >
          {this.props.content.title}
        </h2>
        {this.generateProjectList(this.props.content.project_list)}
      </section>
    );
  }
});
