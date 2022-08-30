import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pitch from './pages/InnerPage/Pitch';
import RegisterForm from './pages/InnerPage/RegisterForm';
import OrganizingC from './pages/InnerPage/OrganizingC';
import AdvisoryC from './pages/InnerPage/AdvisoryC';
import AboutNye from './pages/InnerPage/AboutNye';
import Speaker from './pages/InnerPage/Speaker';
import Welcome from './pages/InnerPage/Welcome';
import ThemeA from './pages/InnerPage/ThematicA';
import Schedule from './pages/InnerPage/Schedule';
import AboutOrg from './pages/InnerPage/AboutOrg';
import PastNyesummit from './pages/InnerPage/PastNyesummit';
import Faq from './pages/InnerPage/Faq';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/organizing-committee" element={<OrganizingC />} />
        <Route path="/advisory-committee" element={<AdvisoryC />} />
        <Route path="/about-NYE" element={<AboutNye />} />
        <Route path="/speakers" element={<Speaker />} />
        <Route path="/welcome-note" element={<Welcome />} />
        <Route path="/thematic-area" element={<ThemeA />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about-organizer" element={<AboutOrg />} />
        <Route path="/nyesummit-2019" element={<PastNyesummit />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
