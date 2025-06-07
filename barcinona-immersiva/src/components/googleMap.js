import React, { useEffect, useRef } from 'react';

export default function GoogleMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Función para cargar el script de Google Maps
    const loadScript = (url) => {
      return new Promise((resolve) => {
        const existingScript = document.querySelector(`script[src="${url}"]`);
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = url;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          script.onload = () => resolve();
        } else {
          resolve();
        }
      });
    };

    const initMap = () => {
      if (window.google) {
        const myLatLng = { lat: 41.38392293491057, lng: 2.1775909873557233 };
        const map = new window.google.maps.Map(mapRef.current, {
          center: myLatLng,
          zoom: 14,
          minZoom: 2,
          maxZoom: 18,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          mapId: '1575ba43ccf543cf',
        });

        new window.google.maps.Marker({
          position: myLatLng,
          map: map,
        });
      }
    };

    const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjd6_cWoVzsLayPAa9rZpOjd6jB9l2H1w&libraries=places`;
    loadScript(url).then(() => {
      initMap();
    });

  }, []);

  return (
    <div>
      <div
        ref={mapRef}
        id="map"
        style={{ width: '100%', height: '100vh' }}
      ></div>
    </div>
  );
}
