// src/App.js
import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import './App.css'; // You can add styles here

const profileData = [
  {
    id: 1,
    name: 'Rahul Kamble',
    photo: 'profile-explorer\src\download (1).jpeg',
    description: 'Frontend Developer',
    location: { lat: 18.550985, lng:  73.934982 }, // Example coordinates
  },

  {
    id: 2,
    name: 'Rajesh Kamble',
    photo: 'profile-explorer\src\download.jpeg',
    description: 'Backend Developer',
    location: { lat: 18.566526, lng: 73.912239 },
  }

];

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <h1>Profile Explorer</h1>
      <div className="content">
        <ProfileList profiles={profileData} onSummaryClick={handleSummaryClick} />
        {selectedProfile && <Map profile={selectedProfile} />}
      </div>
    </div>
  );
}

export default App;
