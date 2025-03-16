import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const tabsCollapseItem_tabs: SxProps = {
  "div.MuiTabs-scroller": {
    "div.MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      borderBottom: `2px solid ${PALETTE.GRAY_400}`,
      width: "100%",
      minWidth: "max-content",

      "Button.MuiButtonBase-root": {
        fontFamily: "Noto Sans",
        fontSize: { xs: "0.875rem", md: "1.125rem" },
        textTransform: "none",
        color: PALETTE.BLACK,
        padding: { xs: "16px 20px", md: "24px 24px" },
      },
      "Button.MuiButtonBase-root.Mui-selected": {
        color: PALETTE.BLACK,
        fontWeight: FONTWEIGHT.SEMI_BOLD,
      },
    },

    "span.MuiTabs-indicator": {
      height: "3px",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      span: {
        width: "80px",
        backgroundColor: PALETTE.PRIMARY_MAIN,
      },
    },
  },
};

export const tabsCollapseItem_tabPanel: SxProps = {
  padding: { xs: "24px", lg: "40px 100px" },
};
export const tabsCollapseItem_description: SxProps = {
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
  fontSize: "0.875rem",
  textAlign: "left",
  mb: "30px",
};
export const tabsCollapseItem_accordionsWrapper: SxProps = {
  borderBottom: `2px solid ${PALETTE.GRAY_400} `,
};
