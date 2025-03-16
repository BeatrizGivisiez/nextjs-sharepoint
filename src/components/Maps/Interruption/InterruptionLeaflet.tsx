"use client";

import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { InterruptionContext } from "@/contexts/InterruptionContext";

const InterruptionPopup = dynamic(() => import("./InterruptionPopup"), {
  ssr: false,
});

export const InterruptionLeaflet = () => {
  const { powerInterruption } = useContext(InterruptionContext);
  return (
    <MapContainer
      center={[38.54172662906514, -27.528777846296048]}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {powerInterruption.map((item, index) => {
        return item?.coordinates?.map((coordinate, idx) => (
          <InterruptionPopup
            key={`${index}-${idx}`}
            place={item.place}
            beginDate={item.beginDate}
            endDate={item.endDate}
            street={item.street}
            interruptionTimes={item.interruptionTimes}
            interruptionReason={item.interruptionReason}
            coordinates={coordinate}
          />
        ));
      })}
    </MapContainer>
  );
};
export default InterruptionLeaflet;
