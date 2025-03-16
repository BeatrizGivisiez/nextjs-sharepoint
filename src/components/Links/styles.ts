import { FONTWEIGHT } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const links: SxProps = {
  display: "flex",
  width: { xs: "135px", sm: "230px" },
  height: "100px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: { xs: "top", sm: "center" },
  gap: { xs: 1, sm: 2 },
  "&:hover": {
    cursor: "pointer",
  },
  my: 3,
};
export const links_box_text = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
};
export const links_text = {
  color: "black",
  fontWeight: FONTWEIGHT.NORMAL,
  fontSize: "16px",
  textAlign: "center",
};
