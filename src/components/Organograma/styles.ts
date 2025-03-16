import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const organograma_wrapper: SxProps = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const organograma_mainCell: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "fit-content",
  minHeight: "60px",
  padding: "20px 30px",
  borderRadius: "20px",
  border: `2px solid ${PALETTE.PRIMARY_DARK}`,
  backgroundColor: PALETTE.WHITE,
  color: PALETTE.BLACK,
  fontSize: "0.875rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const organograma_verticalLine: SxProps = {
  borderLeft: `2px solid ${PALETTE.PRIMARY_DARK}`,
  height: "30px",
};
export const organograma_table: SxProps = {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "100%",
  height: "fit-content",
  border: `2px solid ${PALETTE.PRIMARY_DARK}`,
  borderRadius: "20px",
  padding: { xs: "15px 15px", sm: "30px 30px" },
  gap: "20px 20px",
  backgroundColor: PALETTE.WHITE,
};
export const organograma_tableCell: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: { xs: "95%", sm: "23%" },
  minWidth: { xs: "unset", sm: "220px", md: "250px" },
  height: { xs: "fit-content", sm: "83px" },
  minHeight: "70px",
  fontFamily: "Noto Sans",
  fontSize: "0.75rem",
  borderRadius: "20px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  color: PALETTE.BLACK,
  textAlign: "center",
  padding: { xs: "15px 15px", sm: "25px 25px" },
};
export const organograma_desktopDisplay: SxProps = {
  display: { xs: "none", md: "flex" },
  flexFlow: "column",
  alignItems: "center",
};
export const organograma_mobileDisplay: SxProps = {
  display: { xs: "flex", md: "none" },
  flexFlow: "column",
  alignItems: "center",
};
export const organograma_button: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  textTransform: "none",
  lineHeight: "1",
  color: PALETTE.BLACK,
  borderRadius: "23px",
  padding: "13px 30px",
  marginTop: "30px",
};
