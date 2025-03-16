import Image from "next/image";

import { Box, Typography } from "@mui/material";

import { bannertitle, bannertitle_title } from "./styles";
import { BannerTitleProps } from "./types";

export const BannerTitle = ({ src, title }: BannerTitleProps) => {
  return (
    <Box sx={bannertitle}>
      <Image
        src={src}
        alt="Image Banner"
        style={{
          width: "100%",
          maxHeight: "190px",
          objectFit: "cover",
          position: "relative",
          zIndex: 1,
          marginTop: 1,
          paddingBottom: 3,
        }}
      />
      <Box>
        <Typography sx={bannertitle_title}>{title}</Typography>
      </Box>
    </Box>
  );
};
