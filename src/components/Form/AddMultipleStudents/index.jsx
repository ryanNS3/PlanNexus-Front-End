import React from "react";

import { StudentContext } from "../../../context/studentsContext";

import { Check, Close } from "../../../assets/Check";
import { PinkButton } from "../../Buttons/pinkButton";

export function AddMultipleStudents() {
  const [alunosFile, setAlunosFile] = React.useState();
  const [response, setResponse] = React.useState();

  const { mutatePostStudents } = React.useContext(StudentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutatePostStudents.mutate(alunosFile);
    if (mutatePostStudents.data) {
      setResponse(mutatePostStudents.data);
    }
  };

  // React.useEffect(() => {
  //   if (mutatePostStudents.data) {
  //     setResponse(mutatePostStudents.data);
  //   }
  // }, [mutatePostStudents.data]);

  if (response) {
    return (
      <>
        <p className="text-sub1">Pré Visualização:</p>
        <div>
          <header className="flex justify-between px-16 py-4 border-b-2 border-b-cinza-200">
            <p className="text-fun2">Nome</p>
            <p className="text-fun2">Status</p>
          </header>
          <div className="py-5 flex flex-col gap-5">
            {response.res.data.response.alunosCadastrados?.map((aluno) => (
              <>
                <Line nome={aluno.aluno.nome} status={aluno.status} />
              </>
            ))}
            {response.res.data.response.alunosNaoCadastrados?.map((aluno) => (
              <>
                <Line nome={aluno.aluno.nome} status={aluno.status} />
              </>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="mt-10">
      <p className="text-sub1 text-cinza-950 mb-6">Método de cadastro:</p>
      <label
        htmlFor="alunosFile"
        className="flex flex-col gap-4 items-center justify-center py-6 px-14 w-full h-full border-4 border-cinza-200 rounded-lg mb-6"
      >
        <svg
          width="62"
          height="58"
          viewBox="0 0 62 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3505_8772)">
            <path
              d="M38.9302 27.5502L14.4186 23.2002V55.3424C14.4186 56.8102 15.6019 58.0002 17.0615 58.0002H59.3571C60.8167 58.0002 62 56.8102 62 55.3424V43.5002L38.9302 27.5502Z"
              fill="#185C37"
            />
            <path
              d="M38.9302 0H17.0615C15.6019 0 14.4186 1.18995 14.4186 2.65784V14.5L38.9302 29L51.907 33.35L62 29V14.5L38.9302 0Z"
              fill="#21A366"
            />
            <path d="M14.4186 14.5H38.9302V29H14.4186V14.5Z" fill="#107C41" />
            <path
              opacity="0.1"
              d="M31.9617 11.5996H14.4186V47.8496H31.9617C33.4194 47.8448 34.5999 46.6577 34.6047 45.1918V14.2575C34.5999 12.7916 33.4194 11.6044 31.9617 11.5996Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M30.5199 13.0498H14.4186V49.2998H30.5199C31.9775 49.295 33.1581 48.1079 33.1628 46.642V15.7076C33.1581 14.2417 31.9775 13.0546 30.5199 13.0498Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M30.5199 13.0498H14.4186V46.3998H30.5199C31.9775 46.395 33.1581 45.2079 33.1628 43.742V15.7076C33.1581 14.2417 31.9775 13.0546 30.5199 13.0498Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M29.078 13.0498H14.4186V46.3998H29.078C30.5357 46.395 31.7162 45.2079 31.7209 43.742V15.7076C31.7162 14.2417 30.5357 13.0546 29.078 13.0498Z"
              fill="black"
            />
            <path
              d="M2.64292 13.0498H29.078C30.5376 13.0498 31.7209 14.2398 31.7209 15.7076V42.2919C31.7209 43.7598 30.5376 44.9498 29.078 44.9498H2.64292C1.18327 44.9498 0 43.7599 0 42.292V15.7076C0 14.2398 1.18327 13.0498 2.64292 13.0498Z"
              fill="url(#paint0_linear_3505_8772)"
            />
            <path
              d="M8.18544 37.639L13.7452 28.9753L8.65116 20.3594H12.7489L15.5288 25.8694C15.7855 26.3928 15.9614 26.7814 16.0566 27.0381H16.0926C16.2752 26.6205 16.4675 26.215 16.6693 25.8215L19.641 20.3623H23.4028L18.1789 28.9274L23.5355 37.639H19.5329L16.3219 31.5911C16.1706 31.3338 16.0423 31.0635 15.9383 30.7834H15.8908C15.7967 31.0578 15.6719 31.3205 15.5188 31.5664L12.2126 37.639H8.18544Z"
              fill="white"
            />
            <path
              d="M59.3571 0H38.9302V14.5H62V2.65784C62 1.18995 60.8167 0 59.3571 0Z"
              fill="#33C481"
            />
            <path d="M38.9302 29H62V43.5H38.9302V29Z" fill="#107C41" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3505_8772"
              x1="5.51057"
              y1="10.973"
              x2="26.3856"
              y2="46.9248"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#18884F" />
              <stop offset="0.5" stop-color="#117E43" />
              <stop offset="1" stop-color="#0B6631" />
            </linearGradient>
            <clipPath id="clip0_3505_8772">
              <rect width="62" height="58" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-sub2 text-center">
          Arraste o arquivo ou clique aqui
        </span>
      </label>
      <input
        className="hidden"
        id="alunosFile"
        name="alunosFile"
        type="file"
        onChange={(event) => setAlunosFile(event.target.files[0])}
        accept=".xlsx"
      />

      {alunosFile && (
        <div className="flex justify-end">
          <PinkButton
            text="Cadastrar alunos"
            action={handleSubmit}
            loading={mutatePostStudents.isPending}
          />
        </div>
      )}
    </div>
  );
}

function Line({ nome, status, foto }) {
  return (
    <div className="p-4 flex items-center justify-between shadow-[0_4px_8px_0_rgba(227,227,227,1)] rounded">
      <div className="flex items-center gap-5">
        <img
          src={`https://static.thenounproject.com/png/2932881-200.png`}
          alt=""
          className="h-6 w-6"
        />
        <p className="text-ct3">{nome}</p>
      </div>
      <div
        className={`flex items-center justify-center gap-3 px-3 py-[0.25rem] ${
          status === "cadastrado" ? "bg-[#346C32]" : "bg-[#700707]"
        } rounded text-branco text-ct3 font-bold capitalize w-44`}
      >
        {status === "cadastrado" ? <Check /> : <Close />}
        {status === "cadastrado" ? "Cadastrado" : "Não Cadastrado"}
      </div>
    </div>
  );
}
