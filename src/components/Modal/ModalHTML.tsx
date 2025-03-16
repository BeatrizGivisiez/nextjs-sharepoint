import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { X } from "@phosphor-icons/react";

export const ModalHTML = ({ open, onClose, title, fileSrc }: any) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false}
      sx={{
        "& .MuiDialog-paper": {
          maxWidth: "1065px",
          width: "100%",
        },
      }}
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <X />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <iframe
          src={fileSrc}
          style={{ width: "100%", height: "80vh", border: "none" }}
          title="External Content"
        />
      </DialogContent>
    </Dialog>
  );
};
