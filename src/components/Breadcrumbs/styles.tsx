import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const breadcrumpsBar: SxProps = {
  width: "100%",
  backgroundColor: PALETTE.GRAY_300,
  marginTop: { xs: "32px", lg: "0px" },
};

export const breadcrumbsBar_wrapper: SxProps = {
  display: "flex",
  width: { xs: "100%", lg: "1200px" },
  margin: "0px auto",
  padding: "12px 24px",
  alignItems: "center",

  "& .MuiBreadcrumbs-ol": {
    "& .MuiBreadcrumbs-separator": {
      width: { xs: "8px !important", lg: "16px !important" },
    },
    "& .MuiBreadcrumbs-li": {
      height: "fit-content",
    },
  },
};

export const breadcrumbsBar_category: SxProps = {
  display: "flex",
  color: PALETTE.BLACK,
  fontFamily: "Noto Sans, Medium",
  fontSize: { xs: "0.625rem", lg: "0.75rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const breadcrumbsBar_link: SxProps = {
  display: "flex",
  color: PALETTE.BLACK,
  fontFamily: "Noto Sans, Medium",
  fontSize: { xs: "0.625rem", lg: "0.75rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  textDecoration: "unset",
};
export const breadcrumbsBar_lastItem: SxProps = {
  display:"flex",
  color: PALETTE.GRAY_700,
  fontFamily: "Noto Sans, Regular",
  fontSize: { xs: "0.625rem", lg: "0.75rem" },
  fontWeight: "normal",
  textDecoration: "unset",
};
export const breadcrumbsBar_mobileLastItem: SxProps = {
  display: { xs: "flex", sm: "none" },
  color: PALETTE.GRAY_700,
  fontFamily: "Noto Sans, Regular",
  fontSize: { xs: "0.625rem", lg: "0.75rem" },
  fontWeight: "normal",
  textDecoration: "unset",
};
