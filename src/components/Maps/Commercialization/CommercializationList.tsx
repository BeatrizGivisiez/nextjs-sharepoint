"use client";

import { Box, Typography } from "@mui/material";

import {
  viewmaps_listLocation,
  viewmaps_locationAddress,
  viewmaps_locationName,
} from "../styles";
import { CommercializationListProps } from "../types";

export const CommercializationList = ({
  title,
  comments,
}: CommercializationListProps) => {
  return (
    <Box sx={viewmaps_listLocation}>
      <Typography sx={viewmaps_locationName}>{title}</Typography>
      <Typography
        sx={viewmaps_locationAddress}
        dangerouslySetInnerHTML={{ __html: comments as string }}
      />
    </Box>
  );
};
