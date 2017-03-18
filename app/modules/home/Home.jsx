import React from 'react';

module.exports = React.createClass({
  render: function() {
    return(
      <div
        id={this.props.id}
        className="module_home"
      >
        <div className="module_home_info">
          <span className="module_home_title">PORTFOLIO</span>
          <img
          src="https://fr.gravatar.com/userimage/45448759/031c14bdffe709c881b0ed4bced8e433.jpg?size=200"
          alt="profile"
          className="module_home_profile_picture"
          />
          <span className="module_home_username">Thibault THÉOLOGIEN</span>
        </div>
        <a
          href="#"
          className="module_info_next"
        >
          Voir la suite ?
        </a>
      </div>
    );
  }
});
