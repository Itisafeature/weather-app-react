import { Route, Routes } from 'react-router-dom';
import Header from './UI/Header';
import Search from './components/Search';
import CitiesList from './components/CitiesList';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/found-cities" element={<CitiesList />} />
      </Routes>
    </div>
  );
}

export default App;
