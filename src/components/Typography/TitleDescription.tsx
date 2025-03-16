import { Box, Container, Typography } from "@mui/material";

import {
  titledescription,
  titledescription_container,
  titledescription_subtitle,
  titledescription_title,
} from "./styles";
import { TitleDescriptionProps } from "./types";

export const TitleDescription = ({
  title,
  description,
}: TitleDescriptionProps) => {
  return (
    <Box sx={titledescription}>
      <Container sx={titledescription_container}>
        <Typography sx={titledescription_title}>{title}</Typography>
        {description && (
          <Typography sx={titledescription_subtitle}>{description}</Typography>
        )}
      </Container>
    </Box>
  );
};
