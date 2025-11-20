import React, { useEffect, useRef, useState } from 'react';

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
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: center[0], lng: center[1] },
      zoom: zoom,
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: false,
    });

    mapInstanceRef.current = map;

    const marker = new google.maps.Marker({
      position: { lat: center[0], lng: center[1] },
      map: map,
      title: 'Argenteuil',
    });

    const infoWindow = new google.maps.InfoWindow({
      content: '<b>Argenteuil</b><br>Nous intervenons ici',
    });

    infoWindow.open(map, marker);
    markerRef.current = marker;
  }, [isLoaded, center, zoom]);

  useEffect(() => {
    if (!searchQuery || !isLoaded || !mapInstanceRef.current) return;

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
        const lat = location.lat();
        const lng = location.lng();

        mapInstanceRef.current?.setCenter({ lat, lng });
        mapInstanceRef.current?.setZoom(13);

        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: mapInstanceRef.current,
          title: results[0].formatted_address,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<b>${results[0].formatted_address}</b>`,
        });

        infoWindow.open(mapInstanceRef.current, marker);
        markerRef.current = marker;

        if (onLocationChange) {
          onLocationChange({
            lat,
            lon: lng,
            name: results[0].formatted_address,
          });
        }
      }
    });
  }, [searchQuery, isLoaded, onLocationChange]);

  return <div ref={mapRef} className="w-full h-full rounded-2xl" />;
};
