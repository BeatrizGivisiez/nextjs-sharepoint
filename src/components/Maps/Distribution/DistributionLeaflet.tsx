"use client";

import "leaflet/dist/leaflet.css";

import { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { DistributionContext } from "@/contexts/DistributionContext";

import { DistributionPopup } from "./DistributionPopup";

export const DistributionLeaflet = () => {
  const { distribution } = useContext(DistributionContext);

  return (
    <MapContainer
      center={[38.54172662906514, -27.528777846296048]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {distribution.map((item, index) => (
        <DistributionPopup
          key={`${index}-${index}`}
          title={item.title}
          comments={item.comments}
          coordinates={item.coordinates}
        />
      ))}
    </MapContainer>
  );
};

export default DistributionLeaflet;
