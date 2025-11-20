import React, { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  center?: [number, number];
  zoom?: number;
  searchQuery?: string;
  onLocationChange?: (location: { lat: number; lon: number; name: string }) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  center = [48.9478, 2.2484],
  zoom = 13,
  searchQuery = '',
  onLocationChange,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';

    if (!document.querySelector('link[href*="leaflet.css"]')) {
      document.head.appendChild(link);
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.async = true;

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current).setView(center, zoom);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker(center).addTo(map);
      marker.bindPopup('<b>Argenteuil</b><br>Nous intervenons ici').openPopup();
      markerRef.current = marker;

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    if ((window as any).L) {
      initMap();
    } else {
      script.onload = initMap;
      document.body.appendChild(script);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom]);

  useEffect(() => {
    if (!searchQuery || !mapInstanceRef.current) return;

    const searchLocation = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const latNum = parseFloat(lat);
          const lonNum = parseFloat(lon);

          const L = (window as any).L;
          mapInstanceRef.current.setView([latNum, lonNum], 13);

          if (markerRef.current) {
            markerRef.current.remove();
          }

          const marker = L.marker([latNum, lonNum]).addTo(mapInstanceRef.current);
          marker.bindPopup(`<b>${display_name}</b>`).openPopup();
          markerRef.current = marker;

          if (onLocationChange) {
            onLocationChange({ lat: latNum, lon: lonNum, name: display_name });
          }
        }
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
      }
    };

    searchLocation();
  }, [searchQuery, onLocationChange]);

  return <div ref={mapRef} className="w-full h-full rounded-2xl" />;
};
