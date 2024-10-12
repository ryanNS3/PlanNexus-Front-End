import React from "react";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import { useState } from "react";
import BasicModal, { ExtendModal, VariableModal } from "../Modal";
import { Filter } from "../../components/Filter";
import { PinkButton } from "../Buttons/pinkButton";

import { ProductContext } from "../../context/ProductContext";

export function TemplateView({
  name,
  role,
  formModal,
  children,
  loading,
  error,
  isExtendModalForm = false,
  header_data,
  gap
}) {
  const [isOpenModalForm, setIsOpenModalForm] = React.useState(false);
  const url = window.location;
  // vai precisar de alteração
  const errorText =
    url.pathname === "/gestao"
      ? "os alunos"
      : url.pathname === "/estoque"
      ? "os produtos"
      : "as doações";

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
      className=" w-full max-w-[74.188] min-w-[23.813rem]"
      aria-label="conteúdo principal na tela gestão"
    >
      <header className="flex justify-between my-4 col-span-12">
        <h1 className="text-h5">Todos os {name}: </h1>
        {!isExtendModalForm && (
          <BasicModal
            isOpenModal={isOpenModalForm}
            setIsOpenModal={setIsOpenModalForm}
            TextButton={`Adicionar ${name}`}
          >
            <h1 className=" text-h5 uppercase">Adicionar {name}</h1>
            {formModal}
          </BasicModal>
        )}

        {isExtendModalForm && (
          <ExtendModal
            TextButton={name}
            isOpenModal={isOpenModalForm}
            componentForOpenModal={<PinkButton text={`Adicionar ${name}`}/>}
          >
            {formModal}
          </ExtendModal>
        )}
      </header>

      {/* BARRA DE PESQUISA */}

      <form
        className="w-full flex align-center py-2 my-5 col-span-12"
        aria-label={`Pesquisar ${name}`}
      >
        <input
          className="w-full py-2 pl-10 pr-4 focus:outline-none border-2 focus:border-rosa-destaque border-cinza-100 rounded-lg"
          type="text"
          placeholder="pesquisar"
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
          <img
            className="w-4 h-4 absolute mt-5 transform -translate-y-1/2 -translate-x-11 right-3 cursor-pointer"
            src={ClearSvg}
            alt="Ícone de limpar"
            onClick={clearSearch}
          />
        )}

        <img
          src={SearchSvg}
          className="px-4 absolute transform mt-3 z-0"
          alt="ícone de pesquisa"
        />
        <Filter />
      </form>

      {/* HEADER DO TEMPLATE DE TABELAS */}
      <section
        className={`grid gap-${gap} col-start-1 col-end-12 border-b-2 border-[#CCCCCC] mb-6 p-4`}
        aria-label="informações principais sobre os usuários"
        style={{
          gridTemplateColumns: `67px 1fr repeat(${
            header_data.length + 1
          }, 100px)`,
        }}
      >
        <p></p>
        <p className="w-full text-fun2 text-cinza-700 m-auto">Nome</p>
        {header_data?.map((element) => (
          <p
            key={element}
            className="text-center text-fun2 text-cinza-700 m-auto"
          >
            {element}
          </p>
        ))}
        <p className="text-center text-fun2 text-cinza-700 m-auto">Ações</p> {/* A gente pode remover essa parte, uma vez que não tem mais os botões e as ações são abertas ao clicar em qualquer parte do container. Dessa maneira, podemos reduzir também o número de colunas do componente pai e dos <Line /> em um */}
      </section>
      <section className="flex flex-col col-span-10 gap-7 max-h-[50vh] overflow-scroll">
        {children}
        {loading && <p>Carregando, aguarde...</p>}
        {error && <p>Falha ao buscar {errorText}.</p>}
      </section>
    </main>
  );
}

export function LineTable({ name, photo, children, grid, typeModal="UniqueModal",detailsModal,configModal, gap="4" }) {

  return (
    <VariableModal
        configModal={configModal}
        type={typeModal} 
        componentForOpenModal={
          <div
          className={`relative rounded-lg  w-full py-[0.875rem] p-4 border-2 hover:border-cinza-200 border-cinza-100 bg-white grid items-center justify-items-center gap-${gap} `}
          style={{ gridTemplateColumns: grid }}
        >
          <div className="h-9 w-9 ">
            <img
              src={
                photo ||
                `https://static.thenounproject.com/png/2932881-200.png`
              }
              className="w-full h-full rounded"
            />
          </div>
          <p className="text-xs text-fun2 tracking-[0.01em] justify-self-start">
            {name}
          </p>
            {children}
        </div>

      }
    >

      {detailsModal}
     
    </VariableModal>
  );
}