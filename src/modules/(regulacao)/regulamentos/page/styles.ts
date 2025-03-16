import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const paperlinks_box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  py: 10,
};
export const paperlinks: SxProps = {
  maxWidth: "1000px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: { xs: "center", lg: "flex-start" },
  gap: { xs: 2, lg: 3 },
  pt: 2,
};
