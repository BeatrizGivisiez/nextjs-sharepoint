import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Paperclip, X } from "@phosphor-icons/react";
import { PALETTE } from "@/app/theme/styles/constantes";
import {
  form_anexoBtn,
  form_mandatoryLabel,
  form_text,
  form_textRow,
  form_textStacker,
  form_uploadFilesBox,
} from "./styles";
import { buttonactionicon_label } from "../ButtonActionIcon/styles";

interface FormFileUploadProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const MAX_FILES = 100;
const MAX_TOTAL_SIZE_MB = 15;

const ALLOWED_EXTENSIONS = [
  "txt", "doc", "docx", "pdf", "rtf", "csv", "xls", "xlsx", "ods",
  "mp3", "wma", "wav", "ogg", "jpeg", "jpg", "png", "bmp", "eml",
  "msg", "avi", "divx", "mov", "mp4", "mpg", "wmv"
];

export const Form_FileUpload: React.FC<FormFileUploadProps> = ({
  files,
  setFiles,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFiles: FileList = e.target.files;
      const newFilesArray: File[] = Array.from(uploadedFiles);

      const totalSizeMB =
        newFilesArray.reduce(
          (acc, file) => acc + file.size / (1024 * 1024),
          0
        ) + files.reduce((acc, file) => acc + file.size / (1024 * 1024), 0);

      const invalidFiles = newFilesArray.filter(file => {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        return !fileExtension || !ALLOWED_EXTENSIONS.includes(fileExtension);
      });

      if (invalidFiles.length > 0) {
        const invalidExtensions = invalidFiles.map(file => file.name.split('.').pop()).join(', ');
        setShowError(true);
        setErrorMessage(`Não podemos aceitar ficheiros .${invalidExtensions}`);
        setTimeout(() => setShowError(false), 3000);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      if (totalSizeMB > MAX_TOTAL_SIZE_MB) {
        setShowError(true);
        setErrorMessage(`Tamanho máximo de ${MAX_TOTAL_SIZE_MB}MB excedido.`);
        setTimeout(() => setShowError(false), 3000);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      setFiles((prevFiles) => {
        const updatedFiles = [...prevFiles, ...newFilesArray].slice(
          0,
          MAX_FILES
        );
        return updatedFiles;
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleFileRemove = (fileIndex: number) => {
    setFiles(files.filter((_, index) => index !== fileIndex));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>Anexo</Typography>
        <Typography sx={form_mandatoryLabel}>(opcional)</Typography>
      </Box>
      <Box sx={form_uploadFilesBox}>
        <>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ display: "none" }}
            id="file-upload"
            ref={fileInputRef}
            multiple
            disabled={files.length >= MAX_FILES}
            accept={ALLOWED_EXTENSIONS.map(ext => `.${ext}`).join(',')}
          />
          <label htmlFor="file-upload">
            <Button
              component="span"
              sx={form_anexoBtn}
              endIcon={<Paperclip size={20} color={PALETTE.BLACK} />}
              disabled={files.length >= MAX_FILES}
            >
              <Typography sx={buttonactionicon_label}>
                Adicionar ficheiro
              </Typography>
            </Button>
          </label>
        </>
      </Box>
      {files.length > 0 && (
        <Box>
          <Typography sx={form_text}>Ficheiros anexados:</Typography>
          <ul>
            {files.map((file, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexFlow: "row", alignItems: "center" }}
              >
                {file.name}
                <IconButton onClick={() => handleFileRemove(index)}>
                  <X color={PALETTE.ERROR_MAIN} weight="bold" />
                </IconButton>
              </Box>
            ))}
          </ul>
        </Box>
      )}
      <Typography
        sx={{
          ...form_text,
          opacity: showError ? 1 : 0,
          transition: "opacity 0.5s",
          color: PALETTE.ERROR_MAIN,
        }}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
};
