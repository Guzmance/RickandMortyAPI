import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import RicknMortyPage from './pages/RicknMortyPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="rickandmorty/:id" element={<RicknMortyPage />} />
        {/**Localhosst:3000/rickandmorty/{id} */}
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export { AppRouter };
