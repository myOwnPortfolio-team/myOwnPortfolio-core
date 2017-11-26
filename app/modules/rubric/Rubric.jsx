import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { Icon } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

const slug = require('slug');

const blockTitle = title => <div className="module-rubric-block-title">{title}</div>;
const blockDate = date => <div className="module-rubric-block-date">{date}</div>;
const blockSubtitle = subtitle => <div className="module-rubric-block-subtitle">{subtitle}</div>;
const blockIcon = icon => <Icon className="module-rubric-block-icon" name={icon} />;
const blockContent = content => (
  <ReactMarkdown
    className="module-rubric-block-content"
    source={content.join(' \n')}
  />
);

const generateRubric = (rubric, properties) => rubric.map((block, pos) => (
  <TimelineEvent
    title={blockTitle(block.title)}
    subtitle={blockSubtitle(block.subtitle)}
    createdAt={blockDate(block.date)}
    key={slug(`module rubric block ${pos}`, { lower: true, replacement: '_' })}
    icon={blockIcon(block.icon)}
    bubbleStyle={{
      borderColor: properties.primary_color,
      color: properties.primary_color,
      backgroundColor: properties.secondary_color,
    }}
    contentStyle={{
      backgroundColor: properties.secondary_color,
      borderBottomColor: properties.primary_color,
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      boxShadow: '',
    }}
  >
    {blockContent(block.content)}
  </TimelineEvent>
));

const Rubric = props => (
  <section
    id={props.id}
    className="module-rubric"
    data-aos={props.properties.rubric_animation}
    style={{ backgroundColor: props.properties.rubric_timeline.secondary_color }}
  >
    <h2 className="module-rubric-title">
      {props.content.title}
    </h2>

    <Timeline>
      {generateRubric(props.content.rubric, props.properties.rubric_timeline)}
    </Timeline>
  </section>
);

module.exports = Rubric;
