import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "../../assets/Close";
import { PinkButton } from "../Buttons/pinkButton";
import { modalContext } from "../../context/modalContext";
import { iconButton } from "@material-tailwind/react";

const modalStyle = {
  display: "flex",
  width: "100%",
  padding: "",
  backdropFilter: "blur(10px)",
  transition: "0.6s",
};

const InnerModal = {
  display: 'flex',
  width: "100%",
  padding: " 1.5rem",
  justifyContent: "end",
};

export default function BasicModal({ children, TextButton, labelButton, Button, isOpenModal, setIsOpenModal }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };
  
  return (
    <>
      <PinkButton aria-label={labelButton}  action={handleOpen} text={TextButton} size="big"/>
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



export function ExtendModal({children, TextButton, isOpenModal, setIsOpenModal}){
  
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false);
    setIsOpenModal(false);
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
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10  translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button aria-label="sair" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
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

export function DuoModal({contentOne, contentDuo, TextButton, isOpenModal, setIsOpenModal}){
  
  const [isHoverButton, setIsHoverButton] = React.useState(false)

  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };
  
  return (
    <>
      <PinkButton action={handleOpen} text={TextButton} size="big" />
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10  translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton}/>
            </button>
            <main className="w-full h-full">
              {contentOne}
            </main>
            <main className="w-full h-full">
              {contentDuo}
            </main>
          </div>
        </Box>
      </Modal>
    </>
  );
  
}

export function ModalOptions({ children, Button, isOpenModal, setIsOpenModal }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };

  return (
    <>
      <button onClick={handleOpen}>{Button}</button>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10 md:w-1/2 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton}/>
            </button>
            <main className="flex w-full h-full">
              {children}
            </main>
          </div>
          
        </Box>
      </Modal>
    </>
  );
}

