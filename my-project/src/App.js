import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const Id =
  '876133612705-5lqe7ccsc3mpo1keg4c8nkhq9vt627nc.apps.googleusercontent.com';

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: Id,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });
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
