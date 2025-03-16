"use client";
import { StaticImageData } from "next/image";
import { useMemo, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import { tabsPosts_button } from "@/styles/GalleryLeaflets";
import { TabContext } from "@mui/lab";
import { Box, Button, Container, Tab, Tabs as MuiTabs } from "@mui/material";
import { ArrowDown } from "@phosphor-icons/react";

import { tabs_title, tabsPosts_content, tabsPosts_wrapper } from "./style";
import { tabsCollapseItem_tabs } from "./styles";
import { TabsPostsProps, TabsProps } from "./types";

export interface TabData {
  value: string;
  tabsLabel: string;
}

export const Tabs = ({
  idTabs,
  isId,
  children,
  tabOpen = 0,
  onChange,
}: TabsProps) => {
  const [value, setValue] = useState(idTabs[tabOpen].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    const newIndex = idTabs.findIndex((tab: TabData) => tab.value === newValue);
    onChange?.(event, newIndex);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Container
        sx={{
          my: 3,
        }}
      >
        <TabContext value={value}>
          <MuiTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs"
            TabIndicatorProps={{ children: <span /> }}
            sx={tabsCollapseItem_tabs}
          >
            {idTabs.map((tab: TabData) => (
              <Tab
                key={tab.value}
                sx={tabs_title}
                label={isId ? `${tab.value} ${tab.tabsLabel}` : tab.tabsLabel}
                value={tab.value}
              />
            ))}
          </MuiTabs>
          {children}
        </TabContext>
      </Container>
    </Box>
  );
};

export const TabsPosts = ({ postsList }: TabsPostsProps) => {
  const [posts] = useState(postsList);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(8);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);

  const showMore = () => {
    if (numberOfitemsShown + 8 <= posts.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 8);
      setIsButtonVisible(true);
    } else {
      setNumberOfItemsToShown(posts.length);
      setIsButtonVisible(false);
    }
  };

  const itemsToShow = useMemo(() => {
    return posts.slice(0, numberOfitemsShown).map(
      (
        post: {
          img: StaticImageData;
          imgAlt: string;
          postTitle: string;
          postSubtitle: string;
        },
        index: React.Key | null | undefined
      ) => <></>
    );
  }, [posts, numberOfitemsShown]);

  return (
    <Box sx={tabsPosts_wrapper}>
      <Box sx={tabsPosts_content}>
        {itemsToShow.length ? itemsToShow : "Loading..."}
      </Box>
      {isButtonVisible == true ? (
        <Button
          sx={tabsPosts_button}
          onClick={showMore}
          variant="contained"
          endIcon={
            <ArrowDown weight="regular" size={22} color={PALETTE.BLACK} />
          }
        >
          {"Carregar mais publicações"}
        </Button>
      ) : null}
    </Box>
  );
};
