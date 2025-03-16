import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import {
  form_TimePicker,
  form_TimePicker_error,
  form_mandatoryLabel,
  form_text,
  form_textRow,
  form_textStacker,
  form_validationMsg,
} from "./styles";

interface FormHourPickerProps {
  title: string;
  onChange: (value: string | null) => void;
  format?: string;
  error?: boolean;
  minTime?: Dayjs;
  maxTime?: Dayjs;
}

export const Form_HourPicker_start: React.FC<FormHourPickerProps> = ({
  title,
  onChange,
  format = "HH:mm",
  error,
  minTime,
  maxTime,
}) => {
  const [inputValue, setInputValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (maxTime && inputValue && inputValue.isAfter(maxTime)) {
      setInputValue(null);
    }
  }, [inputValue, maxTime]);

  const handleTimeChange = (value: Dayjs | null) => {
    setInputValue(value);
    if (value) {
      onChange(value.format(format));
    } else {
      onChange(null);
    }
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography sx={{ ...form_mandatoryLabel }} />
      </Box>
      <Box sx={error ? form_TimePicker_error : form_TimePicker}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            disableOpenPicker={false}
            ampm={false}
            value={null}
            onChange={handleTimeChange}
            maxTime={maxTime}
          />
        </LocalizationProvider>
      </Box>
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};

export const Form_HourPicker_end: React.FC<FormHourPickerProps> = ({
  title,
  onChange,
  format = "HH:mm",
  error,
  minTime,
}) => {
  const [inputValue, setInputValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (minTime && inputValue && inputValue.isBefore(minTime)) {
      setInputValue(null);
    }
  }, [inputValue, minTime]);

  const handleTimeChange = (value: Dayjs | null) => {
    setInputValue(value);
    if (value) {
      onChange(value.format(format));
    } else {
      onChange(null);
    }
  };

  return (
    <Box sx={form_textStacker}>
      <Box sx={form_textRow}>
        <Typography sx={form_text}>{title}</Typography>
        <Typography sx={{ ...form_mandatoryLabel }} />
      </Box>
      <Box sx={error ? form_TimePicker_error : form_TimePicker}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            disableOpenPicker={false}
            ampm={false}
            value={null}
            onChange={handleTimeChange}
            minTime={minTime}
          />
        </LocalizationProvider>
      </Box>
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};
