import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "../../assets/Close";
import { PinkButton } from "../Buttons/pinkButton";
import { modalContext } from "../../context/modalContext";

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
  padding: " 1.5rem",
  justifyContent: "end"
    
}

export default function BasicModal({ children, TextButton }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const {isOpenModal, setIsOpenModal} = React.useContext(modalContext)

  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };

  return (
    <>
      <PinkButton action={handleOpen} text={TextButton} size="big"/>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10 md:w-1/2 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton}/>
            </button>
            <main className="w-full h-full">
              {children}
            </main>
          </div>
          
        </Box>
      </Modal>
    </>
  );
}
