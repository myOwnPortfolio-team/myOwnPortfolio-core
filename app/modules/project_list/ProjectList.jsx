import React from 'react';
import Project from './classes/Project.jsx';
const slug = require('slug');

class ProjectList extends React.Component {
  generateProjectList(projectList) {
    return projectList.map((project, pos) => {
      let key = slug("module project list " + project.title + " post", {lower: true, replacement: "_"});
      return (
        <Project
          content={project}
          animation="flip-left"
          buttonText={this.props.content.button_text}
          key={key}
        />
      );
    });
  }

  render() {
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
}

module.exports = ProjectList;
