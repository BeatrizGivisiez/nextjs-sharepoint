import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  py: 10,
};
export const collapseItem_wrapper: SxProps = {
  maxWidth: "800px !important",
  padding: "0px !important",
  borderBottom: `2px solid ${PALETTE.GRAY_400} `,
  mt: "25px",
  mb: 10,
};
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
export const download_button: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  textTransform: "none",
  lineHeight: "1",
  color: PALETTE.BLACK,
  borderRadius: "23px",
  padding: "13px 30px",
  marginTop: "30px",
};
