import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const Id =
  "876133612705-5lqe7ccsc3mpo1keg4c8nkhq9vt627nc.apps.googleusercontent.com";

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: Id,
        scope: ""
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Navigation />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/songs" element={<Songs />} />
        </Routes> */}
        <div className="flex-grow">
          <div className="md:hidden flex h-12 bg-white border-b border-solid shadow-lg sticky top-0">
            <div className="flex-1 flex items-center text-red-700 font-mono p-2">
              Menu
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/songs" element={<Songs />} />
          </Routes>
          {/* <div class="p-4 bg-green-100 h-64">deneme</div>
          <div class="p-4 bg-green-200 h-64">deneme</div>
          <div class="p-4 bg-green-100 h-64">deneme</div>
          <div class="p-4 bg-green-200 h-64">deneme</div> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
