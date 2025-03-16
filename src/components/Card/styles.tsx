import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

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
  color: PALETTE.BLACK,
  my: "10px",
};
export const cardoffers_box_description: SxProps = {
  width: { xs: "100%", md: "250px" },
  fontSize: 14,
  fontWeight: FONTWEIGHT.NORMAL,
  fontFamily: "Noto Sans",
  color: PALETTE.GRAY_700,
  overflow: "hidden",
  maxHeight: "60px",
};
export const cardoffers_item: SxProps = {
  width: { xs: "100%", md: "250px" },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 1,
  color: "black",
  cursor: "pointer",
};
export const cardoffers_link: SxProps = {
  textDecoration: "unset",
};

export const cardnews: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px 0px",
  margin: "0px 24px",
};
export const cardnews_container: SxProps = {
  maxWidth: "1200px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "30px",
};
export const cardnews_paper: SxProps = {
  width: "310px",
  height: "375px",
  border: `2px solid ${PALETTE.GRAY_400}`,
  borderRadius: "20px",
  textDecoration: "none",
  display: "flex",
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
  width:"-webkit-fill-available;",
  flexDirection: "column",
  margin: "30px",
  height: "-webkit-fill-available",
  overflow: "hidden",
};
export const cardnews_data: SxProps = {
  marginBottom: "4px",
  fontSize: "12px",
  fontWeight: FONTWEIGHT.LIGHT,
  color: PALETTE.GRAY_700,
  texTransform:"none",
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
  justifyContent: "space-around",
  width: "280px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 3,
  gap: 1,
  borderRadius: "20px",
  backgroundColor: PALETTE.WHITE,
  border: `2px solid ${PALETTE.GRAY_400}`,
  "&:hover": {
    border: `2px solid ${PALETTE.PRIMARY_DARK}`,
    backgroundColor: PALETTE.WHITE,
  },
};
export const cardicondescription_card_title: SxProps = {
  textAlign: "left",
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  textTransform: "none",
  color: PALETTE.BLACK,
};
