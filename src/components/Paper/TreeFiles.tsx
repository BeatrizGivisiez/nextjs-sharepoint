"use client";

import { useEffect, useRef, useState } from "react";

import theme from "@/app/theme/themes";
import { Alert, Box, Typography, useMediaQuery } from "@mui/material";
import { ArrowLeft } from "@phosphor-icons/react";

import { PaperPathFile } from "../";
import { SeeMoreButton } from "../ButtonActionIcon/ButtonActionIcon";
import { IFile } from "./types";

export const TreeFiles = (props: any) => {
  const [items, setItems] = useState<Array<IFile>>([]);
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(6);
  const historyPath = useRef<Array<Array<IFile>>>([]);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    setItems(props.data);
    return () => {};
  }, [props]);

  const handleOnClick = (item: IFile) => {
    historyPath.current.push(items);
    setItems(item?.document ?? []);
    setVisibleItemsCount(6);
  };

  const handleComeBack = () => {
    const parentFolder = historyPath.current.pop();
    setItems(parentFolder ?? []);
    setVisibleItemsCount(6);
  };

  const handleShowMore = () => {
    setVisibleItemsCount(visibleItemsCount + 6);
  };

  return (
    <>
      {historyPath.current.length != 0 && (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              flexDirection: "row",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleComeBack}
          >
            <ArrowLeft size={20} weight="bold" />
            <Typography>Voltar atrás</Typography>
          </Box>
        </Box>
      )}
      <>
        {items?.slice(0, visibleItemsCount).map((item, itemIndex) => (
          <PaperPathFile
            key={itemIndex}
            file={{
              date: item?.document ? item.document[0]?.date : undefined,
              titleFiles: item?.titleFiles ?? "",
              idFiles: item?.idFiles ?? item.value,
              value: props.value,
              ...item,
            }}
            handleClick={() => handleOnClick(item)}
          />
        ))}

       

        {items?.length > visibleItemsCount && (
          <SeeMoreButton
            onClick={handleShowMore}
            isLargeScreen={isLargeScreen}
          />
        )}
      </>
    </>
  );
};
