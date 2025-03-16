"use client";

import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";
import { BREAKPOINTS, PALETTE } from "./styles/constantes";

const MODE = "light";

const theme = createTheme(
  {
    palette: {
      mode: MODE,
      common: {
        black: PALETTE.BLACK,
        white: PALETTE.WHITE,
      },
      primary: {
        main: PALETTE.PRIMARY_MAIN,
        contrastText: PALETTE.WHITE,
        dark: PALETTE.PRIMARY_DARK,
        light: PALETTE.PRIMARY_LIGHT,
      },
      secondary: {
        main: PALETTE.SECONDARY_MAIN,
        contrastText: PALETTE.WHITE,
        dark: PALETTE.SECONDARY_DARK,
        light: PALETTE.SECONDARY_LIGHT,
      },
      error: {
        main: PALETTE.ERROR_MAIN,
        light: PALETTE.ERROR_LIGHT,
        dark: PALETTE.ERROR_DARK,
        contrastText: PALETTE.WHITE,
      },
      warning: {
        main: PALETTE.WARNING_MAIN,
        light: PALETTE.WARNING_LIGHT,
        dark: PALETTE.WARNING_DARK,
        contrastText: PALETTE.WHITE,
      },
      info: {
        main: PALETTE.INFO_MAIN,
        light: PALETTE.INFO_LIGHT,
        dark: PALETTE.INFO_DARK,
        contrastText: PALETTE.WHITE,
      },
      success: {
        main: PALETTE.SUCCESS_MAIN,
        light: PALETTE.SUCCESS_LIGHT,
        dark: PALETTE.SUCCESS_DARK,
        contrastText: PALETTE.WHITE,
      },
      grey: {
        100: PALETTE.GRAY_100,
        200: PALETTE.GRAY_200,
        300: PALETTE.GRAY_300,
        400: PALETTE.GRAY_400,
        500: PALETTE.GRAY_500,
        600: PALETTE.GRAY_600,
        700: PALETTE.GRAY_700,
        800: PALETTE.GRAY_800,
        900: PALETTE.GRAY_900,
      },
      divider: PALETTE.BLACK,
      background: {
        paper: PALETTE.WHITE,
        default: PALETTE.WHITE,
      },
    },
    typography: {
      fontFamily: ["Noto Sans", "sans-serif"].join(","),
    },
    spacing: 8,
    breakpoints: {
      values: {
        xs: BREAKPOINTS.XS,
        sm: BREAKPOINTS.SM,
        md: BREAKPOINTS.MD,
        lg: BREAKPOINTS.LG,
        xl: BREAKPOINTS.XL,
      },
    },
  },
  ptBR
);

export default theme;
