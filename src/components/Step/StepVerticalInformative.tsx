"use client";

import * as React from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, Typography } from "@mui/material";

import {
  stepVerticalInformative,
  stepVerticalInformative_stepContent,
  stepVerticalInformative_stepDescription,
  stepVerticalInformative_stepIndex,
  stepVerticalInformative_stepTitle,
  stepVerticalInformative_timeline,
  stepVerticalInformative_timelineDot,
  stepVerticalInformative_timelineItem,
  stepVerticalInformative_wrapper,
} from "./styles";
import { StepVerticalInformativeProps } from "./types";

export const StepVerticalInformative = ({
  stepIndex,
  stepTitle,
  stepDescription,
  grayBackground,
}: StepVerticalInformativeProps) => {
  return (
    <Box sx={stepVerticalInformative}>
      <Container sx={stepVerticalInformative_wrapper}>
        <Timeline sx={stepVerticalInformative_timeline}>
          <TimelineItem sx={stepVerticalInformative_timelineItem}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={stepVerticalInformative_timelineDot} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                ...stepVerticalInformative_stepContent,
                backgroundColor: grayBackground
                  ? PALETTE.GRAY_300
                  : PALETTE.WHITE,
              }}
            >
              <Typography sx={stepVerticalInformative_stepIndex}>
                {stepIndex}
              </Typography>
              <Typography sx={stepVerticalInformative_stepTitle}>
                {stepTitle}
              </Typography>
              <Typography sx={stepVerticalInformative_stepDescription}>
                {stepDescription}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
};
