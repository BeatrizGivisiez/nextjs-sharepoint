"use client";

import { useContext, useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { InterruptionContext } from "@/contexts/InterruptionContext";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  CaretDown,
  CheckCircle,
  Circle,
  MapPinSimple,
} from "@phosphor-icons/react";

import {
  viewmaps_clearFiltersBtn,
  viewmaps_filter,
  viewmaps_filterDivider,
  viewmaps_locationsList,
  viewmaps_row,
  viewmaps_text,
} from "../styles";
import { InterruptionFormProps, ISelect } from "../types";

export const InterruptionForm = ({
  ilha,
  concelho,
  freguesia,
  onClearFilters,
  onIlhaChange,
  onConcelhoChange,
  onFreguesiaChange,
}: InterruptionFormProps) => {
  const {
    setPowerInterruption,
    originalPowerInterruption,
    filters: timeFilters,
    setFilters: setTimeFilters,
  } = useContext(InterruptionContext);

  const [islands, setIslands] = useState<ISelect[]>([]);
  const [counties, setCounties] = useState<ISelect[]>([]);
  const [parishes, setParishes] = useState<ISelect[]>([]);
  const [isClearButtonDisabled, setClearButtonDisabled] = useState(false);

  const handleCreateMenuOptions = (
    selectedIslands: string[],
    selectedCounty?: string
  ) => {
    const isl: Array<string | undefined> = [];
    const c: Array<string | undefined> = [];
    const p: Array<string | undefined> = [];

    setIslands([]);
    setCounties([]);
    setParishes([]);

    originalPowerInterruption.map((item) => {
      item.coordinates?.map((i: any) => {
        const values = i.title?.split(":") ?? [];

        if (!isl.includes(i.islandId)) {
          isl.push(i.islandId);
          setIslands((e) => [
            ...e,
            { key: values[0], value: i?.islandId ?? "" },
          ]);
        }

        if (selectedIslands.includes(i.islandId) && !c.includes(i.countyId)) {
          c.push(i.countyId);
          setCounties((e) => [
            ...e,
            { key: values[1], value: i?.countyId ?? "" },
          ]);
        }

        if (
          selectedIslands.includes(i.islandId) &&
          (!selectedCounty || selectedCounty === i.countyId) &&
          !p.includes(i.parishId) &&
          values[2]
        ) {
          p.push(i.parishId);
          setParishes((e) => [
            ...e,
            { key: values[2], value: i?.parishId ?? "" },
          ]);
        }
      });
    });
  };

  useEffect(() => {
    handleCreateMenuOptions(ilha ? [ilha] : [], concelho);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ilha, concelho, originalPowerInterruption]);

  useEffect(() => {
    const newValues = structuredClone(originalPowerInterruption).filter((i) => {
      const today = new Date();
      const startDate = new Date(i.beginDate);
      const finishDate = new Date(i.endDate);

      const isPresent = today >= startDate && today <= finishDate;
      const isFuture = today < startDate || today > finishDate;

      let matchesTimeFilter = false;
      if (timeFilters.present && isPresent) {
        matchesTimeFilter = true;
      }
      if (timeFilters.future && isFuture) {
        matchesTimeFilter = true;
      }

      if (!matchesTimeFilter) {
        return false;
      }

      let isInTheIsland = true;
      if (ilha) {
        isInTheIsland =
          (i.coordinates?.length ?? 0) > 0
            ? // @ts-ignore
              i.coordinates[0].islandId == ilha
            : false;
      }

      let isInTheCounty = true;
      if (concelho) {
        isInTheCounty =
          (i.coordinates?.length ?? 0) > 0
            ? // @ts-ignore
              i.coordinates[0].countyId == concelho
            : false;
      }

      let isInTheParish = true;
      if (freguesia) {
        isInTheParish =
          (i.coordinates?.length ?? 0) > 0
            ? // @ts-ignore
              i.coordinates[0]?.parishId == freguesia
            : false;
      }

      return isInTheIsland && isInTheCounty && isInTheParish;
    });

    setPowerInterruption(newValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeFilters, ilha, concelho, freguesia]);

  useEffect(() => {
    if (ilha || concelho || freguesia) {
      setClearButtonDisabled(false);
    }
  }, [ilha, concelho, freguesia]);

  const handleClickClearFilters = () => {
    setPowerInterruption(originalPowerInterruption);
    handleCreateMenuOptions([]);
    onClearFilters();
    setClearButtonDisabled(true);
  };

  return (
    <>
      <Box sx={viewmaps_filter}>
        <Box sx={viewmaps_filterDivider}>Período</Box>
        <Box sx={viewmaps_locationsList}>
          <Box sx={viewmaps_row}>
            <Checkbox
              onChange={(e) =>
                setTimeFilters((p) => ({
                  ...p,
                  present: (e.target as HTMLInputElement).checked,
                }))
              }
              defaultChecked={timeFilters.present}
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Presentes</Typography>
            <MapPinSimple
              size={20}
              color={PALETTE.ERROR_MAIN}
              weight="duotone"
            />
          </Box>
          <Box sx={viewmaps_row}>
            <Checkbox
              icon={<Circle size={24} color={PALETTE.GRAY_400} />}
              onChange={(e) =>
                setTimeFilters((p) => ({
                  ...p,
                  future: (e.target as HTMLInputElement).checked,
                }))
              }
              defaultChecked={timeFilters.future}
              checkedIcon={
                <CheckCircle
                  size={24}
                  color={PALETTE.PRIMARY_MAIN}
                  weight="fill"
                />
              }
            />
            <Typography sx={viewmaps_text}>Futuras</Typography>
            <MapPinSimple
              size={20}
              color={PALETTE.SECONDARY_MAIN}
              weight="duotone"
            />
          </Box>
        </Box>
        <Box sx={{ ...viewmaps_filterDivider, mt: 4 }}>Localização</Box>
        <Box sx={viewmaps_locationsList}>
          <FormControl fullWidth>
            <InputLabel id="ilha">Ilha</InputLabel>
            <Select
              labelId="ilha"
              id="ilha"
              value={ilha}
              label="Ilha"
              onChange={onIlhaChange}
              IconComponent={CaretDown}
            >
              {islands.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth disabled={!ilha}>
            <InputLabel id="concelho">Concelho</InputLabel>
            <Select
              labelId="concelho"
              id="concelho"
              value={concelho}
              label="Concelho"
              onChange={onConcelhoChange}
              IconComponent={CaretDown}
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
              {counties.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth disabled={!ilha || !concelho}>
            <InputLabel id="freguesia">Freguesia</InputLabel>
            <Select
              labelId="freguesia"
              id="freguesia"
              value={freguesia}
              label="Freguesia"
              onChange={onFreguesiaChange}
              IconComponent={CaretDown}
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
              {parishes.map((i, j) => (
                <MenuItem key={j} value={i.value}>
                  {i.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          sx={viewmaps_clearFiltersBtn}
          onClick={handleClickClearFilters}
          disabled={isClearButtonDisabled}
        >
          Limpar Localização
        </Button>
      </Box>
    </>
  );
};
