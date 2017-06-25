import React from 'react';
import Visible from 'react-on-visible';
import Skill from './Skill.jsx';
const slug = require('slug');


class SkillGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      percent: 0,
    };
  }

  componentDidMount() {
    this.tm = null;
  }

  increase() {
    let percent = this.state.percent + 1;
    let max = 100;
    if (percent > max) {
      percent = max;
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(() => this.increase(), 10);
  }

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
  }

  generateSkills(skills) {
    return skills.map((obj, pos) => {
      let key = slug("skill " + obj.name + " " + pos, {lower: true, replacement: "_"});
      return (
        <Skill
          key={key}
          content={obj}
          percent={this.state.percent}
        />
      )
    });
  }

  render() {
    return (
      <Visible
        onChange={(visible) => this.restart(visible)}
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
}

module.exports = SkillGroup;
