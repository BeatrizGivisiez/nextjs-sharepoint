import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { Box, Typography } from "@mui/material";
import { Buildings, Plug, UsersThree } from "@phosphor-icons/react";

import { lineinfo, lineinfo_box } from "./styles";
import { LineInfoProps } from "./types";

const color = PALETTE.GRAY_600;

export const LineInfo = ({ info, text }: LineInfoProps) => {
  return (
    <Box sx={lineinfo}>
      <Box sx={lineinfo_box}>
        <UsersThree size={32} color={color} />
        <Typography fontWeight={FONTWEIGHT.SEMI_BOLD} color={color}>
          {info}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
      <Box>
        <Buildings size={32} color={color} />
        <Typography fontWeight={FONTWEIGHT.SEMI_BOLD} color={color}>
          {info}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
      <Box>
        <Plug size={32} color={color} />
        <Typography fontWeight={FONTWEIGHT.SEMI_BOLD} color={color}>
          {info}
        </Typography>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};
