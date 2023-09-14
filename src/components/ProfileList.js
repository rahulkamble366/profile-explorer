// src/components/ProfileList.js
import React, { useState } from 'react';
import Profile from './Profile';

function ProfileList({ profiles, onSummaryClick }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="profile-list">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredProfiles.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            description={profile.description}
            onSummaryClick={() => onSummaryClick(profile)}
          />
        ))}
      </div>
    );
  }
  
  export default ProfileList;
