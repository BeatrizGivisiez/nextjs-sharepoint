"use client";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, TextField, Typography } from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimeField,
  TimeValidationError,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FieldChangeHandler } from "@mui/x-date-pickers/internals";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import {
  form_datePicker,
  form_mandatoryLabel,
  form_mandatoryText,
  form_text,
  form_textRow,
  form_textStacker,
  form_validationMsg,
} from "./styles";
import { FormPickerProps } from "./types";

export const FormPicker_Hour = ({
  title,
  onInputChange,
  onInput,
  isOpcional,
}: FormPickerProps) => {
  const handleInputChange: FieldChangeHandler<
    React.ChangeEvent<HTMLInputElement> | null,
    TimeValidationError
  > = (value) => {
    if (value !== null) {
      onInputChange(value.currentTarget.value);
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
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
        <TimeField
          onInput={onInput}
          onChange={handleInputChange}
          format="HH:mm"
        />
      </LocalizationProvider>
    </Box>
  );
};

export const FormPicker_Date = ({
  title,
  onInputChange,
  isOpcional,
}: FormPickerProps) => {
  const handleInputChange = (date: Date | null) => {
    if (date !== null) {
      const dateString = date.toISOString();
      onInputChange(dateString);
    }
  };
  const handleChange = (value: unknown) => {
    if (value instanceof Date && !isNaN(value.getTime())) {
      handleInputChange(value);
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
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
        <DemoContainer sx={form_datePicker} components={["DatePicker"]}>
          <DatePicker onChange={(newValue) => handleChange(newValue)} />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};
