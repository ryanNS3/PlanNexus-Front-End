import React from "react";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import { useState } from "react";
import BasicModal, { ExtendModal } from "../Modal";
import { Filter } from "../../components/Filter";
import { UniqueModal } from "../Modal";
import { EmployeeDetails } from "./../EmployeeDetails/index";
import useAxios from "../../hooks/useAxios";
import { StudentDetails } from "../StudentDetails";
import { PinkButton } from "../Buttons/pinkButton";

export function TemplateView({
  name,
  role,
  type,
  formModal,
  isOpenModal,
  setIsOpenModal,
  isExtendModal = false,
  header_data,
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

  const getEndpoint = () => {
    switch (type) {
      case "students":
        return "/aluno/todos";

      case "employees":
        return "/funcionario/todos";

      case "products":
        return "/produto/todos";

      default:
        return null; // ou algum valor padrão caso nenhum tipo corresponda
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  let isModal = formModal;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const { requisicao, loading, erro } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [data, setData] = React.useState([]);

  async function getData() {
    const req = await requisicao(`${BASE_URL}${getEndpoint()}`, null, "GET", {
      authorization: `bearer ${token}`,
      nif: user,
    });
    setData(req.res.data.response);
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <main
      className=" w-full p-2 max-w-[74.188] min-w-[23.813rem]"
      aria-label="conteúdo principal na tela gestão"
    >
      <header className="flex justify-between my-4 col-span-12">
        <h1 className="text-h5">Todos os {name}: </h1>
        {!isExtendModal && (
          <BasicModal
            isOpenModal={isOpenModalForm}
            setIsOpenModal={setIsOpenModalForm}
            TextButton={`Adicionar ${name}`}
          >
            <h1 className=" text-h5">Adicionar {name}</h1>
            {formModal}
          </BasicModal>
        )}

        {isExtendModal && (
          <ExtendModal
            TextButton={name}
            isOpenModal={isOpenModalForm}
            setIsOpenModal={setIsOpenModalForm}
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
        className={`grid gap-4 col-start-1 col-end-12 border-b-2 border-[#CCCCCC] mb-6 p-4`}
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
        <p className="text-center text-fun2 text-cinza-700 m-auto">Ações</p>
      </section>
      <section className="flex flex-col col-span-10 gap-7">
        {/* <LineTable
          grid={`67px 1fr repeat(${header_data.length + 1}, 100px)`}
          isNew
        /> */}

        {data &&
          data.map((item) => (
            <>
              <LineTable
                grid={`67px 1fr repeat(${header_data.length + 1}, 100px)`}
                type={type}
                data={item}
              />
            </>
          ))}
        {loading && <p>Carregando, aguarde...</p>}
        {erro && <p>Falha ao buscar {errorText}.</p>}
      </section>
    </main>
  );
}

function LineTable({ data, grid, isNew, type }) {
  return (
    <>
      <div
        className="relative rounded-lg w-full py-[0.875rem] p-4 border-2 border-cinza-100 bg-white grid items-center justify-items-center gap-4 "
        style={{ gridTemplateColumns: grid }}
      >
        <div className="h-9 w-9 ">
          <img
            src={
              data.foto ||
              `https://static.thenounproject.com/png/2932881-200.png`
            }
            className="rounded-full w-full h-full"
          />
        </div>
        <p className="text-xs text-fun2 tracking-[0.01em] justify-self-start">
          {data.nome}
        </p>

        {type === "students" && (
          <>
            <div className="bg-[#64B140] rounded px-4 py-2">
              <p className="text-[#fff]">{data.associado ? "Sim" : "Não"}</p>
            </div>

            <UniqueModal>
              <StudentDetails student={data} />
            </UniqueModal>
          </>
        )}

        {type === "employees" && (
          <>
            <div className="bg-[#4B5645] rounded px-4 py-2">
              <p className="text-[#fff]">{data.nome_cargo}</p>
            </div>

            <div
              className={`bg-[${
                data.status ? "#64B140" : "#666666"
              }] rounded px-4 py-2`}
            >
              <p className="text-[#fff]">{data.status ? "Ativo" : "Inativo"}</p>
            </div>

            <UniqueModal>
              <EmployeeDetails employee={data}/>
            </UniqueModal>
          </>
        )}

        {type === "products" && (
          <>
            <p className="text-fun2">data.alerta</p>{" "}
            {/* Adicionar lógica sobre o alerta aqui */}
            <p className="text-fun2">{data.qtd_estoque}</p>
            <UniqueModal>
              {/* ADICIONAR O MODAL DE PRODUTOS AQUI */}
            </UniqueModal>
          </>
        )}

        {isNew && (
          <div className="absolute top-[-12.5px] left-2 px-2 py-1 bg-[#A9DDE9] text-ct3 rounded">
            Novo
          </div>
        )}
      </div>
    </>
  );
}
