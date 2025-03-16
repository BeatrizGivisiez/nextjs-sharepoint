import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const iconinformative: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: PALETTE.GRAY_300,
  padding: 2,
};

export const iconinformativeContainer: SxProps = {
  width: "800px",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "space-between",
  gap: { xs: 4 },
};

export const iconinformativeBox: SxProps = {
  color: PALETTE.BLACK,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const iconinformativeTitle: SxProps = {
  fontWeight: FONTWEIGHT.BOLD,
};

export const iconinformativeDescription: SxProps = {
  fontWeight: FONTWEIGHT.LIGHT,
};

export const iconInfor_paper: SxProps = {
  width: "310px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 4,
  borderRadius: "20px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  gap: 2,
};
export const iconInfor_title: SxProps = {
  textAlign: "center",
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
};
