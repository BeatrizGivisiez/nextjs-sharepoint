// Form_DatePicker.tsx

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import {
  form_textStacker,
  form_textRow,
  form_text,
  form_mandatoryLabel,
  form_datePicker,
  form_validationMsg,
  form_datePicker_error,
} from "./styles";
import { ptBR } from "@mui/x-date-pickers";

dayjs.extend(updateLocale);
dayjs.updateLocale("pt-br", {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
});

interface FormDatePickerProps {
  title: string;
  onChange: (value: string | null) => void;
  error?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

export const Form_DatePicker: React.FC<FormDatePickerProps> = ({
  title,
  onChange,
  error,
  minDate,
  maxDate,
}) => {
  const [inputValue, setInputValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (maxDate && inputValue && inputValue.isAfter(maxDate)) {
      setInputValue(null);
    }
  }, [inputValue, maxDate]);

  useEffect(() => {
    if (minDate && inputValue && inputValue.isBefore(minDate)) {
      setInputValue(null);
    }
  }, [inputValue, minDate]);

  const handleDateChange = (value: Dayjs | null) => {
    setInputValue(value);
    if (value) {
      const formattedDate = value.format("DD/MM/YYYY");
      onChange(formattedDate);
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
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <DemoContainer
          sx={error ? form_datePicker_error : form_datePicker}
          components={["DatePicker"]}
        >
          <DatePicker
            value={inputValue}
            onChange={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            format={"DD/MM/YYYY"}
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Typography sx={{ ...form_validationMsg, opacity: error ? 1 : 0 }}>
        Por favor, preencha este campo corretamente.
      </Typography>
    </Box>
  );
};
