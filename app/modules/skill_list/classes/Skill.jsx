import React from 'react';
import { Circle } from 'rc-progress';

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const percent = nextProps.percent;
    if (percent <= this.props.content.level) this.setState({ percent });
  }

  render() {
    return (
      <div
        className="module-skill-list-block"
        data-aos=""
      >
        <Circle
          className="module-skill-list-gauge"
          percent={this.state.percent}
          strokeWidth="4"
          strokeColor="black"
          gapDegree="0"
          gapPosition="bottom"
        />
        <span className="module-skill-list-name">
          {this.props.content.name}
        </span>
      </div>
    );
  }
}

module.exports = Skill;
