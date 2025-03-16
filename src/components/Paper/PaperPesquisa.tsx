"use client";

import Link from "next/link";

import { Paper, Typography } from "@mui/material";

import {
  pesquisa_description,
  pesquisar_paper,
  pesquisar_title,
  pesquisar_url,
} from "./styles";
import { PaperPesquisaProps } from "./types";

export const PaperPesquisa = ({
  title,
  description,
  url,
}: PaperPesquisaProps) => {
  return (
    <Link href={url} style={{ textDecoration: "none" }} target="_blank">
      <Paper sx={pesquisar_paper} elevation={0}>
        <Typography sx={pesquisar_title}>{title}</Typography>
        <Typography
          sx={pesquisa_description}
          dangerouslySetInnerHTML={{ __html: description as string }}
        />
        <Typography sx={pesquisar_url}>{url}</Typography>
      </Paper>
    </Link>
  );
};
