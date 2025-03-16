import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const galleryImageButton: SxProps = {
  display: "block",
  width: "100%",
  my: "50px",
};
export const galleryImageButton_wrapper: SxProps = {
  display: "flex",
  width: "100%",
  height: "fit-content",
  flexFlow: "row",
  flexWrap: "wrap",
  justifyContent: { xs: "center", lg: "flex-start" },
  alignItems: "stretch",
  gap: "40px 40px",
};
