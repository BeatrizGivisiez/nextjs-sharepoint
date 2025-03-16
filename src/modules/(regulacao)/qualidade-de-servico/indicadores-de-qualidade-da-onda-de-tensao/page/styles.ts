import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const paperanexodownload: SxProps = {
  mt: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const paperanexodownload_box: SxProps = {
  maxWidth: "1100px",
  width: "100%",
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
export const seeMoreButton_QualidadeDeServico: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  borderRadius: "25px",
  height: "48px",
  width: "fit-content",
  px: 4,
  mb: 4,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};
