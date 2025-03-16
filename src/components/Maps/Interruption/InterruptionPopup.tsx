"use client";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

import { formatDate } from "@/util/formatDate";
import {
  createMarkerIconFutura,
  createMarkerIconPresente,
} from "@/util/leaflet";
import { Box, Typography } from "@mui/material";

import {
  popupmaps_bold,
  popupmaps_box,
  popupmaps_column,
  popupmaps_flex,
  popupmaps_fontsize,
  popupmaps_type,
} from "../styles";
import { InterruptionPopupProps } from "../types";

const Marker = dynamic(
  () => import("react-leaflet/Marker").then((m) => m.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet/Popup").then((m) => m.Popup),
  { ssr: false }
);
export const InterruptionPopup = ({
  place,
  beginDate,
  endDate,
  street,
  interruptionTimes,
  interruptionReason,
  coordinates,
}: InterruptionPopupProps) => {
  const today = new Date();
  const startDate = new Date(beginDate);
  const finishDate = new Date(endDate);

  let markerIcon;
  if (today >= startDate && today <= finishDate) {
    markerIcon = createMarkerIconPresente();
  } else if (today < startDate) {
    markerIcon = createMarkerIconFutura();
  } else {
    markerIcon = createMarkerIconPresente();
  }

  return (
    <Marker
      position={[+(coordinates?.latitude ?? 0), +(coordinates?.longitude ?? 0)]}
      icon={markerIcon}
    >
      <Popup>
        <Box sx={popupmaps_box}>
          <Typography sx={popupmaps_bold}>{place}</Typography>
          <Typography sx={popupmaps_type}>
            {formatDate(beginDate)} a {formatDate(endDate)}
          </Typography>
          <Typography sx={popupmaps_fontsize}>{street}</Typography>
          <Box sx={popupmaps_column}>
            <Box sx={popupmaps_flex}>
              <Typography sx={popupmaps_bold}>Horário:</Typography>
              <Typography sx={popupmaps_type}>{interruptionTimes}</Typography>
            </Box>
            <Box sx={popupmaps_flex}>
              <Typography sx={popupmaps_bold}>Motivo:</Typography>
              <Typography sx={popupmaps_type}> {interruptionReason}</Typography>
            </Box>
          </Box>
        </Box>
      </Popup>
    </Marker>
  );
};
export default InterruptionPopup;
