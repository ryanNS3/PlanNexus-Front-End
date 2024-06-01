import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "../../assets/Close";
import { PinkButton } from "../Buttons/pinkButton";
import { useMedia } from "../../hooks/useMedia";
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

export function VariableModal({ type, children, componentForOpenModal, configModal }) {
  function renderModal() {
    switch (type) {
      case "Basic": {
        return <BasicModal>{ children}</BasicModal>
      } 
      case "UniqueModal": {
        return <UniqueModal componentForOpenModal={componentForOpenModal}>{ children}</UniqueModal>
      } 
      case "ExtendModal": {
        return <ExtendModal isExtend={configModal?.isExtend} setIsExtend={configModal?.setIsExtend} componentForOpenModal={componentForOpenModal}>{ children}</ExtendModal>
      } 
      
    }
    
  }
  return (
    <div>
      {renderModal()}
    </div>
  )
}

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
          <div className="flex flex-col gap-4 w-full h[90%] py-10 px-10 md:w-1/2 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl items-end overflow-y-auto" style={{scrollbarWidth: "none"}}>
            <button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
              <Close isHover={isHoverButton} />
            </button>
            <main className="w-full h-max overflow-y-scroll">
              {children}
            </main>
          </div>

        </Box>
      </Modal>
    </>
  );
}

export function UniqueModal({ children, setSelectedId, selectedId, componentForOpenModal }) {
  const [isHoverButton, setIsHoverButton] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  const handleOpen = (selectedId) => {
    // setSelectedId(selectedId);
    setIsOpenModal(true);
  };

  const handleClose = () => {
    // setIsHoverButton(false)
    setIsOpenModal(false)
  };
  
  return (
    <>
      <div className="" onClick={() => handleOpen(selectedId)}>
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


export function ExtendModal({ children, onCloseCallBack, isExtend = true, setIsExtend, componentForOpenModal }) {
  const [matches] = useMedia("(max-width: 900px)");
  const [extendResponsive, setExtendResponsive] = React.useState(isExtend);
  
  React.useEffect(() => {
    if (matches) {
      setExtendResponsive(true);
    } else {
      setExtendResponsive(isExtend);
    }
  }, [matches, isExtend]);

  const [isHoverButton, setIsHoverButton] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    setIsHoverButton(false);
    setIsOpenModal(false);
    setIsExtend(false);
    onCloseCallBack();
  };

  return (
    <>
      <div onClick={handleOpen}>
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
          <div className={`flex flex-col gap-4 ${extendResponsive ? "w-full" : "w-1/2"} max-h-[100%] overflow-y-hidden py-10 px-10 translate-x-10 opacity-0 duration-500 animate-modalAnimation bg-branco rounded-2xl`}>
            <div className="flex justify-end w-full">
              <button aria-label="sair" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
                <Close isHover={isHoverButton} />
              </button>
            </div>
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

  const handleOpen = () => {
    setIsOpenModal(true);
  }

  const handleClose = () => {
    setIsHoverButton(false)
    setIsOpenModal(false)
  };

  return (
    <>
      <div onClick={handleOpen}>{Button}</div>
      
      <Modal
        open={isOpenModal}
        sx={modalStyle}>
        <Box sx={InnerModal}>
          <div className="flex w-full h-full flex-col overflow-y-auto sm:flex-row gap-2" >
            <div className="flex w-full sm:w-full duration-500 rounded-2xl ">
              <main className="flex w-full h-full">
                {contentOne}
              </main>
            </div>

            <div className="flex flex-col pt-10 px-10 sm:w-1/2 duration-500 animate-modalAnimation bg-branco rounded-2xl " style={{ scrollbarWidth: "none" }}>
              <button className="flex self-end" onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} onClick={handleClose}>
                <Close isHover={isHoverButton} />
              </button>
              <main className="flex w-full h-full">
                {contentDuo}
              </main>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}