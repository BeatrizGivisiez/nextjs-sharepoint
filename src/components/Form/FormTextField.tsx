"use client";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, TextField, Typography } from "@mui/material";

import {
  form_mandatoryLabel,
  form_text,
  form_textRow,
  form_textStacker,
  form_validationMsg,
} from "./styles";
import { FormTextFieldProps } from "./types";

export const FormTextField = ({
  title,
  placeholder,
  error,
  onInputChange,
  maxLength,
  isOpcional,
}: FormTextFieldProps) => {
  const onlyAllowLetters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const sanitizedValue = input.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s-]/g, ""); // Updated pattern to include "-"
    input.value = sanitizedValue;
    onInputChange(sanitizedValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onInputChange(value);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyAllowLetters) {
      onlyAllowLetters(e);
    }
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onChange={handleInputChange}
        inputProps={{ maxLength: maxLength }}
        onInput={handleInput}
      />
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const FormTextField_AllowAll = ({
  title,
  placeholder,
  error,
  onInputChange,
  maxLength,
  isOpcional,
}: FormTextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onInputChange(value);
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onChange={handleInputChange}
        inputProps={{ maxLength: maxLength }}
      />
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const FormTextField_Email = ({
  title,
  placeholder,
  error,
  onInputChange,
  maxLength,
  isOpcional,
}: FormTextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onInputChange(value);
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onChange={handleInputChange}
        inputProps={{ maxLength: maxLength }}
      />
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const FormTextField_Multiline = ({
  title,
  placeholder,
  error,
  onInputChange,
  maxLength,
  isOpcional,
  description,
}: FormTextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onInputChange(value);
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={{ ...form_text, mb: description && "6px" }}>
          {title}
        </Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      {description && (
        <Box sx={{ ...form_mandatoryLabel, ml: "12px" }}>{description}</Box>
      )}
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        multiline
        rows={4}
        error={error}
        onChange={handleInputChange}
        inputProps={{ maxLength: maxLength }}
      />
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const FormTextField_CodigoPostal = ({
  title,
  placeholder,
  error,
  maxLength,
  isOpcional,
  onInput,
  onKeyDown,
}: FormTextFieldProps) => {
  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onInput={onInput}
        onKeyDown={onKeyDown}
        inputProps={{ maxLength: maxLength }}
      />
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const FormTextField_Number = ({
  title,
  placeholder,
  error,
  maxLength,
  isOpcional,
  onInput,
  customInputProps = {},
}: FormTextFieldProps) => {
  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onInput={onInput}
        inputProps={{ maxLength: maxLength, ...customInputProps }}
      />

      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};
export const FormTextField_CodigoId = ({
  title,
  placeholder,
  error,
  maxLength,
  isOpcional,
  onInput,
}: FormTextFieldProps) => {
  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography
          sx={{ ...form_mandatoryLabel, opacity: isOpcional ? 1 : 0 }}
        >
          (opcional)
        </Typography>
      </Box>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        error={error}
        onInput={onInput}
        inputProps={{ maxLength: maxLength }}
      />
      <Typography
        sx={{
          ...form_validationMsg,
          color: error ? PALETTE.ERROR_MAIN : PALETTE.GRAY_500,
          fontWeight: error ? "600" : "500",
        }}
      >
        (Código constante na sua fatura, na zona de informações com 10 dígitos)
      </Typography>
    </Box>
  );
};
