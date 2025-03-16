"use client";

import { ChangeEvent, useContext } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { ProductionContext } from "@/contexts/ProductionContext";
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
import { ProductionListProps } from "../types";
import {
  thermoelectric,
  windPark,
  geothermal,
  hydroelectric,
  photovoltaic,
} from "@/util/listRadioMaps";

export const ProductionForm = () => {
  const { setProduction, originalProduction, production, filters, setFilters } =
    useContext(ProductionContext);

  const handleUpdateCheckbox = (title: string, event: ChangeEvent) => {
    const isChecked = (event.target as HTMLInputElement).checked;

    let newValues: ProductionListProps[] = structuredClone(production);
    if (isChecked) {
      newValues.push(
        ...structuredClone(originalProduction).filter(
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

    setProduction(newValues);
  };

  const handleClickClearFilters = () => {
    setProduction([]);
    setFilters({
      [thermoelectric]: false,
      [windPark]: false,
      [geothermal]: false,
      [hydroelectric]: false,
      [photovoltaic]: false,
    });
  };

  return (
    <>
      <Box sx={viewmaps_filter}>
        <Box sx={viewmaps_filterDivider}>Centro Produtor</Box>
        <Box sx={viewmaps_locationsList}>
          <Box sx={viewmaps_row}>
            <Checkbox
              onChange={(e) => handleUpdateCheckbox(photovoltaic, e)}
              checked={filters[photovoltaic]}
              defaultChecked={filters[photovoltaic]}
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Central Fotovoltaica</Typography>
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) => handleUpdateCheckbox(geothermal, e)}
              checked={filters[geothermal]}
              defaultChecked={filters[geothermal]}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Central Geotérmica</Typography>
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) => handleUpdateCheckbox(hydroelectric, e)}
              checked={filters[hydroelectric]}
              defaultChecked={filters[hydroelectric]}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Central Hidroeléctrica</Typography>
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) => handleUpdateCheckbox(thermoelectric, e)}
              checked={filters[thermoelectric]}
              defaultChecked={filters[thermoelectric]}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Central Termoeléctrica</Typography>
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) => handleUpdateCheckbox(windPark, e)}
              checked={filters[windPark]}
              defaultChecked={filters[windPark]}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Parque Eólico</Typography>
          </Box>
        </Box>

        <Button sx={viewmaps_clearFiltersBtn} onClick={handleClickClearFilters}>
          Limpar
        </Button>
      </Box>
    </>
  );
};
