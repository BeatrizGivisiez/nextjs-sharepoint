import { Box } from "@mui/material";

import { powerbi } from "./styles";
import { PowerBIProps } from "./types";

export const PowerBI = ({ src }: PowerBIProps) => {
  return (
    <Box sx={powerbi}>
      <iframe
        title="Sample Report Demo"
        width="1140"
        height="541.25"
        src={src}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </Box>
  );
};
