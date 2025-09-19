
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import JobMainPage from '../pages/JobMainPage.jsx';
import Workingpage from '../pages/Workingpage.jsx';
import JobDetailPage from '../pages/JobDetailPage.jsx';
import CreateCVPage from '../pages/CreateCVPage.jsx';
import MyCVPage from '../pages/MyCVPage.jsx';
import SupportPage from '../pages/SupportPage.jsx';

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<JobMainPage />} />
      <Route path="/work" element={<Workingpage />} />
      {/* /:id */}
      <Route path="/job/:id" element={<JobDetailPage />} />
  <Route path="/create-cv" element={<CreateCVPage />} />
  <Route path="/my-cv" element={<MyCVPage />} />
  <Route path="/support" element={<SupportPage />} />
    </Routes>
    </BrowserRouter>
  );
}
