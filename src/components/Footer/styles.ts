import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const footer: SxProps = {
  fontFamily: "Noto Sans",
  width: "100%",
  height: "fit-content",
  backgroundColor: PALETTE.GRAY_800,
  paddingTop: { xs: "30px", md: "40px" },
  paddingRight: { xs: "0px", md: "0px" },
  paddingBottom: "30px",
};
export const footer_desktopContainer: SxProps = {
  width: "100%",
  display: { xs: "none", md: "flex" },
  flexDirection: "row",
  justifyContent: { xs: "flex-start", md: "space-between" },
  gap: { xs: 10, md: 5, lg: 10 },
  padding: 0,
};
export const footer_mobileContainer: SxProps = {
  width: "100%",
  display: { xs: "flex", md: "none" },
  flexDirection: "column",
  justifyContent: "flex-start",
};
export const footer_logo: SxProps = {
  width: { xs: "82px", md: "140px" },
  height: "fit-content",
  maxHeight: "70px",
};
export const footer_accordionContainer: SxProps = {
  margin: "25px 0px 30px 0px",
  padding: "0 !important",
  borderTop: `1px solid ${PALETTE.GRAY_700}`,
};
export const footericon: SxProps = {
  ".Mui-expanded & > .collapsIconWrapper": { display: "none" },
  ".expandIconWrapper": { display: "none" },
  ".Mui-expanded & > .expandIconWrapper": { display: "block" },
  color: PALETTE.WHITE,
  fontSize: "20px",
};
export const footer_accordion: SxProps = {
  margin: "0px !important",
  backgroundColor: "transparent",
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
};
export const footer_accordionSummary: SxProps = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-between",
  minHeight: "unset !important",
  borderBottom: `1px solid ${PALETTE.GRAY_500}`,
  color: PALETTE.WHITE,
  "&.Mui-expanded": {
    color: PALETTE.PRIMARY_MAIN,
  },
};
export const footer_accordionTitle: SxProps = {
  fontSize: "0.875rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  marginBottom: { xs: "0rem", md: "1rem" },
};
export const footer_links_column: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
export const footer_title: SxProps = {
  fontSize: "0.875rem",
  color: PALETTE.WHITE,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  marginBottom: { xs: "0rem", md: "1rem" },
};
export const footer_subtitle: SxProps = {
  color: PALETTE.WHITE,
  fontSize: "0.75rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const footer_link = {
  color: PALETTE.GRAY_400,
  fontSize: "0.75rem",
  fontWeight: FONTWEIGHT.NORMAL,
  textDecoration: "none",
};
export const footer_link_content = {
  fontWeight: FONTWEIGHT.NORMAL,
  whiteSpace: "pre-line",
  width: "10.8125rem",
  fontSize: "0.75rem",
  marginBottom: "0.875rem",
};
export const footer_redes = {
  display: "flex",
  gap: "20px",
  "&:hover": {
    cursor: "pointer",
  },
};
export const footer_email = {
  fontSize: "0.75rem",
  color: PALETTE.GRAY_400,
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  },
};
export const footer_copyrights: SxProps = {
  marginTop: { xs: "20px", md: "45px" },
};
