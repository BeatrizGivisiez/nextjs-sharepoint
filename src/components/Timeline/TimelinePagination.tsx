"use client";

import { Fragment, useState } from "react";

import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import {
  timelinePagination,
  timelinePagination_carousel,
  timelinePagination_carouselItem,
  timelinePagination_carouselText,
  timelinePagination_carouselWrapper,
  timelinePagination_content,
  timelinePagination_contentContainer,
  timelinePagination_dot,
  timelinePagination_item,
  timelinePagination_separator,
  timelinePagination_timeline,
  timelinePagination_wrapper,
  timelinePagination_year,
} from "./styles";
import { TimelinePaginationItemProps, TimelinePaginationProps } from "./type";

export const TimelinePagination = ({
  timelineData,
}: TimelinePaginationProps) => {
  const sortedTimelineData = [...timelineData].sort(
    (a, b) => Number(a.year) - Number(b.year)
  );

  console.log("sortedTimelineData.length: " + sortedTimelineData.length);

  const [currentItem, setCurrentItem] = useState(sortedTimelineData.length - 1);

  const timelineStart = (sortedTimelineData.length * 120) / 2 - 120;
  const timelineEnd = (sortedTimelineData.length * 120) / -2;
  const [timelinePosition, setTimelinePosition] = useState(timelineEnd);

  const handleItemChange = (direction: "left" | "right") => {
    if (direction === "left" && currentItem > 0) {
      setCurrentItem((curr) => curr - 1);
      setTimelinePosition((prevPosition) =>
        prevPosition === timelineStart ? prevPosition : prevPosition + 120
      );
    } else if (
      direction === "right" &&
      currentItem < sortedTimelineData.length - 1
    ) {
      setCurrentItem((curr) => curr + 1);
      setTimelinePosition((prevPosition) =>
        prevPosition === timelineEnd ? prevPosition : prevPosition - 120
      );
    }
  };

  return (
    <Box sx={timelinePagination}>
      <Box sx={timelinePagination_wrapper}>
        <Timeline
          sx={{
            ...timelinePagination_timeline,
            translate: `${timelinePosition}px`,
          }}
          position="left"
        >
          <TimelineItem sx={{ ...timelinePagination_item, height: "50vw" }}>
            <TimelineSeparator sx={timelinePagination_separator}>
              <TimelineConnector />
            </TimelineSeparator>
          </TimelineItem>

          {sortedTimelineData.map((item, index) => (
            <TimelineItem key={index} sx={timelinePagination_item}>
              <TimelineSeparator sx={timelinePagination_separator}>
                {currentItem === index ? (
                  <TimelineDot sx={timelinePagination_dot} color="primary" />
                ) : (
                  <TimelineDot sx={timelinePagination_dot} />
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={timelinePagination_contentContainer}>
                <Box sx={timelinePagination_content}>
                  <Typography
                    sx={{
                      ...timelinePagination_year,
                      fontWeight:
                        currentItem === index
                          ? FONTWEIGHT.BOLD
                          : FONTWEIGHT.NORMAL,
                    }}
                  >
                    {item.year}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}

          <TimelineItem sx={{ ...timelinePagination_item, height: "50vw" }}>
            <TimelineSeparator sx={timelinePagination_separator}>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={timelinePagination_contentContainer}>
              <Box sx={timelinePagination_content}>
                <Typography sx={timelinePagination_year}></Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Box sx={timelinePagination_carousel}>
        <Box sx={timelinePagination_carouselWrapper}>
          <IconButton
            onClick={() => handleItemChange("left")}
            disabled={currentItem === 0}
          >
            <CaretLeft size={24} weight="bold" color={PALETTE.BLACK} />
          </IconButton>
          {sortedTimelineData.map((item, index) =>
            currentItem === index ? (
              <TimelinePaginationCarouselItem
                key={index}
                description={item.description}
              />
            ) : (
              <Fragment key={index} />
            )
          )}
          <IconButton
            onClick={() => handleItemChange("right")}
            disabled={currentItem === sortedTimelineData.length - 1}
          >
            <CaretRight size={24} weight="bold" color={PALETTE.BLACK} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export const TimelinePaginationCarouselItem = ({
  description,
}: TimelinePaginationItemProps) => {
  return (
    <Box sx={timelinePagination_carouselItem}>
      <Box sx={timelinePagination_carouselText}>{description}</Box>
    </Box>
  );
};
