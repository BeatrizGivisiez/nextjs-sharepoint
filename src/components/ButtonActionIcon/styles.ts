import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const buttonactionicon_box_button: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const buttonactionicon_button: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  borderRadius: "25px",
  height: "48px",
  px: 4,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
};
export const buttonactionicon_label: SxProps = {
  fontFamily: "Noto Sans, sans-serif",
  fontSize: "1rem",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
};
