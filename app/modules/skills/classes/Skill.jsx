import React from 'react';
import {Line, Circle} from 'rc-progress';

let tm;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      percent: 0,
    };
  },

  increase: function() {
    let percent = this.state.percent + 1;
    let max = this.props.content.level;
    if (percent > max) {
      percent = max;
      clearTimeout(tm);
      return;
    }
    this.setState({ percent });
    tm = setTimeout(this.increase, 10);
  },

  restart() {
    clearTimeout(tm);
    this.setState({ percent: 0 }, () => {
      this.increase();
    });
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.visible !== nextProps.visible && nextProps.visible === true) {
      this.restart();
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
