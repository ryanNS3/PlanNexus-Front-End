import { Main } from "../../components/Main";
import { DonateChart, DonateChart2 } from "../../components/DonateChart";
import { DonateTab } from "../../components/DonateTab";
import React, { useContext, useState } from "react";
import BasicModal, { UniqueModal } from "../../components/Modal";
import { DonationForm } from "../../components/Form/donation";
import { studentContext } from "../../context/studentsContext";

export function Donate() {
  const [modal, setModalOpen] = useState(false)
  const {AllStudentData} = useContext(studentContext)


  return (
    <Main>
      <div className="grid grid-cols-[1fr_auto] mt-18 gap-6">
        <header>
        <h1 className="col-span-full text-h5">Visão geral</h1>
        {/* <VariableModal type='Basic' isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Fazer doação" > */}
        <UniqueModal componentForOpenModal={<button>teste</button>} isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Fazer doação" labelButton='fazer doação'>
          {}
        </UniqueModal>
        {/* </VariableModal> */}
        </header>
        <div className="grid grid-cols-2 gap-2">
          <DonateChart />
          <DonateChart2 />
        </div>
      </div>
      <div className="w-full flex mt-10">
        {/* <DonateTab /> */}
      </div>
    </Main>
  );
}
