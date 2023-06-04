import { React, useContext } from 'react';
import { RicknMortyContext } from '../context/RicknMortyContext';
import { CardCharacter } from './CardCharacter';

export const RicknMortyList = () => {
  const { allCharacters } = useContext(RicknMortyContext);
  return (
    <>
      <div className="card-list-character container">
        {allCharacters.map((character) => (
          <CardCharacter character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};
