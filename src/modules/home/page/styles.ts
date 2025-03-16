import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const links_box: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  py: 4,
  bgcolor: PALETTE.GRAY_300,
};
export const links_grid = {
  width: "1200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "30px",
};

export const cardoffers_grid: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 0 80px",
};
export const cardoffers_box: SxProps = {
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  padding: 5,
  color: "black",
  "@media (max-width: 768px)": {
    flexWrap: "wrap",
  },
};
export const cardoffers_item: SxProps = {
  width: "250px",
  height: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "top",
  gap: 1,
  color: "black",
};
export const cardoffers_box_button: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const cardoffers_button: SxProps = {
  "@media (max-width: 768px)": {
    display: "none",
  },
};
