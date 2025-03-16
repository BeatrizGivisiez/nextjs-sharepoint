import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const titledescription: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const titledescription_container: SxProps = {
  width: { xs: "100%", sm: "600px", md: "900px", lg: "1000px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const titledescription_title: SxProps = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1.25rem", sm: "1.56rem", lg: "1.875rem" },
  textAlign: "center",
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.BLACK,
  maxWidth: "750px",
};
export const titledescription_subtitle: SxProps = {
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontWeight: FONTWEIGHT.NORMAL,
  textAlign: "center",
  color: PALETTE.BLACK,
  maxWidth: "950px",
  whiteSpace: "pre-line",
};
export const textdescription: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  my: 6,
};
export const textdescription_container: SxProps = {
  width: { xs: "350px", sm: "600px", md: "800px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};
export const textdescription_title: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  fontSize: { sx: "1rem", lg: "1.1rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
  mb: 2,
};
export const textdescription_subtitle: SxProps = {
  fontSize: "0.85rem",
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: FONTWEIGHT.NORMAL,
  color: PALETTE.BLACK,
  mb: 2,
};
export const textdescription_button: SxProps = {
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
export const textParagraph: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};
export const textParagraph_list: SxProps = {
  display: "flex",
  flexFlow: "column",
  maxWidth: "800px",
  gap: "16px",
};
export const textParagraph_text: SxProps = {
  textAlign: "left",
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
};

export const richtext: SxProps = {
  width: "100%",
  display: { xs: "block", sm: "flex" },
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  py: 3,
};
export const richtext_box: SxProps = {
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontWeight: FONTWEIGHT.NORMAL,
  color: PALETTE.BLACK,
  maxWidth: "1000px",
  padding: "0px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: {
    fontFamily: "Noto Sans !important",
  },
  "&": {
    "*": {
      overflow: "hidden",
      overflowX: "auto",
    },
    Button: {
      width: "fit-content",
      display: "inline-block !important",
    },
  },
  button: {
    textDecoration: "none !important",
    borderRadius: "25px !important",
    color: "#202020 !important",
    border: "none !important",
    backgroundColor: "#ffd000 !important",
    fontSize: "16px !important",
    fontFamily: "Noto Sans !important",
    textTransform: "math-auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "45px",
    px: 4,
    margin: "4px !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#FEB104 !important",
      border: "#FEB104 !important",
      boxShadow:
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    },
  },
};
export const richtext_accordion: SxProps = {
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontWeight: FONTWEIGHT.NORMAL,
  color: PALETTE.BLACK,
  whiteSpace: "normal",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  p: {
    fontFamily: "Noto Sans !important",
  },
  button: {
    textDecoration: "none !important",
    borderRadius: "25px !important",
    color: "#202020 !important",
    border: "none !important",
    backgroundColor: "#ffd000 !important",
    fontSize: "16px !important",
    fontFamily: "Noto Sans",
    textTransform: "math-auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "45px",
    px: 4,
    margin: "4px !important",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#FEB104 !important",
      border: "#FEB104 !important",
      boxShadow:
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    },
  },
};
export const richtext_box_accordion: SxProps = {
  p: "16px 8px 8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  "& div": {
    width: "100%",
  },
};
