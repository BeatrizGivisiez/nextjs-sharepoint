import { PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const cardicondescription: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  py: 10,
  gap: 3,
};

export const cardicondescription_box: SxProps = {
  width: { xs: "100%", lg: "1200px" },
  display: "flex",
  flexWrap: "wrap",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
  gap: { xs: 4, lg: 6 },
  padding: "0px 24px",
};
