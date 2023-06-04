import { useEffect, useState } from 'react';
import { RicknMortyContext } from './RicknMortyContext';
import { useForm } from '../hook/useForm';

export const RicknMortyProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [globalCharacters, setGlobalCharacters] = useState([]);
  const [offset, setOffset] = useState(1);

  // CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });
  // Estados para la Applicación
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // Get Characters per Page
  const getAllCharacters = async () => {
    const baseURL = 'https://rickandmortyapi.com/api/';
    const res = await fetch(`${baseURL}character/?page=${offset} `);
    const data = await res.json();
    const promises = data.results.map(async (ricknmorty) => {
      const res = await fetch(ricknmorty.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setAllCharacters([...allCharacters, ...results]);
    setLoading(false);
  };

  // Get All Global Characters
  const getGlobalCharacters = async () => {
    const baseURL = 'https://rickandmortyapi.com/api/';
    let currentPage = 1;
    let totalPages = 1;
    let allCharacters = [];

    while (currentPage <= totalPages) {
      const res = await fetch(`${baseURL}character?page=${currentPage}`);
      const data = await res.json();
      totalPages = data.info.pages;
      const characters = data.results;
      allCharacters = [...allCharacters, ...characters];
      currentPage++;
    }

    setGlobalCharacters(allCharacters);
    setLoading(false);
  };

  // Get Character by ID
  const getCharacterById = async (id) => {
    const baseURL = 'https://rickandmortyapi.com/api/';
    const res = await fetch(`${baseURL}character/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllCharacters();
  }, [offset]);

  useEffect(() => {
    getGlobalCharacters();
  }, []);

  // BTN CARGAR MÁS
  const onClickLoadMore = () => {
    setOffset(offset + 1);
  };
  // Filter Function + State
  const [typeSelected, setTypeSelected] = useState({
    Human: false,
    Alien: false,
    Mythyrian: false,
    Robot: false,
    Cronenberg: false,
    Disease: false,
    Dog: false,
    Cat: false,
    Mythological: false,
    Unknown: false,
    Poopybutthole: false,
    Humanoid: false,
    Vampire: false,
    Gazorpian: false,
    Gearhead: false,
    Gromflomite: false,
    Florauna: false,
    Krootabulan: false,
    Zigerion: false,
    Dinosaur: false,
  });

  const [filteredCharacters, setfilteredCharacters] = useState([]);

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = globalCharacters.filter((character) =>
        character.species.includes(e.target.name)
      );
      setfilteredCharacters([...filteredCharacters, ...filteredResults]);
    } else {
      const filteredResults = filteredCharacters.filter(
        (character) => !character.species.includes(e.target.name)
      );
      setfilteredCharacters([...filteredResults]);
    }
  };

  return (
    <RicknMortyContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allCharacters,
        globalCharacters,
        getCharacterById,
        onClickLoadMore,
        // Loader
        loading,
        setLoading,
        // Btn Filter
        active,
        setActive,
        // Filter Container Checkbox
        handleCheckbox,
        filteredCharacters,
      }}
    >
      {children}
    </RicknMortyContext.Provider>
  );
};
