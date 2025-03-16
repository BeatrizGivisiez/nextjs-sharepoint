"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { CaretRight } from "@phosphor-icons/react";

import { PaperAnexoDownload } from "../";
import {
  paperpathfile,
  paperpathfile_box,
  paperpathfile_icon,
  paperpathfile_path,
  paperpathfile_title,
} from "./styles";
import { IPaperPathFile, TypeFilePaperAnexoDownload } from "./types";

export const PaperPathFile = ({
  handleClick = () => alert("Click"),
  file,
}: IPaperPathFile) => {
  const isFile = !!file?.typeFile;

  return (
    <>
      {!isFile && (
        <Paper elevation={0} sx={paperpathfile}>
          <Box sx={paperpathfile_box}>
            <Typography sx={paperpathfile_path}>
              {file?.value}.{file?.idFiles}
            </Typography>
            <Typography sx={paperpathfile_title}>{file?.titleFiles}</Typography>
          </Box>
          <Box sx={paperpathfile_icon}>
            <IconButton onClick={handleClick}>
              <CaretRight size={20} color={PALETTE.BLACK} weight="bold" />
            </IconButton>
          </Box>
        </Paper>
      )}

      {isFile && (
        <PaperAnexoDownload
          date={file?.date ?? ""}
          nameFile={file?.nameFile ?? ""}
          typeFile={(file?.typeFile as TypeFilePaperAnexoDownload) ?? ""}
          file={file.file ?? ""}
        />
      )}
    </>
  );
};
