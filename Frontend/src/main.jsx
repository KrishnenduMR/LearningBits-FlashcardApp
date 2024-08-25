import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader.jsx';

const App = lazy(() => import('./App.jsx'));
const Explore = lazy(() => import('./routes/Explore.jsx'));
const Tools = lazy(() => import('./routes/Tools.jsx'));
const StudyTips = lazy(() => import('./routes/StudyTips.jsx'));
const Terms = lazy(() => import('./routes/Terms.jsx'));
const Privacy = lazy(() => import('./routes/Privacy.jsx'));
const Team = lazy(() => import('./routes/Team.jsx'));
const Contact = lazy(() => import('./routes/Contact.jsx'));
const Careers = lazy(() => import('./routes/Careers.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/studytips" element={<StudyTips />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
    </Router>
  </StrictMode>
);
