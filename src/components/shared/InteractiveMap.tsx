import React from 'react';

interface InteractiveMapProps {
  center?: [number, number];
  zoom?: number;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  center = [48.9478, 2.2484],
  zoom = 13,
}) => {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${center[1] - 0.05},${center[0] - 0.05},${center[1] + 0.05},${center[0] + 0.05}&layer=mapnik&marker=${center[0]},${center[1]}`;

  return (
    <iframe
      src={mapUrl}
      className="w-full h-full rounded-2xl border-0"
      title="Carte interactive d'Argenteuil"
    />
  );
};
