import { Box, CircularProgress } from "@mui/material";

import { loading } from "./styles";

export const Loading = () => {
  return (
    <Box sx={loading}>
      <CircularProgress color="secondary" />
    </Box>
  );
};
