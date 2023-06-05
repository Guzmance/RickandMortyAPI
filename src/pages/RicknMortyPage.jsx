import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { RicknMortyContext } from '../context/RicknMortyContext';
import { primerMayuscula } from '../helper/helper';

function RicknMortyPage() {
  const { getCharacterById } = useContext(RicknMortyContext);

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  const fetchCharacter = async (id) => {
    const data = await getCharacterById(id);
    setCharacter(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacter(id);
  }, []);

  return (
    <main className="container main-character">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-character">
            <span className="number-character">#{character.id}</span>
            <div className="container-img-character">
              <img src={character.image} alt={`character ${character?.name}`} />
            </div>

            <div className="container-info-character">
              <h1>{primerMayuscula(character.name)}</h1>

              <div className="info-character">
                <div className="group-info">
                  <p>Status</p>
                  <span>{character.status ? character.status : 'Unknown'}</span>
                </div>
                <div className="group-info">
                  <p>Species</p>
                  <span>
                    {character.species ? character.species : 'Unknown'}
                  </span>
                </div>
                <div className="group-info">
                  <p>Type</p>
                  <span>{character.type ? character.type : 'Unknown'}</span>
                </div>
                <div className="group-info">
                  <p>Gender</p>
                  <span>{character.gender ? character.gender : 'Unknown'}</span>
                </div>
                <div className="group-info">
                  <p>Origin</p>
                  <span>
                    {character.origin.name ? character.origin.name : 'Unknown'}
                  </span>
                </div>
                <div className="group-info">
                  <p>Location</p>
                  <span>
                    {character.location.name
                      ? character.location.name
                      : 'Unknown'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default RicknMortyPage;
