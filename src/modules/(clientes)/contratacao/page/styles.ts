import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const paperanexodownload: SxProps = {
  my: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const paperanexodownload_box: SxProps = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const paperanexodownload_container: SxProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "3%",
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
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
};
export const collapseItem_wrapper: SxProps = {
  maxWidth: "950px !important",
  padding: "0px !important",
  borderBottom: `2px solid ${PALETTE.GRAY_400} `,
  mt: "25px",
  mb: "25px",
};
