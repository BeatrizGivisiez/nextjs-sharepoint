"use client";

import { ChangeEvent, useContext } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { DistributionContext } from "@/contexts/DistributionContext";
import { station, subStation } from "@/util/listRadioMaps";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { CheckCircle, Circle } from "@phosphor-icons/react";

import {
  viewmaps_clearFiltersBtn,
  viewmaps_filter,
  viewmaps_filterDivider,
  viewmaps_locationsList,
  viewmaps_row,
  viewmaps_text,
} from "../styles";
import { DistributionListProps } from "../types";

export const DistributionForm = () => {
  const {
    setDistribution,
    originalDistribution,
    distribution,
    filters: checkboxes,
    setFilters: setCheckboxes,
  } = useContext(DistributionContext);

  const handleUpdateCheckbox = (title: string, event: ChangeEvent) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    let newValues: DistributionListProps[] = structuredClone(distribution);
    if (isChecked) {
      newValues.push(
        ...structuredClone(originalDistribution).filter(
          (i) => i.category?.name == title
        )
      );
      setCheckboxes((e) => ({
        ...e,
        [title]: true,
      }));
    } else {
      newValues = newValues.filter((i) => i.category?.name != title);
      setCheckboxes((e) => ({
        ...e,
        [title]: false,
      }));
    }

    setDistribution(newValues);
  };

  const handleClickClearFilters = () => {
    setDistribution([]);
    setCheckboxes({
      [subStation]: false,
      [station]: false,
    });
  };

  return (
    <>
      <Box sx={viewmaps_filter}>
        <Box sx={viewmaps_filterDivider}>Ponto de Distribuição</Box>
        <Box sx={viewmaps_locationsList}>
          <Box sx={viewmaps_row}>
            <Checkbox
              onChange={(e) => handleUpdateCheckbox(station, e)}
              checked={checkboxes[station]}
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Postos de Transformação</Typography>
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) => handleUpdateCheckbox(subStation, e)}
              checked={checkboxes[subStation]}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Subestações</Typography>
          </Box>
        </Box>

        <Button sx={viewmaps_clearFiltersBtn} onClick={handleClickClearFilters}>
          Limpar
        </Button>
      </Box>
    </>
  );
};
