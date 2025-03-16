import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const stepVerticalInformative: SxProps = {
  width: "100%",
};
export const stepVerticalInformative_wrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
};
export const stepVerticalInformative_timeline: SxProps = {
  alignItems: "center",
  "&.MuiTimeline-root": {
    marginTop: "0px !important",
    marginBottom: "0px !important",
    padding: "0px 16px !important",
  },
  "li.MuiTimelineItem-root": {
    "&::before": {
      display: "none",
    },
    "&:first-child": {
      "div.MuiTimelineSeparator-root": {
        "span.MuiTimelineConnector-root:first-child": {
          backgroundColor: PALETTE.GRAY_300,
        },
      },
    },
    "&:last-child": {
      "div.MuiTimelineSeparator-root": {
        "span.MuiTimelineConnector-root:last-child": {
          backgroundColor: PALETTE.GRAY_300,
        },
      },
    },
  },
};
export const stepVerticalInformative_timelineItem: SxProps = {
  maxWidth: "800px",
  width: "100%",
};
export const stepVerticalInformative_stepContent: SxProps = {
  margin: { xs: "10px 0px 10px 20px", sm: "10px 0px 10px 40px" },
  borderRadius: "20px",
  padding: { xs: "20px 30px", sm: "30px 40px" },
};
export const stepVerticalInformative_timelineDot: SxProps = {
  margin: 0,
  boxShadow: "unset",
  borderStyle: "unset",
  borderWidth: "unset",
  backgroundColor: PALETTE.PRIMARY_MAIN,
  padding: "10px",
};
export const stepVerticalInformative_stepIndex: SxProps = {
  textAlign: "left",
  fontSize: "0.875rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.GRAY_700,
  mb: "8px",
};
export const stepVerticalInformative_stepTitle: SxProps = {
  textAlign: "left",
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.BLACK,
  mb: "16px",
};
export const stepVerticalInformative_stepDescription: SxProps = {
  textAlign: "left",
  fontSize: "0.875rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.MEDIUM,
  color: PALETTE.BLACK,
  whiteSpace: "pre-line",
};
