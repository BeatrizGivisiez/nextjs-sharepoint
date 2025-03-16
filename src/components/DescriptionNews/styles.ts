import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const descriptionnews: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const descriptionnews_box: SxProps = {
  width: { xs: "350px", sm: "550px", md: "850px", lg: "950px" },
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginTop: "30px",
};
export const descriptionnews_data: SxProps = {
  fontSize: "18px",
  color: PALETTE.GRAY_700,
};
export const descriptionnews_title: SxProps = {
  fontSize: "32px",
  fontFamily: "Montserrat, sans-serif",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.BOLD,
};
export const descriptionnews_description: SxProps = {
  fontSize: "16px",
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.NORMAL,
};
