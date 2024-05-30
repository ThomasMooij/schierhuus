"use client"

import { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null);
  const googleMap = useRef<google.maps.Map | null>(null);
  const marker = useRef<google.maps.Marker | null>(null);

  const createGoogleMap = (): google.maps.Map =>
    new window.google.maps.Map(googleMapRef.current as HTMLDivElement, {
      zoom: 15,
      center: {
        lat: 53.079557528972586,
        lng: 6.472034297173683,
      },
    });

  const createMarker = (): google.maps.Marker =>
    new window.google.maps.Marker({
      position: { lat: 53.079557528972586, lng: 6.472034297173683 },
      map: googleMap.current!,
    });

  useEffect(() => {
    console.log(process.env.GOOGLE_MAPS_API)
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  }, []);

  return <div ref={googleMapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;
