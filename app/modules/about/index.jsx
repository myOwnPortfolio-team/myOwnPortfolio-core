/* global window */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'semantic-ui-react';
import LogoLink from './classes/LogoLink.jsx';

const slug = require('slug');

const generateLogosLinks = links => links.map((obj) => {
  const key = slug(`link to ${obj.alt}`, { lower: true, replacement: '_' });
  return (
    <LogoLink
      key={key}
      properties={obj}
    />
  );
});

const About = props => (
  <section
    className="module-about"
    id={props.id}
    data-aos={props.properties.module_animation}
  >
    <h2
      className="module-about-title"
      data-aos={props.properties.content_animation}
    >
      {props.content.title}
    </h2>

    <div
      className="module-about-content"
      data-aos={props.properties.content_animation}
    >
      <ReactMarkdown source={props.content.text.join(' \n')} />
    </div>

    <div
      className="module-about-links"
      data-aos={props.properties.content_animation}
    >
      {generateLogosLinks(props.properties.links)}
    </div>

    <Button
      content={props.content.download}
      icon="download"
      labelPosition="left"
      className="btn module-about-download"
      onClick={() => window.open(props.properties.resume_link)}
    />
  </section>
);

module.exports = About;
