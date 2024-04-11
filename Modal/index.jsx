import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const modalStyle = {
  display: 'flex',
  width: "100%",
  padding: "",
  backdropFilter: "blur(10px)",
  transition: "0.6s",
  
};

const InnerModal = {
  width: "100%",
  display: 'flex',
  padding: "2.5rem",
  justifyContent: "end"
    
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
          <div className=" w-full h[90%]  md:w-2/4 duration-500 animate-modalAnimation -translate-x-8  bg-branco rounded-2xl justify-end items-end">
            <Button onClick={handleClose}>X</Button>
            <main className="">
              {children}
            </main>

          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
