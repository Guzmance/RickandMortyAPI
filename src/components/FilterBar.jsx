import React, { useContext } from 'react';
import { RicknMortyContext } from '../context/RicknMortyContext';

export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(RicknMortyContext);

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
      <div className="filter-by-type">
        <span>Species</span>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Human"
            id="Human"
          />
          <label htmlFor="Human">Human</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Alien"
            id="Alien"
          />
          <label htmlFor="Alien">Alien</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Robot"
            id="Robot"
          />
          <label htmlFor="Robot">Robot</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Cronenberg"
            id="Cronenberg"
          />
          <label htmlFor="Cronenberg">Cronenberg</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Disease"
            id="Disease"
          />
          <label htmlFor="Disease">Disease</label>
        </div>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Mythological"
            id="Mythological"
          />
          <label htmlFor="Mythological">Mythological Creature</label>
        </div>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Poopybutthole"
            id="Poopybutthole"
          />
          <label htmlFor="Poopybutthole">Poopybutthole</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="Humanoid"
            id="Humanoid"
          />
          <label htmlFor="Humanoid">Humanoid</label>
        </div>
      </div>
    </div>
  );
};
