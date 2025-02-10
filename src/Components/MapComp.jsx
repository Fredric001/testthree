import React from 'react'
import  { useState,  useEffect } from "react";

function MapComp({ origin, destination, showDirections }) {
  
  useEffect(() => {
    const initMap = () => {
      const center = { lat: -1.286389, lng: 36.817223 }; // Default center (Nairobi)

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      // Render directions only when showDirections is true
      if (showDirections && origin && destination) {
        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK") {
              directionsRenderer.setDirections(result);
            } else {
              console.error("Directions request failed due to " + status);
            }
          }
        );
      }
    };

    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ4gciLHhaGGkFyHqnQB9ZotGwMbFgivo&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Attach initMap to the global window object
      window.initMap = initMap;
    };

    loadGoogleMapsScript();
  }, [showDirections, origin, destination]);
  return (
    <div>
      <h1>Truck your collection</h1>
      <div id="map" style={{ height: "820px", width: "800px"}}></div>
    </div>
  )
}

export default MapComp
