import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
      <section
        id={this.props.id}
        className="module_rubrique"
      >
        <h2>Expériences</h2>
        <article>
          <p>Poste</p>
          <p>Entreprise</p>
          <p>Date - Durée - Emplacement</p>
          <p>Description</p>
        </article>
        <article>
          <p>Poste</p>
          <p>Entreprise</p>
          <p>Date - Durée - Emplacement</p>
          <p>Description</p>
        </article>
        <article>
          <p>Poste</p>
          <p>Entreprise</p>
          <p>Date - Durée - Emplacement</p>
          <p>Description</p>
        </article>
        <article>
          <p>Poste</p>
          <p>Entreprise</p>
          <p>Date - Durée - Emplacement</p>
          <p>Description</p>
        </article>

        <h2>Formations</h2>
        <article>
          <p>Etablissement</p>
          <p>Diplôme</p>
          <p>Date - Emplacement</p>
        </article>
        <article>
          <p>Etablissement</p>
          <p>Diplôme</p>
          <p>Date - Emplacement</p>
        </article>
        <article>
          <p>Etablissement</p>
          <p>Diplôme</p>
          <p>Date - Emplacement</p>
        </article>
      </section>
    );
  }
});
