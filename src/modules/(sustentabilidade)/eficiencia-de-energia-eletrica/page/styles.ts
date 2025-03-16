import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const stacker: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
};
export const seeMoreButton_Sustentabilidade: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  borderRadius: "25px",
  height: "48px",
  width: "fit-content",
  px: 4,
  mt: "20px",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};

export const tabs: SxProps = {
  my: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const tabsBox: SxProps = {
  maxWidth: "1100px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const tabsContent: SxProps = {
  width: "1000px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 3,
};

export const collapseItem_wrapper: SxProps = {
  maxWidth: "800px !important",
  padding: "0px !important",
  borderBottom: `2px solid ${PALETTE.GRAY_400} `,
  mt: "25px",
  mb: "25px",
};
