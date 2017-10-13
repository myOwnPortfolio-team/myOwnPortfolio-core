/* global window */

import React from 'react';

const D3Map = require('react-d3-map').Map;

const Map = (props) => {
  const width = window.screen.width;
  return (
    <section
      id={props.id}
      className="module_map"
    >
      <D3Map
        width={width}
        height={width * 0.5}
        scale={1200}
        scaleExtent={[1 << 12, 1 << 13]}
        center={[-5, 55.4]}
      />
    </section>
  );
};

module.exports = Map;
