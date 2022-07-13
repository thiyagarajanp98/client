import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
