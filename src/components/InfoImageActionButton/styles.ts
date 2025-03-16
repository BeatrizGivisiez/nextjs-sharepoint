import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const infoimageactionbutton: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
export const infoimageactionbutton_container: SxProps = {
  width: { xs: "100%", lg: "1200px" },
  display: "flex",
  alignItems: "center",
  justifyContent: {
    xs: "center",
    md: "space-between",
  },
  padding: { xs: "30px 24px", lg: "50px 24px" },
};
export const infoimageactionbutton_box: SxProps = {
  width: { xs: "100%", md: "50%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const infoimageactionbutton_title: SxProps = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1.25rem", sm: "1.56rem", lg: "1.875rem" },
  textAlign: "flex-start",
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.BLACK,
  marginBottom: 3,
  width: "100%",
};
export const infoimageactionbutton_subtitle: SxProps = {
  fontWeight: FONTWEIGHT.NORMAL,
  width: "100%",
  fontSize: { xs: "0.875rem", sm: "1rem", lg: "1.125rem" },
  fontFamily: "Noto Sans",
  color: PALETTE.BLACK,
};
export const infoimageactionbutton_box_button: SxProps = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "flex-start",
  marginTop: 3,
  gap: 2,
};
export const infoimageactionbutton_button: SxProps = {
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
export const infoimageactionbutton_optionalButton: SxProps = {
  textTransform: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-between", lg: "center" },
  fontSize: "1rem",
  lineHeight: "1",
  color: PALETTE.BLACK,
  backgroundColor: PALETTE.WHITE,
  border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  borderRadius: "23px",
  padding: "11px 28px",
  minWidth: { xs: "unset", sm: "203px" },
  boxShadow: "unset",
};
export const infoimageactionbutton_buttonMessage: SxProps = {
  fontSize: "0.875rem",
  color: PALETTE.GRAY_700,
  marginTop: 2,
};
export const infoimageactionbutton_image: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "flex-start", lg: "flex-end" },
  width: { xs: "100%", md: "384px" },
  height: "360px",
  color: "black",
  padding: { xs: "0px" },
  margin: "30px 0px",
  img: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
};
export const infoimageactionbutton_imageContained: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "flex-start", lg: "center" },
  width: { xs: "100%", md: "50%" },
  height: "fit-content",
  color: "black",
  padding: { xs: "0px" },
  margin: "24px 0px 36px 0px",
  img: {
    width: "100%",
    maxWidth: "200px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "20px",
  },
};
