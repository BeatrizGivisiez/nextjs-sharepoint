import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const galleryleaflets: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
export const galleryleaflets_grid: SxProps = {
  width: { xs: "100%", lg: "1200px" },
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
export const galleryleaflets_box: SxProps = {
  ".MuiTabPanel-root": {
    display: "flex",
    flexWrap:"wrap",
    flexFlow: {xs: "row", lg:"wrap"},
    alignItems:"center",
    gap:{xs:"24px 48px", lg:"24px 0px"},
    padding:{xs:"0px 0px 20px 0px", lg:"0px"},
    overflowX:{xs:"scroll", lg:"hidden"},
  },
};
export const galleryleaflets_spacing: SxProps ={
  p:{xs:"48px 48px",lg:"48px 24px"}
}
export const tabsPosts_button: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  borderRadius: "25px",
  height: "48px",
  width:"max-content",
  px: 4,
  mt: "20px",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};

export const galleryleaflets_noTabsGrid: SxProps = {
  width:"100%",
  margin:"48px 0px",
  padding:"0px 0px 24px 0px",
  display:"inline-flex",
  justifyContent:"center",
  flexFlow:"row",
  flexWrap:"wrap",
  gap:{xs:"24px 0px", lg:"48px 0px"},
  overflow:"hidden",
};