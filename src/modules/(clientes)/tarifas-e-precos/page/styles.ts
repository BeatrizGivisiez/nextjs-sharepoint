import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const stacker: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
};

export const seeMoreButton_TarifasEPrecos: SxProps = {
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
  mt: "20px",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};

