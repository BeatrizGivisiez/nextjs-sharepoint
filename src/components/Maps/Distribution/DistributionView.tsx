"use client";

import dynamic from "next/dynamic";
import { ChangeEvent, useContext, useEffect, useState } from "react";

import { DistributionContext } from "@/contexts/DistributionContext";
import { Box, Container } from "@mui/material";

import { ButtonMaps } from "../ButtonMaps";
import {
  viewmaps_list,
  viewmaps_map,
  viewmaps_none,
  viewmaps_row,
  viewmaps_stacker,
} from "../styles";
import { DistributionForm } from "./DistributionForm";
import { DistributionList } from "./DistributionList";

const DistributionLeaflet = dynamic(() => import("./DistributionLeaflet"), {
  ssr: false,
});
export const DistributionView = (props: any) => {
  const [activeButton, setActiveButton] = useState(1);
  const { distribution, fetchDistribution } = useContext(DistributionContext);

  useEffect(() => {
    fetchDistribution();
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
          <DistributionForm />
        </ButtonMaps>
        <Box
          sx={{
            ...viewmaps_row,
            alignItems: "flex-start",
            pt: "30px",
          }}
        >
          <Box sx={viewmaps_none}>
            <DistributionForm />
          </Box>
          {activeButton == 1 ? (
            <Box sx={viewmaps_map}>
              <DistributionLeaflet />
            </Box>
          ) : (
            <Box sx={viewmaps_list}>
              {distribution.map((item, index) => (
                <DistributionList
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
