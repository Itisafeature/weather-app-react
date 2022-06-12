import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './UI/Header';
import Search from './components/Search';
import CitiesList from './components/CitiesList';
import ShowCity from './components/ShowCity';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/found-cities" element={<CitiesList />} />
        <Route path="city-weather" element={<ShowCity />} />
      </Routes>
    </div>
  );
}

export default App;
