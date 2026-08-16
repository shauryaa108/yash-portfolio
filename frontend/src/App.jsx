import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import AuthenSight from './pages/AuthenSight';
import ChatAppy from './pages/ChatAppy';
import Socialite from './pages/Socialite';
import MarkupLens from './pages/MarkupLens';
import CodingProfiles from './pages/CodingProfiles';
import DevProfile from './pages/DevProfile';


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Portfolio />}
        />

        <Route
          path="/authensight"
          element={<AuthenSight />}
        />

        <Route
          path="/chatappy"
          element={<ChatAppy />}
        />

        <Route
          path="/socialite"
          element={<Socialite />}
        />

        <Route
          path="/markuplens"
          element={<MarkupLens />}
        />

        <Route
          path="/coding-profiles"
          element={<CodingProfiles />}
        />
        <a
          href="https://drive.google.com/file/d/1zE-OycEKWjCI97JGwVjKmHfWN8i3f9Ot/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME <span>↗</span>
        </a>

        <Route
          path="/dev.yash.md"
          element={<DevProfile />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;