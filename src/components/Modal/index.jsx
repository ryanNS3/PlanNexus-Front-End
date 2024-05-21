import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "../../assets/Close";
import { PinkButton } from "../Buttons/pinkButton";
import { modalContext } from "../../context/modalContext";
import { iconButton } from "@material-tailwind/react";
import zIndex from "@mui/material/styles/zIndex";

const modalStyle = {
  display: "flex",
  width: "100%",
  padding: "",
  backdropFilter: "blur(10px)",
  transition: "0.6s",
};

const modalStyleDuo = {
  display: "flex",
  padding: "",
  transition: "0.6s",
};

const InnerModal = {
  display: 'flex',
  width: "100%",
  padding: " 1.5rem",
  justifyContent: "end",
  zIndex: 10,
};

const InnerModalDuo = {
  display: 'flex',
  width: "100%",
  padding: " 1.5rem",
  justifyContent: "start",
  zIndex: 10,
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
      <PinkButton aria-label={labelButton} action={handleOpen} text={TextButton} size="big" />
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
              <Close isHover={isHoverButton} />
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

export function UniqueModal({ children, setSelectedId, selectedId }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  const handleOpen = (selectedId) => {
    setSelectedId(selectedId);
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };
  
  return (
    <>
      <button className="flex gap-1 cursor-pointer p-2 hover:bg-cinza-100 rounded" onClick={() => handleOpen(selectedId)}>
        <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
        <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
        <div className="rounded-full bg-cinza-400 height w-2 h-2"></div>
      </button>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10 md:w-1/2 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end overflow-y-scroll">
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


export function ExtendModal({ children, TextButton,isExtend=true,componentForOpenModal }) {

  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false);
    setIsOpenModal(false);
  };

  return (
    <> 
      <div onClick={handleOpen} >
        {componentForOpenModal}
      </div>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className={`flex flex-col gap-4 ${ isExtend ? "w-full" : "w-1/2" } max-h-[100%] overflow-y-hidden py-10 px-10  translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end`}>
            <button aria-label="sair" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton} />
            </button>
            <>
              {children}
            </>
          </div>          
        </Box>
      </Modal>
    </>
  );
  
}

export function FlexibleModal({ children, TextButton, isOpenModal, setIsOpenModal }){
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false);
    setIsOpenModal(false);
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
          <div className={`flex flex-col gap-4 w-full max-h-[100%] overflow-y-hidden py-10 px-10  translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end`}>
            <button aria-label="sair" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton} />
            </button>
            <>
              {children}
            </>
          </div>          
        </Box>
      </Modal>
    </>
  );

}

export function DuoModal({ contentOne, contentDuo, TextButton, isOpenModal, setIsOpenModal }) {

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
              <Close isHover={isHoverButton} />
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

export function ModalOptions({ children, Button }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const handleOpen = () => {
    setIsOpenModal(true)
  };

  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };



  return (
    <>
      <div onClick={handleOpen}>{Button}</div>
      <Modal
        open={isOpenModal}
        onClose={handleClose}
        sx={modalStyle}
      >
        <Box sx={InnerModal}>
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10 md:w-1/2 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton} />
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

export function DuoModalOptions({ contentOne, contentDuo, Button }) {

  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenModalDuo, setIsOpenModalDuo] = React.useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
    setIsOpenModalDuo(true);
  }

  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
    setIsOpenModalDuo(false)
  };

  return (
    <>
      <div onClick={handleOpen}>{Button}</div>
      <Modal
        open={isOpenModal}
        sx={modalStyle}>
        <Box sx={InnerModal}>
          <div className="flex w-2/4 duration-500 rounded-2xl ">
            <main className="flex h-full">
              {contentOne}
            </main>
          </div>

          <div className="flex flex-col gap-4 w-5/12 py-10 px-10 md:w-1/2 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end">
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton} />
            </button>
            <main className="flex w-full h-full">
              {contentDuo}
            </main>
          </div>
        </Box>
      </Modal>


    </>
  );
}