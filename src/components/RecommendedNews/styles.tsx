import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const cardoffers: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mt: 3,
  mb: 3,
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
export const cardoffers_image: SxProps = {
  img: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
};
export const cardoffers_box_title: SxProps = {
  fontSize: 16,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  fontFamily: "Noto Sans",
};
export const cardoffers_box_description: SxProps = {
  fontSize: 14,
  fontWeight: FONTWEIGHT.NORMAL,
  fontFamily: "Noto Sans",
  color: PALETTE.GRAY_700,
};
export const cardoffers_item: SxProps = {
  width: "250px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
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
export const cardnews: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  my: 6,
};
export const cardnews_container: SxProps = {
  width: "1200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "30px",
};
export const cardnews_paper: SxProps = {
  backgroundColor: PALETTE.WHITE,
  width: "310px",
  height: "375px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  borderRadius: "20px",
  textDecoration: "none",
  display: "flex",
  justifyContent:"flex-start",
  flexDirection: "column",
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
};
export const cardnews_box: SxProps = {
  display: "flex",
  flexDirection: "column",
  margin: "30px",
  maxHeight: "200px",
  width:"-webkit-fill-available;",
  height: "-webkit-fill-available",
};
export const cardnews_data: SxProps = {
  marginBottom: "4px",
  fontSize: "12px",
  fontWeight: FONTWEIGHT.LIGHT,
  color: PALETTE.GRAY_700,
  textTransform:"none",
};
export const cardnews_title: SxProps = {
  marginBottom: "14px",
  fontSize: "16px",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
  textTransform:"none",
};
export const cardnews_description: SxProps = {
  fontSize: "16px",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.GRAY_700,
  textTransform:"none",
};

export const cardicondescription_card: SxProps = {
  width: { xs: "100%", sm: "313px" },
  maxWidth: "313px",
  height: "192px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: 2,
  padding: 3,
  borderRadius: "20px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  "&:hover": {
    border: `2px solid ${PALETTE.PRIMARY_DARK}`,
  },
};
export const cardicondescription_card_title: SxProps = {
  marginTop: 2,
  fontSize: "1rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const cardicondescription_card_description: SxProps = {
  marginTop: 1,
  fontSize: "0.875rem",
  fontWeight: FONTWEIGHT.NORMAL,
  color: PALETTE.GRAY_700,
};
