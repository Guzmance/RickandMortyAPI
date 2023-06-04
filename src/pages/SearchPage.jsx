import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardCharacter } from '../components';
import { RicknMortyContext } from '../context/RicknMortyContext';

function SearchPage() {
  const location = useLocation();

  const { globalCharacters } = useContext(RicknMortyContext);

  const filteredCharacters = globalCharacters.filter((character) =>
    character.name.toLowerCase().includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredCharacters.length}</span> resultados:
      </p>
      <div className="card-list-character container">
        {filteredCharacters.map((character) => (
          <CardCharacter character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
