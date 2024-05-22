import { LineTable } from "../LineTable";
import React from "react";
import { PinkButton } from "../Buttons/pinkButton";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import { useState } from "react";
import BasicModal, { ExtendModal } from "../Modal";
import { Filter } from "../../components/Filter";
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { SearchBar } from "../searchBar";

export function TemplateViewTab({
  name,
  role,
  formModal,
  isExtendModal = false,
  dadosLineTbale,
}) {
  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false);
  const url = window.location;
  // vai precisar de alteração
  const statusUser = url.pathname === "/doacao/" ? "AAPM" : "Status";

  const [searchTerm, setSearchTerm] = useState("");
  let isModal = formModal;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main
      className="grid w-full p-2 max-w-[74.188rem] min-w-[23.813rem]"
      aria-label="conteúdo principal na tela gestão"
    >
      <div className="flex align-center col-start-1 col-end-12">
        <SearchBar />
        <Filter />
      </div>
      {/* HEADER DO TEMPLATE DE TABELAS */}
      <section
        className="flex justify-between col-start-1 col-end-12 border-b-2 border-[#CCCCCC] mb-2"
        aria-label="informações principais sobre os usuários"
      >
        <p className="mx-14 px-1 fun-2 text-cinza-700">Nome</p>
        <div className="flex justify-between">
          {/*role só vai ser aplicado para a tab de funcionário */}
          <p className="mx-5 px-8 fun-2 text-cinza-700">{role}</p>
          <p className="mx-5 px-8 fun-2 text-cinza-700">Valor</p>
          <p className="text-center mx-5 px-4 fun-2 text-cinza-700">Ações</p>
        </div>
      </section>
      <section className="flex flex-col col-span-10 gap-2">
        <LineTable />
      </section>
    </main>
  );
}
