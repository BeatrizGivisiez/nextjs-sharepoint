"use client";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";

import { ProductionContext } from "@/contexts/ProductionContext";
import { Box, Container } from "@mui/material";

import { ButtonMaps } from "../ButtonMaps";
import {
  viewmaps_list,
  viewmaps_map,
  viewmaps_none,
  viewmaps_row,
  viewmaps_stacker,
} from "../styles";
import { ProductionForm } from "./ProductionForm";
import { ProductionList } from "./ProductionList";

const ProductionLeaflet = dynamic(() => import("./ProductionLeaflet"), {
  ssr: false,
});
export const ProductionView = (props: any) => {
  const [activeButton, setActiveButton] = useState(1);
  const { production, fetchProduction } = useContext(ProductionContext);

  useEffect(() => {
    fetchProduction();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <Container>
      <Box sx={viewmaps_stacker}>
        <ButtonMaps
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        >
          <ProductionForm />
        </ButtonMaps>
        <Box
          sx={{
            ...viewmaps_row,
            alignItems: "flex-start",
            pt: "30px",
          }}
        >
          <Box sx={viewmaps_none}>
            <ProductionForm />
          </Box>
          {activeButton == 1 ? (
            <Box sx={viewmaps_map}>
              <ProductionLeaflet />
            </Box>
          ) : (
            <Box sx={viewmaps_list}>
              {production.map((item, index) => (
                <ProductionList
                  key={index}
                  title={item.title}
                  comments={item.comments}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};
