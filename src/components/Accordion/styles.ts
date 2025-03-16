import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const accordion_box: SxProps = {
  width: "100%",
  borderRadius: "0px !important",
  boxShadow: "unset",
  "div.MuiAccordionSummary-root": {
    padding: "24px",
    gap: "0px 24px",
    borderTop: `2px solid ${PALETTE.GRAY_400} `,
    "&:hover": {
      backgroundColor: PALETTE.GRAY_300,
    },
    "&.Mui-expanded": {
      backgroundColor: PALETTE.GRAY_300,
      borderBottom: `2px solid ${PALETTE.GRAY_400} `,
    },
    "div.MuiAccordionSummary-content": {
      margin: 0,
    },
  },
  "div.MuiCollapse-root.MuiCollapse-hidden": {
    padding: 0,
  },
  "div.MuiCollapse-root.MuiCollapse-entered": {
    padding: 0,
  },
};
export const accordion_title: SxProps = {
  fontFamily: "Noto Sans",
  fontSize: { xs: "16px !important", md: "18px !important" },
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
};
export const accordion_description: SxProps = {
  fontFamily: "Noto Sans",
  fontSize: "0.875rem",
  color: PALETTE.BLACK,
};

export const accordiontext_title: SxProps = {
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  fontSize: "0.875rem",
  textAlign: "left",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  mb: "30px",
};
export const accordiontext_description: SxProps = {
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  fontSize: "0.875rem",
  textAlign: "left",
  mb: "30px",
};
