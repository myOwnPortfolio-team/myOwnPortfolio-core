/* global document */

import React from 'react';
import Headroom from 'headroom.js';
import Scroll from 'react-scroll';
import { Menu, Responsive } from 'semantic-ui-react';

const RANDOM_ID = `module_navbar_${parseInt(Math.random() * 10000, 10)}`;
const BREAKDOWN = 900;

const item = (id, name, icon) => (
  <Scroll.Link key={`link_to_${id}`} to={id} duration={500}>
    <Responsive as={Menu.Item} maxWidth={BREAKDOWN - 1} icon={icon} />
    <Responsive as={Menu.Item} minWidth={BREAKDOWN} name={name} icon={icon} />
  </Scroll.Link>
);

const isNameUnreferenced = (unreferencedName, currentName) => {
  for (let i = 0; i < unreferencedName.length; i++) {
    if (unreferencedName[i] === currentName) return true;
  }
  return false;
};

class Navbar extends React.Component {
  componentDidMount() {
    const headroom = new Headroom(document.getElementById(RANDOM_ID));
    headroom.init();
  }

  generateLinks(links) {
    let i = 0;
    return links.map((id, pos) => {
      if (id !== this.props.id && !isNameUnreferenced(
        this.props.links.name_unreferenced,
        this.props.links.name_list[pos],
      )) {
        let icon = this.props.properties.icons_list[i++];
        if (icon === undefined) icon = 'question';
        return item(id, this.props.links.name_list[pos], icon);
      }
      return null;
    });
  }

  render() {
    return (
      <Menu id={RANDOM_ID} className="module-navbar">
        {this.generateLinks(this.props.links.id_list)}
      </Menu>
    );
  }
}

module.exports = Navbar;
