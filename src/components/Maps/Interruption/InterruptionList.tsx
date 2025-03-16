import { FC, useContext } from "react";
import { Box } from "@mui/material";
import { InterruptionContext } from "@/contexts/InterruptionContext";

import { viewmaps_list } from "../styles";
import { InterruptionItem } from "./InterruptionItem";

interface IInterruptionList {
  islandId?: string;
  countyId?: string;
  parishId?: string;
}
export const InterruptionList: FC<IInterruptionList> = ({
  islandId,
  countyId,
  parishId,
}) => {
  const { powerInterruption } = useContext(InterruptionContext);

  return (
    <Box sx={viewmaps_list}>
      {powerInterruption.map((item, index) => {
        if (
          islandId &&
          ((item.coordinates?.length ?? 0) == 0 ||
            // @ts-ignore
            item.coordinates[0].islandId != islandId)
        ) {
          return undefined;
        }

        if (
          countyId &&
          ((item.coordinates?.length ?? 0) == 0 ||
            // @ts-ignore
            item.coordinates[0].countyId != countyId)
        ) {
          return undefined;
        }

        if (
          parishId &&
          ((item.coordinates?.length ?? 0) == 0 ||
            // @ts-ignore
            item.coordinates[0].parishId != parishId)
        ) {
          return undefined;
        }

        return (
          <InterruptionItem
            key={index}
            title={item.title}
            place={item.place}
            beginDate={item.beginDate}
            endDate={item.endDate}
            street={item.street}
            interruptionTimes={item.interruptionTimes}
            interruptionReason={item.interruptionReason}
          />
        );
      })}
    </Box>
  );
};
