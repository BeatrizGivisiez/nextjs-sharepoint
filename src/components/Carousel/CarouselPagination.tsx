"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Collapse, IconButton } from "@mui/material";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import {
  carouselPaginationContainer,
  carouselPaginationItem,
  carouselPaginationItemSelected,
  carouselPaginationWrapper,
} from "./styles";

export const CarouselPagination = ({
  items,
  currentItem,
  handleItemChange,
  setCurrentItem,
}: {
  items: { id: string }[];
  currentItem: number;
  handleItemChange: (direction: "left" | "right") => void;
  setCurrentItem: (index: number) => void;
}) => {
  return (
    <Box sx={carouselPaginationWrapper}>
      <IconButton onClick={() => handleItemChange("left")}>
        <CaretLeft size={24} weight="bold" color={PALETTE.WHITE} />
      </IconButton>
      <Box
        sx={{
          ...carouselPaginationContainer,
          minWidth: (items.length - 1) * 8 * 2 + 24,
        }}
      >
        {items.map((item, index) => (
          <Collapse
            key={`${item.id}-${index}`}
            orientation="horizontal"
            collapsedSize={8}
            in={currentItem === index}
          >
            <Box
              sx={{
                ...(currentItem === index
                  ? carouselPaginationItemSelected
                  : carouselPaginationItem),
                cursor: "pointer",
              }}
              onClick={() => setCurrentItem(index)}
            />
          </Collapse>
        ))}
      </Box>
      <IconButton onClick={() => handleItemChange("right")}>
        <CaretRight size={24} weight="bold" color={PALETTE.WHITE} />
      </IconButton>
    </Box>
  );
};
