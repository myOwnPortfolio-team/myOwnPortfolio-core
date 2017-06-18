import React from 'react';
var Map = require('react-d3-map').Map;

class Map extends React.Component {
  render() {
    var width = window.screen.width;

    return (
      <section
        id={this.props.id}
        className="module_map"
      >
        <Map
          width= {width}
          height={width * 0.5}
          scale={1200}
          scaleExtent= {[1 << 12, 1 << 13]}
          center= {[-5, 55.4]}
        >
        </Map>
      </section>
    );
  }
}

module.exports = Map;
