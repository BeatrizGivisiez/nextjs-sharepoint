"use client";

import { formatDate } from "@/util/formatDate";
import { Box, Typography } from "@mui/material";

import {
  viewmaps_label,
  viewmaps_listLocation,
  viewmaps_locationAddress,
  viewmaps_locationDate,
  viewmaps_locationName,
  viewmaps_row,
} from "../styles";
import { InterruptionListProps } from "../types";

export const InterruptionItem = ({
  place,
  beginDate,
  endDate,
  street,
  interruptionTimes,
  interruptionReason,
  title,
}: InterruptionListProps) => {
  return (
    <Box sx={viewmaps_listLocation}>
      <Typography sx={viewmaps_locationName}>{title}</Typography>
      <Typography sx={viewmaps_locationDate}>
        {formatDate(beginDate)} a {formatDate(endDate)}
      </Typography>
      {/* <Typography sx={viewmaps_locationAddress}>{street}</Typography> */}
      
      {street && (
        <Box sx={viewmaps_row}>
          <Typography sx={viewmaps_label}>Rua:</Typography>
          <Typography sx={viewmaps_locationAddress}>{street}</Typography>
        </Box>
      )}

      {place && (
        <Box sx={viewmaps_row}>
          <Typography sx={viewmaps_label}>Localidade:</Typography>
          <Typography sx={viewmaps_locationAddress}>{place}</Typography>
        </Box>
      )}

      <Box sx={viewmaps_row}>
        <Typography sx={viewmaps_label}>Horário:</Typography>
        <Typography sx={viewmaps_locationAddress}>
          {interruptionTimes}
        </Typography>
      </Box>

      <Box sx={viewmaps_row}>
        <Typography sx={viewmaps_label}>Motivo:</Typography>
        <Typography sx={viewmaps_locationAddress}>
          {interruptionReason}
        </Typography>
      </Box>
    </Box>
  );
};
