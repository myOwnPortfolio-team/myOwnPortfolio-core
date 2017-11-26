/* global window */
import React from 'react';
import { Button } from 'semantic-ui-react';

const Project = (props) => {
  let button = null;
  if (props.content.href && props.content.href !== '') {
    button = (
      <Button
        content={props.buttonText}
        icon="linkify"
        labelPosition="left"
        onClick={() => window.open(props.content.href)}
      />
    );
  }

  return (
    <article
      className="module-project-list-project"
      data-aos={props.animation}
    >
      <h3>{props.content.title}</h3>
      <div>{props.content.description}</div>
      {button}
    </article>
  );
};

module.exports = Project;
