import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Albums from './components/Albums';
import Artists from './components/Artists';
import Songs from './components/Songs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="artists" element={<Artists />} />
          <Route path="songs" element={<Songs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
