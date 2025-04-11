import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface VillageMapProps {
  className?: string;
}

const VillageMap = ({ className }: VillageMapProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Coordinates for Pithoragarh, Uttarakhand (approximate for Gogana)
  const coordinates = {
    lat: 29.58, 
    lng: 80.22
  };

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCss = document.createElement('link');
    leafletCss.rel = 'stylesheet';
    leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    leafletCss.crossOrigin = '';
    document.head.appendChild(leafletCss);

    // Load Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    leafletScript.crossOrigin = '';
    document.body.appendChild(leafletScript);

    leafletScript.onload = () => {
      setMapLoaded(true);
    };

    return () => {
      document.head.removeChild(leafletCss);
      document.body.removeChild(leafletScript);
    };
  }, []);

  useEffect(() => {
    if (mapLoaded && window.L) {
      const L = window.L;
      
      // Initialize map
      const map = L.map('village-map').setView([coordinates.lat, coordinates.lng], 13);

      // Add OpenStreetMap tiles
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add marker for Gogana Village
      L.marker([coordinates.lat, coordinates.lng])
        .addTo(map)
        .bindPopup('<b>Gogana Village</b><br>Pithoragarh, Uttarakhand')
        .openPopup();

      // Clean up map on component unmount
      return () => {
        map.remove();
      };
    }
  }, [mapLoaded, coordinates]);

  return (
    <div className={cn("bg-white rounded-lg shadow-lg overflow-hidden h-full", className)}>
      <div id="village-map" className="h-full min-h-[400px]"></div>
    </div>
  );
};

export default VillageMap;
