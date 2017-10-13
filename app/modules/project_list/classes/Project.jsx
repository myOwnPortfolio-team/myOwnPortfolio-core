/* global window */

import React from 'react';

const Project = (props) => {
  let button = null;
  if (props.content.href && props.content.href !== '') {
    button = (
      <button
        className="btn"
        onClick={() => window.open(props.content.href)}
      >
        {props.buttonText}
      </button>
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
