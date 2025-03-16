import { Box, Typography } from "@mui/material";

import { accordiontext_description, accordiontext_title } from "./styles";
import { AccordionTextProps } from "./types";

export const AccordionText = ({ title, description }: AccordionTextProps) => {
  return (
    <Box>
      <Typography sx={accordiontext_title}>{title}</Typography>
      <Typography sx={accordiontext_description}>{description}</Typography>
    </Box>
  );
};
