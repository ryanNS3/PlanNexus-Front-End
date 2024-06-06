import { useEffect, useState, useContext } from "react";

import axios from "axios";
import { useCookies } from "../../hooks/useCookies";
import { StudentContext } from "../../context/studentsContext";

import { InputText } from "../Inputs/input-text/inputTextComp";
import { PinkButton } from "../Buttons/pinkButton";

export function StudentDetails({ student }) {
  const [nome, setNome] = useState(student.nome);
  const [cpf, setCpf] = useState(student.CPF);
  const [telefone, setTelefone] = useState(student.telefone_fixo);
  const [celular, setCelular] = useState(student.telefone_celular);
  const [email, setEmail] = useState(student.email);
  const [associado, setAssociado] = useState(student.associado);
  const [curso, setCurso] = useState(student.curso);
  const [courseData, setCourseData] = useState();

  const BASE_URL = import.meta.env.VITE_API_URL;
  const [userString, setUserString] = useCookies("user", null);
  const user = userString === "null" ? null : userString;
  const [tokenString, setTokenString] = useCookies("token", null);
  const token = tokenString === "null" ? null : tokenString;

  const { mutatePatchStudents } = useContext(StudentContext);

  useEffect(() => {
    async function courses() {
      const req = await axios.get(`${BASE_URL}/turma/todos`, {
        headers: {
          authorization: `bearer ${token}`,
          nif: user,
        },
      });
      setCourseData(req.data.response);
    }

    courses();
  }, []);

  const handleSubmit = async () => {
    mutatePatchStudents.mutate({
      idAluno: `${student.id_aluno}`,
      CPF: cpf,
      nome: nome,
      email: email,
      fk_curso: curso,
      socioAapm: `${!!associado}`,
      telefone: telefone,
      celular: celular,
    });
  };

  return (
    <div className="pb-8">
      <header className="flex items-center gap-6 pb-2 mb-6 border-b border-b-cinza-200">
        <div>
          <div className="h-18 w-18">
            <img
              src={
                student.foto ||
                "https://static.thenounproject.com/png/2932881-200.png"
              }
              className="rounded-full w-full h-full"
            />
          </div>
        </div>

        <div>
          <p className="text-h5">{student.nome}</p>
          <p className="text-ct2">{student.curso}</p>
        </div>
      </header>

      <div>
        <p className='relative text-fun2 pl-2 mb-2 text-rosa-500 before:content-[""] before:h-full before:w-[3px] before:bg-rosa-destaque before:inline-block before:absolute before:left-0 before:rounded-full'>
          Informações pessoais:
        </p>
        <div className="flex flex-wrap gap-4">
          <InputText
            id="Nome"
            name="Nome:"
            placeholder={student.nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputText
            id="CPF"
            name="CPF:"
            placeholder={student.CPF}
            onChange={(e) => setCpf(e.target.value)}
          />
          <InputText
            id="Telefone"
            name="Telefone:"
            placeholder={student.telefone_fixo}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <InputText
            id="Celular"
            name="Celular:"
            placeholder={student.telefone_celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <InputText
            id="Email"
            name="Email:"
            placeholder={student.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Nome, CPF, Telefone, Email */}
        </div>
      </div>

      <div className="mt-8 mb-8">
        <p className='relative text-fun2 pl-2 mb-2 text-rosa-500 before:content-[""] before:h-full before:w-[3px] before:bg-rosa-destaque before:inline-block before:absolute before:left-0 before:rounded-full'>
          Informações de curso:
        </p>

        <div className="flex flex-wrap flex-col gap-4">
          <h4 className="text-fun2 text-cinza-700">Sócio AAPM:</h4>
          <div className="flex gap-2">
            <label
              htmlFor="socioTrue"
              className="flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3 cursor-pointer"
            >
              <input
                type="radio"
                name="socioTrue"
                id="socioTrue"
                checked={!!associado}
                onClick={() => setAssociado(true)}
              />
              Sim
            </label>

            <label
              htmlFor="socioFalse"
              className="flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3 cursor-pointer"
            >
              <input
                type="radio"
                name="socioFalse"
                id="socioFalse"
                checked={!associado}
                onClick={() => setAssociado(false)}
              />
              Não
            </label>
          </div>

          <h4 className="text-fun2 text-cinza-700">
            Curso atual: <span className="uppercase">{student.curso}</span>
            <span className="block">Novo curso:</span>
          </h4>
          <select
            name="curso"
            id="curso"
            className="border-2 border-cinza-100 rounded-lg text-ct-2 w-full p-5 mb-4"
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value=""></option>
            {courseData &&
              courseData.map((course) => (
                <option value={course.id_curso}>{course.nome}</option>
              ))}
          </select>
          {/* Sócio AAPM, Curso */}
        </div>
      </div>

      <div className="flex justify-end">
        <PinkButton text="Atualizar" action={handleSubmit} loading={mutatePatchStudents.isLoading} />
      </div>
    </div>
  );
}
