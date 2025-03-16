import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const displayMobile: SxProps = {
  display: { xs: "flex", lg: "none" },
  "&.MuiIconButton-root": {
    paddingRight: "0px !important",
  },
};
export const displayDesktop: SxProps = {
  display: { xs: "none", lg: "flex" },
};
export const header_stacker: SxProps = {
  zIndex: "999",
  display: "flex",
};
export const header_appBar: SxProps = {
  justifyContent: "center",
  backgroundColor: PALETTE.WHITE,
  boxShadow: "none",
  height: { xs: "60px", lg: "70px" },
  mt: { xs: "0px", lg: "38px" },
  pr: "0px !important",
};
export const header_toolbar: SxProps = {
  minHeight: "100% !important",
};
export const header_button: SxProps = {
  padding: { xs: "0px", md: "15px 16px" },
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
};
export const header_iconList: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: { xs: "100%", lg: "unset" },
  color: PALETTE.BLACK,
};
export const header_icon: SxProps = {
  width: { xs: "24px", lg: "20px" },
  height: { xs: "24px", lg: "20px" },
  padding: "0",
};
export const header_drawer: SxProps = {
  display: { xs: "flex", lg: "none" },
  position: "unset",
  "& .MuiBackdrop-root": {
    display: "none",
  },
  "& .MuiPaper-root": {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "-webkit-fill-available",
    marginTop: "60px",
    boxShadow: "unset",
    borderTop: `1px solid ${PALETTE.GRAY_400}`,
  },
};
export const header_drawerItems: SxProps = {
  display: "flex",
  flexFlow: "column",
  padding: "30px 24px 15px 24px",
  "& .MuiListItemButton-root": {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    padding: "0",

    "a:link": {
      fontFamily: "Noto Sans, Medium",
      fontSize: "0.875rem",
      fontWeight: FONTWEIGHT.MEDIUM,
      color: PALETTE.BLACK,
      textDecoration: "none",
    },
  },
};

export const header_handleHeader: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
};
export const header_link: SxProps = {
  marginBottom: "15px",
  "a:-webkit-any-link": {
    fontFamily: "Noto Sans, Medium",
    fontSize: "0.75rem",
    fontWeight: FONTWEIGHT.MEDIUM,
    color: PALETTE.BLACK,
    textDecoration: "none",
  },
};
export const header_submenu: SxProps = {
  position: "fixed",
  zIndex: "999",
  top: "0",
  left: "0",
  right: "0",
  marginTop: "102px",
  width: "100%",
  height: "fit-content",
  maxHeight: "370px",
  backgroundColor: PALETTE.WHITE,
  borderTop: `1px solid ${PALETTE.GRAY_400}`,
};
export const header_submenuWrapper: SxProps = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-between",
  height: "100%",
  maxHeight: "370px",
  width: "1200px",
  margin: "0px auto",
  padding: "40px 30px 40px 30px",
};
export const header_submenuColumn: SxProps = {
  display: "flex",
  flexFlow: "column",
  flexWrap: "wrap",
  alignContent: "flex-start",
  gap: "20px 25%",
  "a:-webkit-any-link": {
    width: "fit-content",
    fontFamily: "Noto Sans, Medium",
    fontSize: "0.875rem",
    fontWeight: FONTWEIGHT.MEDIUM,
    color: PALETTE.GRAY_700,
    textDecoration: "none",
    svg: {
      opacity: "0",
    },
    "&:hover": {
      color: PALETTE.BLACK,
      svg: {
        opacity: "1",
      },
    },
  },
};
export const header_externalsWrapper: SxProps = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  borderLeft: { xs: "unset", lg: `1px solid ${PALETTE.GRAY_400}` },
  width: { xs: "100%", lg: "25%" },
  gap: { xs: "30px", lg: "0px" },
};
export const header_external: SxProps = {
  display: "flex",
  flexFlow: "column",
  padding: { xs: "0px", lg: "0px 40px" },

  "a:-webkit-any-link": {
    fontFamily: "Noto Sans, Medium",
    fontSize: "0.75rem",
    fontWeight: FONTWEIGHT.MEDIUM,
    color: PALETTE.BLACK,
    textDecoration: "none",
  },
};
export const header_extTitle: SxProps = {
  fontFamily: "Noto Sans, Medium",
  fontSize: "0.875rem",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
  my: "6px",
};
export const header_extDescription: SxProps = {
  fontSize: "0.75rem",
  color: PALETTE.GRAY_700,
  marginBottom: "12px",
};
export const header_extLink: SxProps = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  "a:-webkit-any-link": {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    fontSize: "0.75rem",
    paddingRight: "8px",
    color: PALETTE.GRAY_700,
    "&:hover": {
      fontWeight: FONTWEIGHT.SEMI_BOLD,
    },
  },
};

export const headerlink: SxProps = {
  position: "fixed",
  width: "100%",
  height: "38px",
  backgroundColor: PALETTE.GRAY_300,
};
export const headerlink_container: SxProps = {
  height: "100%",
  display: { xs: "none", lg: "flex" },
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 4,
};

export const headerlink_mobile: SxProps = {
  backgroundColor: PALETTE.GRAY_300,
  display: { xs: "flex", lg: "none" },
  flexDirection: { xs: "column" },
  alignItems: { xs: "flex-start" },
  justifyContent: { xs: "center" },
  gap: { xs: "20px" },
  pl: { xs: "24px" },
  pt: { xs: "30px" },
  pb: { xs: "30px" },
};
export const mobileheaderlink_button: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
  padding: "0px",
  color: PALETTE.BLACK,
  textTransform: "none",
};
export const mobileheaderlink_font: SxProps = {
  fontWeight: FONTWEIGHT.MEDIUM,
  fontSize: "0.75rem",
};

export const headerlink_link: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  textDecoration: "none",
  gap: "6px",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.MEDIUM,
  fontSize: "0.875rem",
};

export const headerlink_button: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
  "p.MuiTypography-root": {
    fontSize: "12px",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
    color: PALETTE.BLACK,
    textTransform: "none",
  },
  "&:hover": { backgroundColor: "transparent" },
};
