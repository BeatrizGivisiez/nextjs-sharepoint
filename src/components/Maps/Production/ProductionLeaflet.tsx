"use client";

import "leaflet/dist/leaflet.css";

import { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { ProductionContext } from "@/contexts/ProductionContext";

import { ProductionPopup } from "./ProductionPopup";

export const ProductionLeaflet = () => {
  const { production } = useContext(ProductionContext);

  return (
      <MapContainer
        center={[38.54172662906514, -27.528777846296048]}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {production.map((item, index) => {
          const coordinates = Array.isArray(item.coordinates)
            ? item.coordinates[0]
            : item.coordinates;

          return (
            <ProductionPopup
              key={index}
              title={item.title}
              comments={item.comments}
              coordinates={coordinates}
            />
          );
        })}
      </MapContainer>
  );
};

export default ProductionLeaflet;
