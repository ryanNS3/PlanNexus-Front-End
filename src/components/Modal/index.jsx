import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "../../assets/Close";
import { CalendarioIcon } from "../../assets/Calendario";
import { PinkButton } from "../Buttons/pinkButton";

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

export default function BasicModal({ children, TextButton }) {
  const [open, setOpen] = React.useState(false);
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setIsHoverButton(false)
    setOpen(false)
  };

  return (
    <div>
      <PinkButton action={handleOpen} text={TextButton}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-14 px-10 md:w-2/5 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco      rounded-2xl justify-end items-end">
            <button className="self end-0" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton}/>
            </button>
            <main className="w-full h-full">
              {children}
            </main>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
