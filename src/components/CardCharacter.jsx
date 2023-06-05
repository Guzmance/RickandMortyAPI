import React from 'react';
import { Link } from 'react-router-dom';

function CardCharacter({ character }) {
  return (
    <Link to={`rickandmorty/${character.id}`} className="card-character">
      <div className="card-img">
        <img src={character.image} alt={`Character: ${character.name}`} />
      </div>
      <div className="card-info">
        <span className="character-id">N° {character.id}</span>
        <h3>{character.name}</h3>

        <div className="card-types">
          <span className="genero">{character.gender}</span>
          <span className="specie">{character.species}</span>
          <span className="status">{character.status}</span>
        </div>
      </div>
    </Link>
  );
}

export { CardCharacter };
