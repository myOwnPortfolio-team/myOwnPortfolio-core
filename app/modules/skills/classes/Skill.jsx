import React from 'react';
import {Line, Circle} from 'rc-progress';

let tm;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      percent: 0,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    let percent = nextProps.percent;
    if (percent <= this.props.content.level) {
      this.setState({
        percent: percent,
      });
    }
  },

  render: function() {
    return (
      <div
        className="module_skills_block"
        data-aos=""
      >
        <Circle
          className="module_skills_gauge"
          percent={this.state.percent}
          strokeWidth="4"
          strokeColor="white"
          gapDegree="0"
          gapPosition="bottom"
        />
        <span className="module_skills_name">
          {this.props.content.name}
        </span>
      </div>
    );
  }
});
