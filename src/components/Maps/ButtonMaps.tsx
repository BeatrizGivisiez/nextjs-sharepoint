"use client";

import { useContext, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Funnel, MapTrifold, Rows, X } from "@phosphor-icons/react";

import {
  viewmaps_buttonSeeList,
  viewmaps_buttonSeeListMobile,
  viewmaps_buttonSeeMap,
  viewmaps_buttonSeeMapMobile,
  viewmaps_buttonsRow,
  viewmaps_filterTitle,
  viewmaps_text,
} from "./styles";
import { ButtonMapsProps } from "./types";
import { CommercializationContext } from "@/contexts/CommercializationContext";

export const ButtonMaps = ({
  activeButton,
  onButtonClick,
  children,
  filters,
  handleUpdateCheckbox,
  handleClearFilters,
}: ButtonMapsProps) => {
  const { selectedIlha } = useContext(CommercializationContext);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const isFunnel = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={viewmaps_buttonsRow}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={viewmaps_filterTitle}>Filtros</Typography>
        {isFunnel && (
          <IconButton onClick={handleOpen}>
            <Funnel size={24} color={PALETTE.BLACK} />
          </IconButton>
        )}
      </Box>

      {isMobile ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              ...viewmaps_buttonSeeMap,
              backgroundColor:
                activeButton == 1 ? PALETTE.PRIMARY_MAIN : PALETTE.WHITE,
            }}
            onClick={() => onButtonClick(1)}
            startIcon={<MapTrifold size={24} color={PALETTE.BLACK} />}
          >
            <Typography sx={viewmaps_text}>Ver mapa</Typography>
          </Button>
          <Button
            sx={{
              ...viewmaps_buttonSeeList,
              backgroundColor:
                activeButton == 2 ? PALETTE.PRIMARY_MAIN : PALETTE.WHITE,
            }}
            onClick={() => onButtonClick(2)}
            startIcon={<Rows size={24} color={PALETTE.BLACK} />}
            disabled={!!selectedIlha}
          >
            <Typography sx={viewmaps_text}>Ver listagem</Typography>
          </Button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              ...viewmaps_buttonSeeMapMobile,
              backgroundColor:
                activeButton == 1 ? PALETTE.PRIMARY_MAIN : PALETTE.WHITE,
            }}
            onClick={() => onButtonClick(1)}
          >
            <MapTrifold size={24} color={PALETTE.BLACK} />
          </Button>
          <Button
            sx={{
              ...viewmaps_buttonSeeListMobile,
              backgroundColor:
                activeButton == 2 ? PALETTE.PRIMARY_MAIN : PALETTE.WHITE,
            }}
            onClick={() => onButtonClick(2)}
            disabled={!!selectedIlha}
          >
            <Rows size={24} color={PALETTE.BLACK} />
          </Button>
        </Box>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            backgroundColor: PALETTE.WHITE,
          }}
        >
          <Box sx={{ display: "flex", flexFlow: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexFlow: "row",
                borderBottom: `2px solid ${PALETTE.GRAY_400}`,
                pb: "20px",
                mb: "20px",
              }}
            >
              <Typography sx={{ ...viewmaps_filterTitle, pl: 4, pt: 4 }}>
                Filtros
              </Typography>
              <IconButton
                sx={{ position: "absolute", top: 8, right: 8 }}
                onClick={handleClose}
              >
                <X size={24} />
              </IconButton>
            </Box>
            <Box sx={{ p: 4 }}>{children}</Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
