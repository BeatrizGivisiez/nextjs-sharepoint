import { ChangeEvent } from "react";

import { SelectChangeEvent } from "@mui/material";

export interface ButtonMapsProps {
  activeButton: number;
  onButtonClick: (activeButton: number) => void;
  children: React.ReactNode;
  filters?: { [key: string]: boolean };
  handleUpdateCheckbox?: (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleClearFilters?: () => void;
}
export interface ISelect {
  key: string;
  value: string;
}
export interface CoordinateMapsProps {
  latitude?: string;
  longitude?: string;
  parishId?: string;
  countyId?: string;
  islandId?: string;
  title?: string;
  locationId?: string;
  locationName?: string;
}
export interface CategoryMapsProps {
  id?: string;
  childTerms?: string[] | null | undefined;
  name?: string;
}

export interface LocationMapsProps {
  id?: string;
  childTerms?: string[] | null | undefined;
  name?: string;
}

//INTERRUPTION PROPS
export interface InterruptionFormProps {
  ilha: string;
  concelho: string;
  freguesia: string;
  onClearFilters: () => void;
  onIlhaChange: (event: SelectChangeEvent) => void;
  onConcelhoChange: (event: SelectChangeEvent) => void;
  onFreguesiaChange: (event: SelectChangeEvent) => void;
  filters?: { [key: string]: boolean };
  handleUpdateCheckbox?: (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}
export interface InterruptionListProps {
  beginDate: string;
  coordinates?: CoordinateMapsProps[] | undefined;
  endDate: string;
  interruptionReason: string;
  interruptionTimes: string;
  interruptionType?: string;
  location?: LocationMapsProps[];
  place: string | null;
  processed?: boolean;
  street: string | null;
  title?: string;
}
export interface InterruptionPopupProps {
  beginDate: string;
  coordinates?: CoordinateMapsProps | undefined;
  endDate: string;
  interruptionReason: string;
  interruptionTimes: string;
  interruptionType?: string;
  location?: LocationMapsProps[];
  place: string | null;
  processed?: boolean;
  street: string | null;
  title?: string;
}

//COMMERCIALIZATION PROPS
export interface CommercializationFormProps {
  ilha: string;
  onIlhaChange: (event: SelectChangeEvent<string>) => void;
  filters: {
    "Agente de Cobrança": boolean;
    "Centro de Energia": boolean;
    "Loja EDA": boolean;
    RIAC: boolean;
  };
  onClearFilters: () => void;
  handleUpdateCheckbox: (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  activeButton?: number;
}
export interface CommercializationListProps {
  title?: string;
  comments?: string;
  coordinates?: CoordinateMapsProps | undefined;
  category?: CategoryMapsProps;
  attachment?: string;
}
export interface CommercializationItem {
  key: string;
  value: string;
  type: string;
  beginDate: string;
  endDate: string;
}
export interface ProductionFormProps {
  windFarm?: string;
  powerStation?: string;
  hydroelectriPowerStation?: string;
  geothermalPlant?: string;
  photovoltaicPlant?: string;
}
export interface ProductionListProps {
  title?: string;
  comments?: string;
  coordinates?: CoordinateMapsProps[] | undefined;
  category?: CategoryMapsProps;
  attachment?: string;
}
export interface ProductionPopupProps {
  title?: string;
  comments?: string | null;
  coordinates?: CoordinateMapsProps | undefined;
  category?: CategoryMapsProps[];
  attachment?: string | null;
}

//DISCTRIBUTION PROPS
export interface DistributionListProps {
  title?: string;
  comments?: string;
  coordinates?: CoordinateMapsProps | undefined;
  category?: CategoryMapsProps;
  attachment?: string;
}
