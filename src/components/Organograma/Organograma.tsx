"use client";

import { useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Container } from "@mui/material";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

import { ORGANOGRAMA } from "./constants";
import {
  organograma_button,
  organograma_desktopDisplay,
  organograma_mainCell,
  organograma_mobileDisplay,
  organograma_table,
  organograma_tableCell,
  organograma_verticalLine,
  organograma_wrapper,
} from "./styles";

export const Organograma = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [buttonText, updateButtonText] = useState<string | null>(null);

  const onClick = () => {
    updateButtonText((buttonText) =>
      buttonText === "Ver mais" ? "Ver menos" : "Ver mais"
    );
    if (showTable) {
      setShowTable(false);
    } else {
      setShowTable(true);
      updateButtonText("Ver menos");
    }
  };

  return (
    <Container sx={organograma_wrapper}>
      {ORGANOGRAMA.map((item) => (
        <>
          <Box sx={organograma_mainCell}>{item.firstCellTitle}</Box>
          <Box sx={organograma_verticalLine}></Box>
          <Box sx={organograma_mainCell}>{item.secondCellTitle}</Box>

          <Box sx={organograma_desktopDisplay}>
            <Box sx={organograma_verticalLine}></Box>
            <Box sx={organograma_table}>
              {item.directions.map((direction, dIndex) => (
                <Box
                  sx={{ ...organograma_tableCell, whiteSpace: "pre-line" }}
                  key={dIndex}
                >
                  {direction.directionTitle}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={organograma_mobileDisplay}>
            {showTable ? (
              <>
                <Box sx={organograma_verticalLine}></Box>
                <Box sx={organograma_table}>
                  {item.directions.map((direction, dIndex) => (
                    <Box sx={organograma_tableCell} key={dIndex}>
                      {direction.directionTitle}
                    </Box>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Box sx={organograma_verticalLine}></Box>
                <Box
                  sx={{
                    ...organograma_mainCell,
                    borderColor: PALETTE.GRAY_400,
                  }}
                >
                  {item.directionsNumber}
                </Box>
              </>
            )}
            <Button
              sx={organograma_button}
              onClick={onClick}
              variant="contained"
              endIcon={
                showTable == true ? (
                  <ArrowUp weight="regular" size={22} color={PALETTE.BLACK} />
                ) : (
                  <ArrowDown weight="regular" size={22} color={PALETTE.BLACK} />
                )
              }
            >
              {buttonText == undefined ? "Ver mais" : buttonText}
            </Button>
          </Box>
        </>
      ))}
    </Container>
  );
};
