import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
