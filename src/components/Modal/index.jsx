import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const modalStyle = {
  display: 'flex',
  width: "100%",
  backdropFilter: "blur(10px)",
  transition: "0.6s"
  
};

const InnerModal = {
  padding: "2rem"
}

export default function BasicModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className=" w-2/4 h-3/4 my-4 -translate-x-8 duration-500  bg-branco rounded-2xl absolute right-0 items-end">
            <Button onClick={handleClose}>X</Button>

          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
