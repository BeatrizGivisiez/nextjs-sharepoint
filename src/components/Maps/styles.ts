import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const viewmaps_stacker: SxProps = {
  display: "flex",
  flexFlow: "column",
};
export const viewmaps_row: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  "span.MuiButtonBase-root": {
    padding: "0px 10px 0px 0px",
  },
  gap: 1
};
export const viewmaps_row_start: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "flex-start",
  pt: "30px",
  "span.MuiButtonBase-root": {
    padding: "0px 10px 0px 0px",
  },
};
export const viewmaps_buttonsRow: SxProps = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
export const viewmaps_filterTitle: SxProps = {
  fontFamily: "Noto Sans",
  fontSize: "1.125rem",
  mr: 1,
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.BOLD,
};
export const viewmaps_text: SxProps = {
  fontSize: "14px",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
};
export const viewmaps_buttonSeeMap: SxProps = {
  display: "flex",
  flexFlow: "row",
  padding: "15px 25px",
  borderRadius: "23px 0px 0px 23px",
  border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  textTransform: "none",
  "&:hover": {
    backgroundColor: PALETTE.PRIMARY_MAIN,
  },
};
export const viewmaps_buttonSeeMapMobile: SxProps = {
  display: "flex",
  flexFlow: "row",
  padding: "8px",
  borderRadius: "23px 0px 0px 23px",
  border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  textTransform: "none",
  "&:hover": {
    backgroundColor: PALETTE.PRIMARY_MAIN,
  },
};

export const viewmaps_buttonSeeList: SxProps = {
  display: "flex",
  flexFlow: "row",
  padding: "15px 25px",
  borderRadius: "0px 23px 23px 0px",
  border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  textTransform: "none",
  "&:hover": {
    backgroundColor: PALETTE.PRIMARY_MAIN,
  },
  "&.Mui-disabled": {
    color: PALETTE.GRAY_200,
    borderColor: PALETTE.GRAY_400,
    backgroundColor: PALETTE.GRAY_400,
  },
};
export const viewmaps_buttonSeeListMobile: SxProps = {
  display: "flex",
  flexFlow: "row",
  padding: "8px",
  borderRadius: "0px 23px 23px 0px",
  border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  textTransform: "none",
  "&:hover": {
    backgroundColor: PALETTE.PRIMARY_MAIN,
  },
  "&.Mui-disabled": {
    color: PALETTE.GRAY_200,
    borderColor: PALETTE.GRAY_400,
    backgroundColor: PALETTE.GRAY_400,
  },
};
export const viewmaps_filter: SxProps = {
  width: "100%",
  minWidth: "30%",
  pr: { xs: "0px", md: "40px" },
};
export const viewmaps_filterDivider: SxProps = {
  fontFamily: "Noto Sans",
  fontSize: "1rem",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  pb: "8px",
  mb: "20px",
  borderBottom: `2px solid ${PALETTE.GRAY_400}`,
};
export const viewmaps_locationsList: SxProps = {
  display: "flex",
  flexFlow: "column",
  gap: "20px",

  "div.MuiFormControl-root": {
    "&:hover": {
      borderColor: PALETTE.PRIMARY_MAIN,
    },
    "label.MuiFormLabel-root": {
      left: "15px",
      color: PALETTE.BLACK,
      fontSize: "0.875rem",
      fontWeight: FONTWEIGHT.MEDIUM,
    },
    "label.MuiFormLabel-root.MuiInputLabel-shrink": {
      left: "0px",
    },
    "label.MuiFormLabel-root.Mui-focused": {
      color: PALETTE.PRIMARY_MAIN,
    },
    "div.MuiInputBase-root": {
      borderRadius: "24px",
      ".MuiOutlinedInput-notchedOutline": {
        "&:hover": PALETTE.PRIMARY_MAIN,
      },
      "div.MuiSelect-select": {
        padding: "15px 25px",
      },
      "svg.MuiSvgIcon-root": {
        right: "15px",
      },
      "svg.MuiSelect-icon": {
        right: "25px",
      },
    },
  },
};
export const viewmaps_clearFiltersBtn: SxProps = {
  mt: 2,
  fontSize: "0.875rem",
  color: PALETTE.GRAY_700,
  textDecoration: "underline",
  textTransform: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
};
export const viewmaps_map: SxProps = {
  width: { xs: "100%", md: "70%" },
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  "div.leaflet-container div.leaflet-control-container": {
    backgroundColor: "black",
    "& *": {
      zIndex: "900",
    },
  },
};
export const viewmaps_list: SxProps = {
  display: "flex",
  flexFlow: "column",
  width: { xs: "100%", md: "70%" },
  gap: "20px",
};
export const viewmaps_listLocation: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "30px 40px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  borderRadius: "20px",
};
export const viewmaps_locationName: SxProps = {
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  fontSize: "1rem",
  mb: "6px",
  color: PALETTE.BLACK,
};
export const viewmaps_locationDate: SxProps = {
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.LIGHT,
  fontSize: "0.875rem",
  color: PALETTE.GRAY_700,
};
export const viewmaps_locationAddress: SxProps = {
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.NORMAL,
  fontSize: "0.875rem",
  mt: "14px",
  color: PALETTE.BLACK,
};
export const viewmaps_label: SxProps = {
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  fontSize: "0.875rem",
  mt: "14px",
  color: PALETTE.BLACK,
  minWidth: "auto",
};
export const viewmaps_start: SxProps = {};
export const viewmaps_none: SxProps = {
  display: { xs: "none", md: "block" },
  width: "30%",
};
export const popupmaps_box: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const popupmaps_bold: SxProps = {
  fontWeight: FONTWEIGHT.BOLD,
  fontSize: "12px",
  marginBottom: "0px !important",
  marginTop: "0px !important",
};
export const popupmaps_type: SxProps = {
  fontSize: "12px",
  marginBottom: "0px !important",
  marginTop: "0px !important",
};
export const popupmaps_flex: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 1,
  marginBottom: "0px !important",
  marginTop: "0px !important",
};
export const popupmaps_column: SxProps = {
  display: "flex",
  flexDirection: "column",
  my: 1,
};
export const popupmaps_fontsize: SxProps = {
  fontSize: "12px",
  mt: 1,
};
export const maps_MapContainer: SxProps = {};
