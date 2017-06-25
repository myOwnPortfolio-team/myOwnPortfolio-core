import React from 'react';
import {Line, Circle} from 'rc-progress';

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    let percent = nextProps.percent;
    if (percent <= this.props.content.level) {
      this.setState({
        percent: percent,
      });
    }
  }

  render() {
    return (
      <div
        className="module_skill_list_block"
        data-aos=""
      >
        <Circle
          className="module_skill_list_gauge"
          percent={this.state.percent}
          strokeWidth="4"
          strokeColor="black"
          gapDegree="0"
          gapPosition="bottom"
        />
        <span className="module_skill_list_name">
          {this.props.content.name}
        </span>
      </div>
    );
  }
}

module.exports =Skill;
