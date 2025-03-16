import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  py: 10,
};
export const box_link: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mb: 10,
};
export const container_link: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "900px",
  gap: 2,
};
export const button: SxProps = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "flex-start",
  padding: 0,
  backgroundColor: "transparent",
  color: PALETTE.BLACK,
  boxShadow: "none",
  textTransform: "none",
  textDecoration: "underline",
  fontFamily: "Noto Sans",
  fontSize: "1rem",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};
