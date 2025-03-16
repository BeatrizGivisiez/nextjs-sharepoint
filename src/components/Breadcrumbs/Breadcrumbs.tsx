"use client";

import * as React from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { CaretRight, House } from "@phosphor-icons/react";

import {
  breadcrumbsBar_category,
  breadcrumbsBar_lastItem,
  breadcrumbsBar_link,
  breadcrumbsBar_mobileLastItem,
  breadcrumbsBar_wrapper,
  breadcrumpsBar,
} from "./styles";
import { BreadcrumbsProps } from "./types";

/*Helper*/
const capitalizeWords = (str: string): string => {
  if (str === str.toUpperCase()) {
    return str;
  }
  return str
    .split(" ")
    .map((word) =>
      word.length > 4
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word
    )
    .join(" ");
};

export const Breadcrumbs = ({
  category,
  URLcategory,
  mainPage,
  URLmainPage,
  subPage,
}: BreadcrumbsProps) => {
  const capitalizedCategory = category ? capitalizeWords(category) : category;
  const capitalizedMainPage = mainPage ? capitalizeWords(mainPage) : mainPage;
  const capitalizedSubPage = subPage ? capitalizeWords(subPage) : subPage;
  return (
    <Box sx={breadcrumpsBar}>
      <MuiBreadcrumbs
        aria-label="breadcrumb"
        separator={<CaretRight size={16} color={PALETTE.BLACK} weight="bold" />}
        sx={breadcrumbsBar_wrapper}
      >
        <Link href="/" style={{ display: "flex", height: "16px" }}>
          <House size={16} color={PALETTE.BLACK} weight="bold" />
        </Link>

        {capitalizedCategory &&
          (URLcategory ? (
            <Link href={URLcategory} sx={breadcrumbsBar_link}>
              {capitalizedCategory}
            </Link>
          ) : (
            <Typography sx={breadcrumbsBar_category}>
              {capitalizedCategory}
            </Typography>
          ))}

        {capitalizedMainPage && (
          <Link
            sx={
              capitalizedSubPage ? breadcrumbsBar_link : breadcrumbsBar_lastItem
            }
            href={URLmainPage}
          >
            {capitalizedMainPage}
          </Link>
        )}

        {capitalizedSubPage && (
          <Box>
            <Typography sx={{...breadcrumbsBar_lastItem, display: { xs: "none", sm: "flex" },}}>
              {capitalizedSubPage.length > 50 ? `${capitalizedSubPage.slice(0, 50)}...` : capitalizedSubPage}
            </Typography>
            <Typography sx={breadcrumbsBar_mobileLastItem}>
              {capitalizedSubPage.length > 15
                ? `${capitalizedSubPage.slice(0, 15)}...`
                : capitalizedSubPage}
            </Typography>
          </Box>
        )}
      </MuiBreadcrumbs>
    </Box>
  );
};
