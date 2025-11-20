import React, { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  center?: [number, number];
  zoom?: number;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  center = [48.9478, 2.2484],
  zoom = 13,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.async = true;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';

    document.head.appendChild(link);

    script.onload = () => {
      const L = (window as any).L;

      if (!L || !mapRef.current) return;

      const map = L.map(mapRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker(center).addTo(map);
      marker.bindPopup('<b>Argenteuil</b><br>Nous intervenons ici').openPopup();

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    document.body.appendChild(script);

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-full rounded-2xl" />;
};
