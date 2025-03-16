import { useEffect, useState } from "react";

import {
  paperanexodownload,
  paperanexodownload_box,
  paperanexodownload_container,
} from "@/styles/PaperAnexoDownload";
import { TabPanel } from "@mui/lab";
import { Box, Container } from "@mui/material";

import { Tabs } from "../Tabs/Tabs";
import { TreeFiles } from "./TreeFiles";
import { PaperAnexoDownloadGlobalProps } from "./types";

const PaperAnexoDownload_Global = ({
  hasTabsPAD,
  documentLibrary,
}: PaperAnexoDownloadGlobalProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const initialVisibleItems = documentLibrary.map(() => 6);
    setVisibleItems(initialVisibleItems);
  }, [documentLibrary]);

  return (
    <>
      {hasTabsPAD && (
        <Box sx={paperanexodownload}>
          <Box sx={paperanexodownload_box}>
            {documentLibrary.length !== 0 && (
              <Tabs idTabs={documentLibrary} isId={false}>
                {documentLibrary.map((tab, index) => (
                  <TabPanel key={index} value={tab.value ?? ""}>
                    <Box
                      sx={{
                        ...paperanexodownload_container,
                        minHeight: "500px",
                      }}
                    >
                      <TreeFiles
                        data={tab.document}
                        value={tab.value}
                        visibleItems={visibleItems[index]}
                      />
                    </Box>
                  </TabPanel>
                ))}
              </Tabs>
            )}
            {documentLibrary.length === 0 && (
              <>
                {documentLibrary.map((tab, index) => (
                  <Box sx={paperanexodownload_container} key={index}>
                    <TreeFiles data={tab.document} value={tab.value} />
                  </Box>
                ))}
              </>
            )}
          </Box>
        </Box>
      )}
      {!hasTabsPAD && (
        <Container sx={{py:"40px"}}>
          {documentLibrary.length !== 0 && (
            <>
              {documentLibrary.map((tab, index) => (
                <Box sx={paperanexodownload_container} key={index}>
                  <TreeFiles data={tab.document} value={tab.value} />
                </Box>
              ))}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default PaperAnexoDownload_Global;
