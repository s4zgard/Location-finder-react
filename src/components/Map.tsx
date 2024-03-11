import "leaflet/dist/leaflet.css";
import { Map as LeafletMap } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useEffect, useRef } from "react";
import type { Place } from "../api/Place";

interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[34.1241, 72.4613]}
      scrollWheelZoom
      className="h-screen"
      zoom={12}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
}
