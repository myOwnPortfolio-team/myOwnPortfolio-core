import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { Icon } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

const slug = require('slug');

const generateContent = blockList => blockList.map((block, pos) => (
  <div
    className="module-rubric-block"
    key={slug(`module rubric block ${block.title} ${pos}`, { lower: true, replacement: '_' })}
  >
    <div className="module-rubric-descriptor">
      {block.title}
    </div>
    <ReactMarkdown
      className="module-rubric-content"
      source={block.content.join(' \n')}
    />
  </div>
));

const generateRubric = rubric => rubric.map((obj, pos) => (
  <TimelineEvent
    title={obj.title}
    createdAt={obj.date}
    key={slug(`module rubric block ${pos}`, { lower: true, replacement: '_' })}
    icon={<Icon name="graduation" />}
  >
    {generateContent(obj.block)}
  </TimelineEvent>
));

const Rubric = props => (
  <section
    id={props.id}
    className="module-rubric"
    data-aos={props.properties.rubric_animation}
  >
    <h2
      className="module-rubric-title"
    >
      {props.content.title}
    </h2>

    <Timeline>
      {generateRubric(props.content.rubric)}
    </Timeline>
  </section>
);

module.exports = Rubric;
