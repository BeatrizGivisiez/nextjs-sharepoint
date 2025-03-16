import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import getPowerInterruption from "@/modules/(clientes)/interrupcoes-de-energia/services/getPowerInterruption";

import { InterruptionListProps } from "../components/Maps/types";

interface IInterruptionFilters {
  present: boolean;
  future: boolean;
}

interface InterruptionContextProps {
  powerInterruption: InterruptionListProps[];
  originalPowerInterruption: InterruptionListProps[];
  setPowerInterruption: Dispatch<SetStateAction<InterruptionListProps[]>>;
  fetchInterruption: () => void;
  filters: IInterruptionFilters;
  setFilters: Dispatch<SetStateAction<IInterruptionFilters>>;
}

export const InterruptionContext = createContext<InterruptionContextProps>({
  powerInterruption: [],
  originalPowerInterruption: [],
  setPowerInterruption: () => {},
  fetchInterruption: () => {},
  filters: {} as IInterruptionFilters,
  setFilters: () => {},
} as InterruptionContextProps);

export const InterruptionProvider = ({ children }: { children: ReactNode }) => {
  const [powerInterruption, setPowerInterruption] = useState<
    InterruptionListProps[]
  >([]);
  const [originalPowerInterruption, setOriginalPowerInterruption] = useState<
    InterruptionListProps[]
  >([]);

  const [filters, setFilters] = useState<IInterruptionFilters>({
    present: true,
    future: true,
  });

  const fetchInterruption = () => {
    if (powerInterruption.length == 0) {
      getPowerInterruption().then((response) => {
        setPowerInterruption(structuredClone(response));
        setOriginalPowerInterruption(structuredClone(response));
      });
    }
  };

  return (
    <InterruptionContext.Provider
      value={{
        powerInterruption,
        setPowerInterruption,
        fetchInterruption,
        originalPowerInterruption,
        filters,
        setFilters,
      }}
    >
      {children}
    </InterruptionContext.Provider>
  );
};
