import React from 'react';
import Headroom from 'headroom.js';

const RANDOM_ID = "random_id_" + parseInt(Math.random() * 10000);

class Navbar extends React.Component {
  componentDidMount() {
    var headroom = new Headroom(document.getElementById(RANDOM_ID));
    headroom.init();
  }

  generateLinks(links) {
    let i = 0;
    return links.map((id, pos) => {
      if (id !== this.props.id && !this.isNameUnreferenced(this.props.links.name_unreferenced, this.props.links.name_list[pos])) {
        var icon = this.props.properties.icons_list[i++];
        if (icon === undefined) {
          icon = "fa-question";
        }
        return (
          <a
            key={"link_to_" + id}
            className="module_navbar_link"
            href={"#"+id}
          >
            <span className="module_navbar_link_text">
              {this.props.links.name_list[pos]}
            </span>
            <i
              className={"fa fa-2x module_navbar_link_icon " + icon}
              aria-hidden="true"
              onClick={function() {console.log("click");}}
            />
          </a>
        );
      }
    });
  }

  isNameUnreferenced(unreferencedName, currentName) {
    for (var i = 0; i < unreferencedName.length; i++) {
      if (unreferencedName[i] === currentName) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
        <nav id={RANDOM_ID} className="navbar navbar-light bg-faded module_navbar">
          <div className="module_navbar_link_group">
            {this.generateLinks(this.props.links.id_list)}
          </div>
        </nav>
    );
  }
}

module.exports = Navbar;
