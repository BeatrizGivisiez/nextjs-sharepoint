"use client";

import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";

import { InterruptionContext } from "@/contexts/InterruptionContext";
import { Box, Container, SelectChangeEvent } from "@mui/material";

import { ButtonMaps } from "../ButtonMaps";
import {
  viewmaps_list,
  viewmaps_map,
  viewmaps_none,
  viewmaps_row,
  viewmaps_stacker,
} from "../styles";
import { InterruptionForm } from "./InterruptionForm";
import { InterruptionList } from "./InterruptionList";

const InterruptionLeaflet = dynamic(() => import("./InterruptionLeaflet"), {
  ssr: false,
});
export const InterruptionView = () => {
  const [ilha, setIlha] = useState("");
  const [activeButton, setActiveButton] = useState(1);
  const [concelho, setConcelho] = useState("");
  const [freguesia, setFreguesia] = useState("");
  const { powerInterruption, fetchInterruption } =
    useContext(InterruptionContext);

  useEffect(() => {
    fetchInterruption();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIlhaChange = (event: SelectChangeEvent) => {
    setIlha(event.target.value as string);
  };

  const handleConcelhoChange = (event: SelectChangeEvent) => {
    setConcelho(event.target.value as string);
  };

  const handleFreguesiaChange = (event: SelectChangeEvent) => {
    setFreguesia(event.target.value as string);
  };

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  const handleClearFilters = () => {
    setIlha("");
    setConcelho("");
    setFreguesia("");
  };

  return (
    <Container>
      <Box sx={viewmaps_stacker}>
        <ButtonMaps
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        >
          <InterruptionForm
            ilha={ilha}
            concelho={concelho}
            freguesia={freguesia}
            onClearFilters={handleClearFilters}
            onConcelhoChange={handleConcelhoChange}
            onFreguesiaChange={handleFreguesiaChange}
            onIlhaChange={handleIlhaChange}
          />
        </ButtonMaps>
        <Box
          sx={{
            ...viewmaps_row,
            alignItems: "flex-start",
            pt: "30px",
          }}
        >
          <Box sx={viewmaps_none}>
            <InterruptionForm
              ilha={ilha}
              concelho={concelho}
              freguesia={freguesia}
              onClearFilters={handleClearFilters}
              onConcelhoChange={handleConcelhoChange}
              onFreguesiaChange={handleFreguesiaChange}
              onIlhaChange={handleIlhaChange}
            />
          </Box>
          {activeButton == 1 ? (
            <Box sx={viewmaps_map}>
              <InterruptionLeaflet />
            </Box>
          ) : (
            <InterruptionList
              islandId={ilha}
              countyId={concelho}
              parishId={freguesia}
            />
          )}
        </Box>
      </Box>
    </Container>
  );
};
