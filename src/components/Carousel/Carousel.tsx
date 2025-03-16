"use client";

import { Fragment } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Typography } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import { CarouselPagination } from "./CarouselPagination";
import {
  carouselitem_box,
  carouselItem_buttonSeeMore,
  carouselItem_text,
  carouselItem_title,
  carouselItemContainer,
  carouselItemWrapper,
} from "./styles";
import { CarouselProps, ICarouselItem } from "./type";

export const Carousel = ({
  items,
  currentItem,
  setCurrentItem,
}: CarouselProps) => {
  const handleItemChange = (direction: "left" | "right") => {
    if (direction === "left")
      setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    else if (direction === "right")
      setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  };

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      {items.map((item: ICarouselItem, index: number) =>
        currentItem === index ? (
          <Box key={index} sx={carouselitem_box}>
            <Box sx={carouselItemWrapper}>
              <img src={item.imageSrc ?? ""} alt="Image Banner" />
              <Box sx={carouselItemContainer}>
                <Typography sx={carouselItem_title}>{item.title}</Typography>
                <Typography sx={carouselItem_text}>
                  {item.description}
                </Typography>
                <Button
                  sx={carouselItem_buttonSeeMore}
                  variant="contained"
                  href={item.href}
                  endIcon={
                    <ArrowRight
                      size={20}
                      color={PALETTE.BLACK}
                      weight="regular"
                    />
                  }
                >
                  Saiba mais
                </Button>
              </Box>
            </Box>
          </Box>
        ) : (
          <Fragment key={index} />
        )
      )}
      <CarouselPagination
        items={items}
        currentItem={currentItem}
        handleItemChange={handleItemChange}
        setCurrentItem={setCurrentItem}
      />
    </Box>
  );
};
