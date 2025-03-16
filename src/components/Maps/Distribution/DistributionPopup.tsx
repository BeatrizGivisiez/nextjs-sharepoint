"use client";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

import { createMarkerIconPresente } from "@/util/leaflet";
import { Box, Typography } from "@mui/material";

import { popupmaps_bold, popupmaps_box, popupmaps_fontsize } from "../styles";
import { DistributionListProps } from "../types";

const Marker = dynamic(
  () => import("react-leaflet/Marker").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet/Popup").then((m) => m.Popup),
  { ssr: false }
);
export const DistributionPopup = ({
  title,
  comments,
  coordinates,
}: DistributionListProps) => {
  const markerIcon = createMarkerIconPresente();

  return (
    <Marker
      position={[+(coordinates?.latitude ?? 0), +(coordinates?.longitude ?? 0)]}
      icon={markerIcon}
    >
      <Popup>
        <Box sx={popupmaps_box}>
          <Typography sx={popupmaps_bold}>{title}</Typography>
          <Typography
            sx={popupmaps_fontsize}
            dangerouslySetInnerHTML={{ __html: comments as string }}
          />
        </Box>
      </Popup>
    </Marker>
  );
};
export default DistributionPopup;
