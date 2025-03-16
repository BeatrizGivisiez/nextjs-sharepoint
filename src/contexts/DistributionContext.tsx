import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import getDistribution from "@/modules/(regulacao)/qualidade-de-servico/indicadores-de-qualidade-da-onda-de-tensao/services/getDistribution";

import { DistributionListProps } from "../components/Maps/types";
import { subStation, station } from "@/util/listRadioMaps";

interface IDistributionFilters {
  [subStation]: boolean;
  [station]: boolean;
}
interface DistributionContextProps {
  distribution: DistributionListProps[];
  setDistribution: Dispatch<SetStateAction<DistributionListProps[]>>;
  originalDistribution: DistributionListProps[];
  fetchDistribution: () => void;
  filters: IDistributionFilters;
  setFilters: Dispatch<SetStateAction<IDistributionFilters>>;
}

export const DistributionContext = createContext<DistributionContextProps>({
  distribution: [],
  setDistribution: () => {},
  originalDistribution: [],
  fetchDistribution: () => {},
  filters: {} as IDistributionFilters,
  setFilters: () => {},
} as DistributionContextProps);

export const DistributionProvider = ({ children }: { children: ReactNode }) => {
  const [distribution, setDistribution] = useState<DistributionListProps[]>([]);
  const [originalDistribution, setOriginalDistribution] = useState<
    DistributionListProps[]
  >([]);
  const [filters, setFilters] = useState<IDistributionFilters>({
    [subStation]: true,
    [station]: true,
  });

  const fetchDistribution = () => {
    if (distribution.length == 0) {
      getDistribution().then((response) => {
        setDistribution(structuredClone(response));
        setOriginalDistribution(structuredClone(response));
      });
    }
  };

  return (
    <DistributionContext.Provider
      value={{
        distribution,
        setDistribution,
        fetchDistribution,
        originalDistribution,
        filters,
        setFilters,
      }}
    >
      {children}
    </DistributionContext.Provider>
  );
};
