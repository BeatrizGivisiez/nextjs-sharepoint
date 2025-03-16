"use client";

import { Box, Typography } from "@mui/material";

import {
  viewmaps_listLocation,
  viewmaps_locationAddress,
  viewmaps_locationName,
} from "../styles";
import { ProductionListProps } from "../types";

export const ProductionList = ({ title, comments }: ProductionListProps) => {
  return (
    <Box sx={viewmaps_listLocation}>
      <Typography sx={viewmaps_locationName}>{title}</Typography>
      <Typography sx={viewmaps_locationAddress}>{comments}</Typography>
    </Box>
  );
};
