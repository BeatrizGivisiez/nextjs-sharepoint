"use client";

import { Box, Link, Typography } from "@mui/material";

import {
  cardoffers_box_description,
  cardoffers_box_title,
  cardoffers_image,
  cardoffers_item,
  cardoffers_link,
} from "./styles";
import { CardOffersProps } from "./types";

export const CardOffers = ({
  link,
  image,
  title,
  description,
}: CardOffersProps) => {
  return (
    <>
      <Box sx={cardoffers_item}>
        <Link sx={cardoffers_link} href={link}>
          <Box sx={cardoffers_image}>
            <img
              src={image ?? ""}
              alt="Image Banner"
              style={{
                width: "300px",
                height: "190px",
                objectFit: "cover",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
          </Box>
          <Typography sx={cardoffers_box_title}>
            {title.length > 25 ? `${title.slice(0, 25)}...` : title}
          </Typography>
          <Typography sx={cardoffers_box_description}>{description}</Typography>
        </Link>
      </Box>
    </>
  );
};
