/* global window */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'semantic-ui-react';

const Footer = props => (
  <footer
    id={props.id}
    className="module-footer"
  >
    <ReactMarkdown
      className="module-footer-content-left"
      source={props.content.content_left}
    />
    <div className="module-footer-center" >
      <Button
        circular
        icon="chevron up"
        className="module-footer-button"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
    <ReactMarkdown
      className="module-footer-content-right"
      source={props.content.content_right}
    />
  </footer>
);


module.exports = Footer;
