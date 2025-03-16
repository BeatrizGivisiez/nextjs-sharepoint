"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { IconButton, Link, Paper, Typography } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import { paperlinks, paperlinks_title } from "./styles";
import { PaperLinksProps } from "./types";

export const PaperLinks = ({
  title,
  url,
  whiteColor,
  isExternal,
  onClick,
}: PaperLinksProps) => {
  const paperBackgroundColor = whiteColor ? PALETTE.WHITE : PALETTE.GRAY_300;

  return (
    <Paper
      elevation={0}
      sx={{
        ...paperlinks,
        backgroundColor: paperBackgroundColor,
      }}
    >
      <Typography sx={paperlinks_title}>{title}</Typography>

      {onClick ? (
        <IconButton onClick={onClick}>
          <ArrowRight size={20} color={PALETTE.BLACK} />
        </IconButton>
      ) : (
        <Link href={url} target={isExternal ? "_blank" : "_self"}>
          <IconButton>
            <ArrowRight size={20} color={PALETTE.BLACK} />
          </IconButton>
        </Link>
      )}
    </Paper>
  );
};
