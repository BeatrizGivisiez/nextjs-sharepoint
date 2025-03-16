"use client";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { useContext } from "react";

import { CommercializationContext } from "@/contexts/CommercializationContext";

const MapContainer = dynamic(
  () => import("react-leaflet/MapContainer").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet/TileLayer").then((m) => m.TileLayer),
  { ssr: false }
);
const CommercializationPopup = dynamic(
  () => import("./CommercializationPopup"),
  { ssr: false }
);

export const CommercializationLeaflet = () => {
  const { mapCenter, zoomLevel, commercialization } = useContext(
    CommercializationContext
  );

  const defaultCenter: [number, number] = [
    38.54172662906514, -27.528777846296048,
  ];
  const mapKey = `${mapCenter?.[0]}-${mapCenter?.[1]}-${zoomLevel}`;

  return (
    <MapContainer
      center={mapCenter ?? defaultCenter}
      zoom={zoomLevel ?? 7}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      key={mapKey}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {commercialization.map((item, index) => (
        <CommercializationPopup
          key={`${index}-${index}`}
          title={item.title}
          comments={item.comments}
          coordinates={item.coordinates}
        />
      ))}
    </MapContainer>
  );
};

export default CommercializationLeaflet;
