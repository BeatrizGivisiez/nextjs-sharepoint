"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import { links, links_box_text, links_text } from "./styles";
import { LinksProps } from "./types";

export const Links = ({ idLink, name, icon: Icon, link }: LinksProps) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const routerInstance = useRouter();
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const handleMouseEnter = (boxIndex: number) => {
    setHoveredBox(boxIndex);
  };
  const handleMouseLeave = () => {
    setHoveredBox(null);
  };
  const handleClick = () => {
    routerInstance.push(link);
  };

  return (
    <Box
      sx={links}
      onMouseEnter={() => handleMouseEnter(idLink as number)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        color:
          hoveredBox === idLink ? PALETTE.SECONDARY_MAIN : PALETTE.PRIMARY_MAIN,
      }}
    >
      {Icon && <Icon size={48} weight="duotone" />}
      <Box sx={links_box_text}>
        <Typography
          sx={{
            ...links_text,
            fontWeight:
              hoveredBox === idLink ? FONTWEIGHT.MEDIUM : FONTWEIGHT.NORMAL,
          }}
        >
          {name}
        </Typography>
        {isXs ? null : <ArrowRight size={16} color={PALETTE.BLACK} />}
      </Box>
    </Box>
  );
};
