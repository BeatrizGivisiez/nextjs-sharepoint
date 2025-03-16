import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const paperanexodownload: SxProps = {
  my: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const paperanexodownload_box: SxProps = {
  maxWidth: "1100px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const paperanexodownload_container: SxProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "3%",
};
export const paperanexodownload_typography: SxProps = {
  color: PALETTE.GRAY_700,
  fontSize: "0.875rem",
  padding: "0px 20px",
  display: "flex",
  flexWrap: "wrap",
};
