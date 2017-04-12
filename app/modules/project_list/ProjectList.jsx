import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <section
        className="module_project_list"
        id={this.props.id}
        data-aos="flip-down"
      >
        <h2
          className="module_project_list_title"
        >
          Liste de projets
        </h2>

        <article
          className="module_project_list_project"
          data-aos="flip-left"
        >
          <h3>myOwnPortfolio</h3>
          <div>
            Permet la création et le déploiement rapide d'un portfolio personnalisé et multilingue.
          </div>
          <button
            className="btn"
            onClick={function() { window.open("https://github.com/MacBootglass/myOwnPortfolio"); }}
          >
            Lien vers le dépot
          </button>
        </article>
        <article
          className="module_project_list_project"
        >
          <h3>Nom du projet</h3>
          <div>
            Description du projet
          </div>
          <a>Lien vers le dépot</a>
        </article>
        <article
          className="module_project_list_project"
        >
          <h3>Nom du projet</h3>
          <div>
            Description du projet
          </div>
          <a>Lien vers le dépot</a>
        </article>
        <article
          className="module_project_list_project"
        >
          <h3>Nom du projet</h3>
          <div>
            Description du projet
          </div>
          <a>Lien vers le dépot</a>
        </article>

      </section>
    );
  }
});
