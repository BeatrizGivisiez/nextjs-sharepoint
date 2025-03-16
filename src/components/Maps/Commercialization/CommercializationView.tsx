"use client";

import dynamic from "next/dynamic";
import { ChangeEvent, Suspense, useContext, useEffect, useState } from "react";

import { CommercializationContext } from "@/contexts/CommercializationContext";
import { Box, Container, SelectChangeEvent } from "@mui/material";

import { ButtonMaps } from "../ButtonMaps";
import {
  viewmaps_list,
  viewmaps_map,
  viewmaps_none,
  viewmaps_row_start,
  viewmaps_stacker,
} from "../styles";
import { CommercializationListProps } from "../types";
import { CommercializationForm } from "./CommercializationForm";
import { CommercializationList } from "./CommercializationList";

const CommercializationLeaflet = dynamic(
  () => import("./CommercializationLeaflet"),
  { ssr: false }
);

export const CommercializationView = () => {
  const {
    commercialization,
    fetchCommercialization,
    setCommercialization,
    originalCommercialization,
    setSelectedIlha,
  } = useContext(CommercializationContext);
  const [ilha, setIlha] = useState("");

  const collection = "Agente de Cobrança";
  const powerCenter = "Centro de Energia";
  const storeEDA = "Loja EDA";
  const RIAC = "RIAC";

  const [filters, setFilters] = useState({
    [collection]: true,
    [powerCenter]: true,
    [storeEDA]: true,
    [RIAC]: true,
  });

  useEffect(() => {
    fetchCommercialization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  const handleUpdateCheckbox = (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    let newValues: CommercializationListProps[] =
      structuredClone(commercialization);
    if (isChecked) {
      newValues.push(
        ...structuredClone(originalCommercialization).filter(
          (i) => i.category?.name == title
        )
      );
      setFilters((e) => ({
        ...e,
        [title]: true,
      }));
    } else {
      newValues = newValues.filter((i) => i.category?.name != title);
      setFilters((e) => ({
        ...e,
        [title]: false,
      }));
    }
    setCommercialization(newValues);
  };

  const handleClearFilters = () => {
    setIlha("");
  };

  const handleIlhaChange = (event: SelectChangeEvent) => {
    const ilhaSelecionada = event.target.value as string;
    setIlha(ilhaSelecionada);
    setSelectedIlha(ilhaSelecionada);
  };

  return (
    <Container>
      <Box sx={viewmaps_stacker}>
        <ButtonMaps
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
          filters={filters}
          handleUpdateCheckbox={handleUpdateCheckbox}
          handleClearFilters={handleClearFilters}
        >
          <CommercializationForm
            ilha={ilha}
            onIlhaChange={handleIlhaChange}
            filters={filters}
            onClearFilters={handleClearFilters}
            handleUpdateCheckbox={handleUpdateCheckbox}
            activeButton={activeButton}
          />
        </ButtonMaps>
        <Box sx={viewmaps_row_start}>
          <Box sx={viewmaps_none}>
            <CommercializationForm
              ilha={ilha}
              onIlhaChange={handleIlhaChange}
              filters={filters}
              onClearFilters={handleClearFilters}
              handleUpdateCheckbox={handleUpdateCheckbox}
              activeButton={activeButton}
            />
          </Box>
          {activeButton == 1 ? (
            <Box sx={viewmaps_map}>
              <Suspense fallback={<div>Loading...</div>}>
                <CommercializationLeaflet />
              </Suspense>
            </Box>
          ) : (
            <Box sx={viewmaps_list}>
              {commercialization.map((item, index) => (
                <CommercializationList
                  key={index}
                  title={item.title}
                  comments={item.comments}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};
