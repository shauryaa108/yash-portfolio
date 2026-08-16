import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import AuthenSight from './pages/AuthenSight';
import ChatAppy from './pages/ChatAppy';
import Socialite from './pages/Socialite';
import MarkupLens from './pages/MarkupLens';
import CodingProfiles from './pages/CodingProfiles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/authensight" element={<AuthenSight />} />
        <Route path="/chatappy" element={<ChatAppy />} />
        <Route path="/socialite" element={<Socialite />} />
        <Route path="/markuplens" element={<MarkupLens />} />

        <Route
          path="/coding-profiles"
          element={<CodingProfiles />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;