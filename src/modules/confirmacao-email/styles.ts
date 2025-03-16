import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const emailconfirmation_box: SxProps = {
  py:"80px",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const emailconfirmation_container: SxProps = {
  width: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
};
export const emailconfirmation_title: SxProps = {
  fontSize: "2rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const emailconfirmation_description: SxProps = {
  color: PALETTE.GRAY_700,
  textAlign: "center",
  fontSize: "1.25rem",
};

export const button: SxProps = {
  mt: 4,
  textTransform: "none",
  textUnderline: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-between", lg: "center" },
  color: PALETTE.BLACK,
  fontSize: "1.2rem",
  lineHeight: "1",
  fontFamily: "Noto sans",
  borderRadius: "23px",
  padding: "13px 30px",
  minWidth: "unset",
  width: "fit-content",
};
