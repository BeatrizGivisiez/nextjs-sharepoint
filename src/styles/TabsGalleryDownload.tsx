import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const tabsgallerydownload: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const tabsgallerydownload_grid: SxProps = {
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
export const tabsgallerydownload_box: SxProps = {
  ".MuiTabPanel-root": {
    display: "flex",
    flexWrap:"wrap",
    flexFlow: {xs: "column", md:"wrap"},
    alignItems:"center",
    justifyContent:{xs:"center",md:"flex-start"},
    gap:"48px 48px",
    padding: "0px !important",
    overflowX:{xs:"scroll", lg:"hidden"},
  },
};
export const tabsgallerydownload_spacing: SxProps ={
  p:{xs:"48px 0px",sm:"48px 48px"}
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

export const tabsgallerydownload_noTabsGrid: SxProps = {
  width:"100%",
  margin:"48px 0px",
  padding:"0px 0px 24px 0px",
  display:"inline-flex",
  justifyContent:"center",
  flexFlow:"row",
  flexWrap:"wrap",
  gap:"48px 0px",
  overflow:"hidden",
};