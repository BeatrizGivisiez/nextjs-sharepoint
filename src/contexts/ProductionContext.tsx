import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import getProduction from "@/modules/(eda)/o-que-fazemos/producao-de-energia/services/getProduction";

import { ProductionListProps } from "../components/Maps/types";
import {
  thermoelectric,
  windPark,
  geothermal,
  hydroelectric,
  photovoltaic,
} from "@/util/listRadioMaps";

interface IProductionFilters {
  [thermoelectric]: boolean;
  [windPark]: boolean;
  [geothermal]: boolean;
  [hydroelectric]: boolean;
  [photovoltaic]: boolean;
}

interface ProductionContextProps {
  production: ProductionListProps[];
  setProduction: Dispatch<SetStateAction<ProductionListProps[]>>;
  originalProduction: ProductionListProps[];
  fetchProduction: () => void;
  filters: IProductionFilters;
  setFilters: Dispatch<SetStateAction<IProductionFilters>>;
}

export const ProductionContext = createContext<ProductionContextProps>({
  production: [],
  setProduction: () => {},
  originalProduction: [],
  fetchProduction: () => {},
  filters: {} as IProductionFilters,
  setFilters: () => {},
} as ProductionContextProps);

export const ProductionProvider = ({ children }: { children: ReactNode }) => {
  const [production, setProduction] = useState<ProductionListProps[]>([]);
  const [originalProduction, setOriginalProduction] = useState<
    ProductionListProps[]
  >([]);

  const [filters, setFilters] = useState<IProductionFilters>({
    [thermoelectric]: true,
    [windPark]: true,
    [geothermal]: true,
    [hydroelectric]: true,
    [photovoltaic]: true,
  });

  const fetchProduction = () => {
    if (production.length == 0) {
      getProduction().then((response) => {
        setProduction(structuredClone(response));
        setOriginalProduction(structuredClone(response));
      });
    }
  };

  return (
    <ProductionContext.Provider
      value={{
        production,
        setProduction,
        fetchProduction,
        originalProduction,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductionContext.Provider>
  );
};
