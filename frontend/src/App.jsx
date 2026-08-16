import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CodingProfiles from './pages/CodingProfiles';
import Portfolio from './Portfolio';
import AuthenSight from './pages/AuthenSight';
import ChatAppy from './pages/ChatAppy';
import Socialite from './pages/Socialite';
import MarkupLens from './pages/MarkupLens';
function App() {
  const [active, setActive] = useState('Profile');

  const scrollTo = (id, label) => {
    setActive(label);

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Portfolio
              active={active}
              setActive={setActive}
              scrollTo={scrollTo}
            />
          }
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


      </Routes>
    </BrowserRouter>
  );
}

export default App;