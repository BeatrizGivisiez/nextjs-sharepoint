import { Box, Button, Typography } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react";

import {
  containerhelp,
  containerhelp_button,
  containerhelp_title,
} from "./styles";
import { ContainerHelpProps } from "./types";

export const ContainerHelp = ({
  title,
  description,
  button,
}: ContainerHelpProps) => {
  return (
    <Box sx={containerhelp}>
      <Typography sx={containerhelp_title}>{title}</Typography>
      <Typography>{description}</Typography>
      <Button
        variant="contained"
        sx={containerhelp_button}
        endIcon={<CaretRight size={18} color="white" weight="bold" />}
      >
        {button}
      </Button>
    </Box>
  );
};
