import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import getCommercialization from "@/modules/lojas-e-agentes/services/getCommercialization";
import { CommercializationListProps } from "../components/Maps/types";
import { listIslands } from "@/util/listIslands";

interface CommercializationContextProps {
  commercialization: CommercializationListProps[];
  setCommercialization: Dispatch<SetStateAction<CommercializationListProps[]>>;
  originalCommercialization: CommercializationListProps[];
  fetchCommercialization: () => void;
  selectedIlha: string | null;
  setSelectedIlha: Dispatch<SetStateAction<string | null>>;
  mapCenter: [number, number] | null;
  setMapCenter: Dispatch<SetStateAction<[number, number] | null>>;
  zoomLevel: number;
  setZoomLevel: Dispatch<SetStateAction<number>>;
}

export const CommercializationContext =
  createContext<CommercializationContextProps>({
    commercialization: [],
    setCommercialization: () => {},
    originalCommercialization: [],
    fetchCommercialization: () => {},
    selectedIlha: null,
    setSelectedIlha: () => {},
    mapCenter: [38.54172662906514, -27.528777846296048],
    setMapCenter: () => {},
    zoomLevel: 7,
    setZoomLevel: () => {},
  } as CommercializationContextProps);

export const CommercializationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [commercialization, setCommercialization] = useState<
    CommercializationListProps[]
  >([]);
  const [originalCommercialization, setOriginalCommercialization] = useState<
    CommercializationListProps[]
  >([]);
  const [selectedIlha, setSelectedIlha] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(7);

  const fetchCommercialization = () => {
    if (commercialization.length == 0) {
      getCommercialization().then((response) => {
        setCommercialization(structuredClone(response));
        setOriginalCommercialization(structuredClone(response));
      });
    }
  };

  useEffect(() => {
    if (selectedIlha) {
      const selectedIsland = listIslands.find(
        (island) => island.nome === selectedIlha
      );
      if (selectedIsland) {
        setMapCenter([selectedIsland.latitude, selectedIsland.longitude]);
        setZoomLevel(selectedIsland.zoom); // Defina o nível de zoom desejado
      }
    } else {
      setMapCenter([38.54172662906514, -27.528777846296048]);
      setZoomLevel(7);
    }
  }, [selectedIlha]);

  return (
    <CommercializationContext.Provider
      value={{
        commercialization,
        setCommercialization,
        originalCommercialization,
        fetchCommercialization,
        selectedIlha,
        setSelectedIlha,
        mapCenter,
        setMapCenter,
        zoomLevel,
        setZoomLevel,
      }}
    >
      {children}
    </CommercializationContext.Provider>
  );
};
