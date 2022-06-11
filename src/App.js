import { Route, Routes } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
}

export default App;
