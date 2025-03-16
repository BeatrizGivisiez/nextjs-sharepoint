"use client";

import { RichText, Tabs } from "@/components";
import { TabsRichTextDto } from "@/dtos/TabsRichTextDto";
import { tabsrichtext_box, tabsrichtext_spacing } from "@/styles/TabsRichText";
import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";

interface TabsRichTextGlobalProps {
  tabsRichText: TabsRichTextDto[];
}

export const TabsRichText_Global = ({
  tabsRichText,
}: TabsRichTextGlobalProps) => {
  return (
    <>
      {tabsRichText.length !== 0 && (
        <Tabs idTabs={tabsRichText} isId={false}>
          <Box sx={tabsrichtext_spacing}>
            {tabsRichText.map((tab, index) => (
              <Box sx={tabsrichtext_box} key={index}>
                <TabPanel value={tab.value}>
                  <RichText richText={tab.richText} />
                </TabPanel>
              </Box>
            ))}
          </Box>
        </Tabs>
      )}
    </>
  );
};
