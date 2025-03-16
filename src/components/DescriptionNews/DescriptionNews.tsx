import { formatDate } from "@/util/formatDate";
import { Box, Typography } from "@mui/material";

import {
  descriptionnews,
  descriptionnews_box,
  descriptionnews_data,
  descriptionnews_description,
  descriptionnews_title,
} from "./styles";
import { DescriptionNewsProps } from "./types";

export const DescriptionNews = ({
  dateNews,
  title,
  description,
  img,
  children,
}: DescriptionNewsProps) => {
  return (
    <>
      <Box sx={descriptionnews}>
        <Box sx={descriptionnews_box}>
          <Typography sx={descriptionnews_data}>
            {formatDate(dateNews ?? "defaultDate")}
          </Typography>
          <Typography sx={descriptionnews_title}>{title}</Typography>
          <Typography sx={descriptionnews_description}>
            {description}
          </Typography>
          {img?.length !== 0 ? (
            <img
              src={img ?? ""}
              alt="Image Banner"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          ) : null}

          <Box sx={descriptionnews_description}>{children}</Box>
        </Box>
      </Box>
    </>
  );
};
