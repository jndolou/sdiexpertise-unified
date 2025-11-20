import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  address: string;
  className?: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ address, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const L = (await import('leaflet')).default;

      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      mapInstanceRef.current = L.map(mapRef.current).setView([48.8566, 2.3522], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      markerRef.current = L.marker([48.8566, 2.3522], { icon }).addTo(mapInstanceRef.current);
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const searchAddress = async () => {
      if (!address || !mapInstanceRef.current) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
          {
            headers: {
              'User-Agent': 'SDIExpertise-App'
            }
          }
        );

        const data = await response.json();

        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const latNum = parseFloat(lat);
          const lonNum = parseFloat(lon);

          const L = (await import('leaflet')).default;

          mapInstanceRef.current.setView([latNum, lonNum], 15);

          if (markerRef.current) {
            markerRef.current.setLatLng([latNum, lonNum]);
            markerRef.current.bindPopup(display_name).openPopup();
          } else {
            const icon = L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
              iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
              shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            });
            markerRef.current = L.marker([latNum, lonNum], { icon })
              .addTo(mapInstanceRef.current)
              .bindPopup(display_name)
              .openPopup();
          }
        } else {
          setError('Adresse non trouvée');
        }
      } catch (err) {
        setError('Erreur lors de la recherche');
        console.error('Error searching address:', err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(searchAddress, 500);
    return () => clearTimeout(timeoutId);
  }, [address]);

  return (
    <div className={`relative ${className}`}>
      <div ref={mapRef} className="w-full h-full rounded-xl overflow-hidden z-0" />
      {loading && (
        <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-lg shadow-md z-[1000]">
          <p className="text-sm text-gray-600">Recherche...</p>
        </div>
      )}
      {error && (
        <div className="absolute top-2 right-2 bg-red-50 px-3 py-1 rounded-lg shadow-md z-[1000]">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};
