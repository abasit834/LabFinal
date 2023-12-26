import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RocketPage from './RocketPage';
import MissionsPage from './MissionsPage';
import MyProfile from './MyProfile';

function NavBar() {
  return (
    <div>
      <Router>
        <Link to="/">Rocket Page</Link>
        <Link to="/MissionsPage">Missions Page</Link>
        <Link to="/MyProfile">My Profile</Link>

        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/MissionsPage" element={<MissionsPage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default NavBar;
