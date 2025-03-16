import React, { useEffect, useState } from "react";

import { GalleryLeaflets, Tabs } from "@/components";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import {
  galleryleaflets,
  galleryleaflets_box,
  galleryleaflets_noTabsGrid,
  galleryleaflets_spacing,
} from "@/styles/GalleryLeaflets";
import { TabPanel } from "@mui/lab";
import {
  Box,
  CircularProgress,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { SeeMoreButton } from "../ButtonActionIcon/ButtonActionIcon";

export const GalleryLeaflets_Global = ({
  leaflets,
  hasTabs,
  loading,
}: {
  leaflets: GalleryLeafletsResponse[] | undefined;
  hasTabs: boolean;
  loading: boolean;
}) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [visibleItemsNoTabs, setVisibleItemsNoTabs] = useState<number[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (leaflets) {
      setVisibleItems(new Array(leaflets.length).fill(8));
      setVisibleItemsNoTabs([8]);
    }
  }, [leaflets]);

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setCurrentTab(newTab);
    setVisibleItems((prev) => {
      const newVisibleItems = [...prev];
      newVisibleItems[newTab] = 8;
      return newVisibleItems;
    });
    setVisibleItemsNoTabs([8]);
  };

  const showMore = (index: number) => {
    setVisibleItems((prev) => {
      const newVisibleItems = [...prev];
      newVisibleItems[index] = Math.min(
        newVisibleItems[index] + 8,
        leaflets![index]?.galleryDocs?.length || 0
      );
      return newVisibleItems;
    });
  };

  const showMoreNoTabs = () => {
    setVisibleItemsNoTabs((prev) => {
      const newVisibleItemsNoTabs = [...prev];
      newVisibleItemsNoTabs[0] = Math.min(
        newVisibleItemsNoTabs[0] + 8,
        leaflets![0]?.galleryDocs?.length || 0
      );
      return newVisibleItemsNoTabs;
    });
  };

  if (loading || leaflets === undefined) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={hasTabs ? galleryleaflets : galleryleaflets_noTabsGrid}>
        {hasTabs ? (
          <Tabs
            idTabs={leaflets}
            isId={false}
            tabOpen={currentTab}
            onChange={handleTabChange}
          >
            <Box sx={galleryleaflets_spacing}>
              {leaflets.map((tab, index) => (
                <Box sx={galleryleaflets_box} key={index}>
                  <TabPanel value={tab.value}>
                    {tab.galleryDocs
                      ?.slice(0, visibleItems[index] || 0)
                      .map((doc, docIndex) => (
                        <GalleryLeaflets
                          key={docIndex}
                          photo={doc.photo}
                          title={doc.title}
                          description={doc.description}
                          isBackground={true}
                          file={doc.file}
                        />
                      ))}
                    {visibleItems[index] < (tab.galleryDocs?.length || 0) && (
                      <SeeMoreButton
                        onClick={() => showMore(index)}
                        isLargeScreen={isLargeScreen}
                      />
                    )}
                  </TabPanel>
                </Box>
              ))}
            </Box>
          </Tabs>
        ) : (
          leaflets[0]?.galleryDocs
            ?.slice(0, visibleItemsNoTabs[0] || 0)
            .map((doc, docIndex) => (
              <GalleryLeaflets
                key={docIndex}
                photo={doc.photo}
                title={doc.title}
                description={doc.description}
                isBackground={true}
                file={doc.file}
              />
            ))
        )}
        {!hasTabs &&
          visibleItemsNoTabs[0] < (leaflets[0]?.galleryDocs?.length || 0) && (
            <SeeMoreButton
              onClick={showMoreNoTabs}
              isLargeScreen={isLargeScreen}
            />
          )}
      </Box>
    </Container>
  );
};
