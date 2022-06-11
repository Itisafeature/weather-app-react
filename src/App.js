import { Route, Routes } from 'react-router-dom';
import Header from './UI/Header';
import Search from './Search';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
