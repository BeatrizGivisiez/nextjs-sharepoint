"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Paper, Typography } from "@mui/material";
import {
  Download,
  FileCsv,
  FileDoc,
  FileJpg,
  FilePdf,
  FilePpt,
  FileXls,
  FileZip,
} from "@phosphor-icons/react";

import {
  paperanexodownload,
  paperanexodownload_action,
  paperanexodownload_box,
  paperanexodownload_button,
  paperanexodownload_data,
  paperanexodownload_title,
} from "./styles";
import { PaperAnexoDownloadProps, TypeFilePaperAnexoDownload } from "./types";

export const PaperAnexoDownload = ({
  date,
  nameFile,
  typeFile,
  iconFile: IconFile,
  file,
}: PaperAnexoDownloadProps) => {
  switch (typeFile) {
    case TypeFilePaperAnexoDownload.JPG:
      IconFile = FileJpg;
      break;
    case TypeFilePaperAnexoDownload.PDF:
      IconFile = FilePdf;
      break;
    case TypeFilePaperAnexoDownload.CSV:
      IconFile = FileCsv;
      break;
    case TypeFilePaperAnexoDownload.XLSX:
      IconFile = FileXls;
      break;
    case TypeFilePaperAnexoDownload.XLS:
      IconFile = FileXls;
      break;
    case TypeFilePaperAnexoDownload.PPT:
      IconFile = FilePpt;
      break;
    case TypeFilePaperAnexoDownload.ZIP:
      IconFile = FileZip;
      break;
    default:
      IconFile = FileDoc;
      break;
  }

  return (
    <Paper elevation={0} sx={paperanexodownload}>
      <Typography sx={paperanexodownload_data}>{date}</Typography>
      <Box sx={paperanexodownload_box}>
        {IconFile && <IconFile size={24} color={PALETTE.BLACK} weight="bold" />}
        <Typography sx={paperanexodownload_title}>
          {nameFile && nameFile.length > 50
            ? `${nameFile.slice(0, 50)}...`
            : nameFile}
        </Typography>
      </Box>
      <Button
        sx={paperanexodownload_action}
        onClick={() => window.open(file ?? "", "_blank")}
      >
        <Typography sx={paperanexodownload_button}>Descarregar</Typography>
        <Download size={20} color={PALETTE.SECONDARY_MAIN} weight="bold" />
      </Button>
    </Paper>
  );
};
