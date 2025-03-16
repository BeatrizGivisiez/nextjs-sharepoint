"use client";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Typography } from "@mui/material";
import { Cake, Lamp, UsersFour } from "@phosphor-icons/react";

import {
  iconinformative,
  iconinformativeBox,
  iconinformativeContainer,
  iconinformativeDescription,
  iconinformativeTitle,
} from "./styles";
import { IconInformativeProps } from "./types";

export const IconInformative = ({
  employees,
  years,
  clientEnergy,
}: IconInformativeProps) => {
  return (
    <Box sx={iconinformative}>
      <Box sx={iconinformativeContainer}>
        <Box sx={iconinformativeBox}>
          <UsersFour
            size={58}
            color={PALETTE.SECONDARY_MAIN}
            weight="duotone"
          />
          <Typography sx={iconinformativeTitle}>{employees}</Typography>
          <Typography sx={iconinformativeDescription}>Trabalhadores</Typography>
        </Box>
        <Box sx={iconinformativeBox}>
          <Cake size={58} color={PALETTE.SECONDARY_MAIN} weight="duotone" />
          <Typography sx={iconinformativeTitle}>{years}</Typography>
          <Typography sx={iconinformativeDescription}>
            Anos de atividade
          </Typography>
        </Box>
        <Box sx={iconinformativeBox}>
          <Lamp size={58} color={PALETTE.SECONDARY_MAIN} weight="duotone" />
          <Typography sx={iconinformativeTitle}>{clientEnergy}</Typography>
          <Typography sx={iconinformativeDescription}>Clientes</Typography>
        </Box>
      </Box>
    </Box>
  );
};
