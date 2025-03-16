import React, { useContext, useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { CommercializationContext } from "@/contexts/CommercializationContext";
import { listIslands } from "@/util/listIslands";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { CaretDown, CheckCircle, Circle } from "@phosphor-icons/react";

import {
  viewmaps_clearFiltersBtn,
  viewmaps_filter,
  viewmaps_filterDivider,
  viewmaps_locationsList,
  viewmaps_row,
  viewmaps_text,
} from "../styles";
import { CommercializationFormProps, ISelect } from "../types";

export const CommercializationForm = ({
  ilha,
  onClearFilters,
  filters,
  handleUpdateCheckbox,
  onIlhaChange,
  activeButton,
}: CommercializationFormProps) => {
  const { setCommercialization, originalCommercialization, setSelectedIlha } =
    useContext(CommercializationContext);
  const [islands, setIslands] = useState<ISelect[]>([]);

  const collection = "Agente de Cobrança";
  const powerCenter = "Centro de Energia";
  const storeEDA = "Loja EDA";
  const RIAC = "RIAC";

  useEffect(() => {
    handleCreateMenuOptions();
  }, [originalCommercialization]);

  const handleCreateMenuOptions = () => {
    const newIslands: ISelect[] = listIslands.map((item) => ({
      key: item.nome,
      value: item.nome,
    }));
    setIslands(newIslands);
  };

  const handleChangeIlha = (event: SelectChangeEvent<string>) => {
    const selectedIlha = event.target.value;
    const selectedIslandData = listIslands.find(
      (island) => island.nome === selectedIlha
    );
    if (selectedIslandData) {
      setSelectedIlha(selectedIslandData.nome);
    } else {
      setSelectedIlha(null);
    }
    onIlhaChange(event);
  };

  const handleClickClearFilters = () => {
    // Only reset the location, not the filters
    setSelectedIlha(null);
    handleCreateMenuOptions();
    onClearFilters(); // Assume this function resets zoom and coordinates
  };

  return (
    <Box sx={viewmaps_filter}>
      <Box sx={viewmaps_filterDivider}>Tipo</Box>
      <Box sx={viewmaps_locationsList}>
        <Box sx={viewmaps_row}>
          <Checkbox
            onChange={(e) => handleUpdateCheckbox(collection, e)}
            checked={filters[collection]}
            icon={<Circle size={24} color={PALETTE.GRAY_400} />}
            checkedIcon={
              <CheckCircle
                size={24}
                color={PALETTE.PRIMARY_MAIN}
                weight="fill"
              />
            }
          />
          <Typography sx={viewmaps_text}>Agente de Cobrança</Typography>
        </Box>
        <Box sx={viewmaps_row}>
          <Checkbox
            icon={<Circle size={24} color={PALETTE.GRAY_400} />}
            onChange={(e) => handleUpdateCheckbox(powerCenter, e)}
            checked={filters[powerCenter]}
            checkedIcon={
              <CheckCircle
                size={24}
                color={PALETTE.PRIMARY_MAIN}
                weight="fill"
              />
            }
          />
          <Typography sx={viewmaps_text}>Centro de Energia</Typography>
        </Box>
        <Box sx={viewmaps_row}>
          <Checkbox
            icon={<Circle size={24} color={PALETTE.GRAY_400} />}
            onChange={(e) => handleUpdateCheckbox(storeEDA, e)}
            checked={filters[storeEDA]}
            checkedIcon={
              <CheckCircle
                size={24}
                color={PALETTE.PRIMARY_MAIN}
                weight="fill"
              />
            }
          />
          <Typography sx={viewmaps_text}>Loja EDA</Typography>
        </Box>
        <Box sx={viewmaps_row}>
          <Checkbox
            icon={<Circle size={24} color={PALETTE.GRAY_400} />}
            onChange={(e) => handleUpdateCheckbox(RIAC, e)}
            checked={filters[RIAC]}
            checkedIcon={
              <CheckCircle
                size={24}
                color={PALETTE.PRIMARY_MAIN}
                weight="fill"
              />
            }
          />
          <Typography sx={viewmaps_text}>RIAC</Typography>
        </Box>
      </Box>

      <Box sx={{ ...viewmaps_filterDivider, mt: 4 }}>Localização</Box>
      <Box sx={viewmaps_locationsList}>
        <FormControl fullWidth>
          <InputLabel id="ilha-label">Ilha</InputLabel>
          <Select
            labelId="ilha-label"
            id="ilha"
            value={ilha}
            label="Ilha"
            onChange={handleChangeIlha}
            IconComponent={CaretDown}
            disabled={activeButton === 2}
            sx={{
              "&.Mui-disabled": {
                backgroundColor: PALETTE.GRAY_100,
                color: PALETTE.GRAY_400,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: PALETTE.GRAY_400,
                },
              },
            }}
          >
            {islands.map((island) => (
              <MenuItem key={island.key} value={island.value}>
                {island.key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Button sx={viewmaps_clearFiltersBtn} onClick={handleClickClearFilters}>
        Limpar Localização
      </Button>
    </Box>
  );
};
