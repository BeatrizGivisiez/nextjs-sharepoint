import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const Accordion_NoTabs_box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  pb: "80px",
};
export const Accordion_NoTabs_grid: SxProps = {
  width: { xs: "100%", sm: "600px", md: "800px", lg: "1000px" },
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  overflowX: { xs: "scroll", lg: "hidden" },
  padding: "0px !important",
};
export const Accordion_NoTabs_content: SxProps = {
  padding: "0px 24px",
  width: "100%",
};
export const Accordion_NoTabs_item: SxProps = {
  ".MuiTabPanel-root": {
    display: "flex",
    flexFlow: "column",
    padding: "0px !important",

    ".MuiBox-root:last-child > .MuiPaper-root": {
      borderBottom: `2px solid ${PALETTE.GRAY_400}`,
    },
  },
  ".MuiBox-root:last-child > .MuiPaper-root": {
    borderBottom: `2px solid ${PALETTE.GRAY_400}`,
  },
};

export const Accordion_Tabs_box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
export const Accordion_Tabs_grid: SxProps = {
  width: { xs: "100%", sm: "600px", md: "800px", lg: "1000px" },
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  overflowX: { xs: "scroll", lg: "hidden" },
  margin: { xs: "30px 24px 20px 24px", lg: "50px 24px 30px 24px" },
  padding: "0px !important",
};
export const Accordion_Tabs_content: SxProps = {
  padding: { xs: "24px", md: "48px 24px" },
};
export const Accordion_Tabs_item: SxProps = {
  ".MuiTabPanel-root": {
    display: "flex",
    flexFlow: "column",
    padding: "0px !important",

    ".MuiBox-root:last-child > .MuiPaper-root": {
      borderBottom: `2px solid ${PALETTE.GRAY_400}`,
    },
  },
};
