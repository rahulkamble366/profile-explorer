import React from 'react';

function Profile({name, photo, description, onSummaryclick}) {
    return (
        <div className="profile-card">
            <img src={photo} alt={name} />
            <h2>{name}</h2>
            <p>description</p>
            <button onClick={onSummaryclick}>Summary</button>
        </div>
    );
}

export default Profile;