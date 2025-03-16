"use client";

import "leaflet/dist/leaflet.css";

import { Marker, Popup } from "react-leaflet";

import { createMarkerIconPresente } from "@/util/leaflet";
import { Box, Typography } from "@mui/material";

import { popupmaps_bold, popupmaps_box, popupmaps_fontsize } from "../styles";
import { ProductionPopupProps } from "../types";

export const ProductionPopup = ({
  title,
  comments,
  coordinates,
}: ProductionPopupProps) => {
  const markerIcon = createMarkerIconPresente();

  return (
    <Marker
      position={[+(coordinates?.latitude ?? 0), +(coordinates?.longitude ?? 0)]}
      icon={markerIcon}
    >
      <Popup>
        <Box sx={popupmaps_box}>
          <Typography sx={popupmaps_bold}>{title}</Typography>
          <Typography sx={popupmaps_fontsize}>{comments}</Typography>
        </Box>
      </Popup>
    </Marker>
  );
};

export default ProductionPopup;
