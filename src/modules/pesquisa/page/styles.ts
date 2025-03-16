import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const pesquisar_box_button: SxProps = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
  mb: { xs: 4, md: 6, lg: 8 },
  gap: 2,
};
export const pesquisar_box: SxProps = {
  width: { xs: "350px", sm: "550px", md: "700px", lg: "800px" },
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  gap: 2,
  alignItems: "center",
  justifyContent: "center",
  ".MuiInputBase-input": {
    padding: { xs: "14px", md: "16px" },
  },
  ".MuiInputLabel-root": {
    fontSize: { xs: "12px", md: "14px" },
    textAlign: "center",
  },
};
export const pesquisar_container: SxProps = {
  width: { xs: "350px", sm: "550px", md: "850px", lg: "1000px" },
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
  justifyContent: "center",
};
export const pesquisar_button: SxProps = {
  textTransform: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-between", lg: "center" },
  fontSize: "1rem",
  lineHeight: "1",
  color: PALETTE.BLACK,
  borderRadius: "23px",
  padding: "13px 30px",
  minWidth: { xs: "unset", sm: "203px" },
  boxShadow: "unset",
};

export const pesquisar_box_result: SxProps = {
  width: "100%",
  backgroundColor: PALETTE.GRAY_300,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  py: { xs: 4, md: 6, lg: 8 },
};

export const pesquisar_result: SxProps = {
  width: "100%",
  textAlign: "left",
  color: "#6e6e6e",
  fontWeight: 400,
  fontSize: "1rem",
};
