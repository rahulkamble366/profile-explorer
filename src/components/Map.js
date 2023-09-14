// src/components/Map.js
import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

function Map({ profile }) {
    const MapComponent = withScriptjs(
        withGoogleMap(() => (
      <GoogleMap 
      defaultZoom={10} 
      defaultCenter={profile.location}
      // google maps API key
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY5SZ8qQ2q5Wr8CjdKVHDFMq6whoN-eUo&v=3.exp&libraries=geometry,drawing,places"
                                                                
      >
        <Marker position={profile.location} />
      </GoogleMap>
    )))
  
  return (

    <div className="map">
    <MapComponent
      containerElement={<div style={{ height: '400px', width: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>


    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
