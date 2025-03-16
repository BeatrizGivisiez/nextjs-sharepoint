import { PALETTE } from "@/app/theme/styles/constantes";
import { Box } from "@mui/material";
import { Minus, Plus } from "@phosphor-icons/react";

import { footericon } from "./styles";

export const FooterIcon = () => {
  return (
    <Box sx={footericon}>
      <Box className="expandIconWrapper">
        <Minus size={20} color={PALETTE.PRIMARY_MAIN} />
      </Box>
      <Box className="collapsIconWrapper">
        <Plus size={20} color={PALETTE.WHITE} />
      </Box>
    </Box>
  );
};
