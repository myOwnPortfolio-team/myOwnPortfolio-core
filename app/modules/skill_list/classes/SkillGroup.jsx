import React from 'react';
import Visible from 'react-on-visible';

import Skill from './Skill.jsx';

module.exports = React.createClass({
  componentDidMount: function() {
    this.tm = null;
  },

  getInitialState: function() {
    return {
      visible: false,
      percent: 0,
    }
  },

  increase: function() {
    let percent = this.state.percent + 1;
    let max = 100;
    if (percent > max) {
      percent = max;
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 10);
  },

  restart(visible) {
    if (this.state.visible !== visible && visible === true) {
      clearTimeout(this.tm);
      this.setState(
        {
          percent: 0,
          visible: visible
        },
        () => {
          this.increase();
        }
      );
    }

    if (this.state.visible !== visible && visible === false) {
      this.setState({
        percent: 0,
        visible: visible
      });
    }
  },

  generateSkills: function(skills) {
    return skills.map((obj, pos) => {
      return (
        <Skill
          key={"skill_" + obj.name + "_" + pos}
          content={obj}
          percent={this.state.percent}
        />
      )
    });
  },

  render: function() {
    return (
      <Visible
        onChange={this.restart}
        bounce={true}
        percent={50}
      >
        <div
          className="module_skill_list_group"
          data-aos="flip-left"
        >
          <h3>{this.props.content.name}</h3>
          {this.generateSkills(this.props.content.skills)}
        </div>
      </Visible>
    );
  }
});
