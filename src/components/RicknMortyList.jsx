import { React, useContext } from 'react';
import { RicknMortyContext } from '../context/RicknMortyContext';
import { CardCharacter } from './CardCharacter';
import { Loader } from './Loader';

export const RicknMortyList = () => {
  const { allCharacters, filteredCharacters, loading } =
    useContext(RicknMortyContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-character container">
          {filteredCharacters.length ? (
            <>
              {filteredCharacters.map((character) => (
                <CardCharacter character={character} key={character.id} />
              ))}
            </>
          ) : (
            <>
              {allCharacters.map((character) => (
                <CardCharacter character={character} key={character.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
