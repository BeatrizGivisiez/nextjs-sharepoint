import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const containerhelp: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: PALETTE.GRAY_200,
  gap: 4,
  padding: 2,
};
export const containerhelp_title: SxProps = {
  fontSize: 24,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const containerhelp_button: SxProps = {
  textTransform: "none",
};
export const containeraboutaction: SxProps = {
  padding: "50px 16px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};
export const containeraboutaction_title: SxProps = {
  textAlign: "center",
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1.25rem", sm: "1.56rem", lg: "1.875rem" },
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.BLACK,
};
export const containeraboutaction_description: SxProps = {
  width: { xs: "350px", sm: "600px", md: "800px" },
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  textAlign: "center",
  mb: "8px",
};
export const containeraboutaction_font: SxProps = {
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  textAlign: "center",
};

export const containeraboutaction_email = {
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.MEDIUM,
  color:"blue",
  textDecorationColor:"blue"
};
