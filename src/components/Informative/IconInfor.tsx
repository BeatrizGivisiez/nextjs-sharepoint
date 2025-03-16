import { PALETTE } from "@/app/theme/styles/constantes";
import { Paper, Typography } from "@mui/material";

import { iconInfor_paper, iconInfor_title } from "./styles";
import { IconInforProps } from "./types";

export const IconInfor = ({ icon: Icon, title }: IconInforProps) => {
  return (
    <Paper elevation={0} sx={iconInfor_paper}>
      {Icon && (
        <Icon size={48} color={PALETTE.SECONDARY_MAIN} weight="duotone" />
      )}
      <Typography sx={iconInfor_title}>{title}</Typography>
    </Paper>
  );
};
