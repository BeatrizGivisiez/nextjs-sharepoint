import { SxProps } from "@mui/material";

export const tabsrichtext_spacing: SxProps = {
  p: { xs: "24px 0px", sm: "48px 48px" },
};
export const tabsrichtext_box: SxProps = {
  ".MuiTabPanel-root": {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: { xs: "column", md: "wrap" },
    alignItems: "center",
    justifyContent: { xs: "unset", md: "center" },
    gap: "24px 48px",
    padding: "0px !important",
    overflowX: { xs: "scroll", lg: "hidden" },
  },
};
