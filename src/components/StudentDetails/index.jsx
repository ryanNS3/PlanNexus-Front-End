import { useEffect, useState, useContext } from "react";
import { InputText } from "../Inputs/input-text/inputTextComp";
import useAxios from "../../hooks/useAxios";
// import { EmployeeContext } from "../../context/Employee";

export function StudentDetails({ student }) {
  const [nome, setNome] = useState(student.nome);
  const [cpf, setCpf] = useState(student.cpf);
  const [telefoneCelular, setTelefoneCelular] = useState(
    student.telefone_celular
  );
  const [email, setEmail] = useState(student.email);
  const [associado, setAssociado] = useState(student.associado);
  const [curso, setCurso] = useState(student.curso);

  const { requisicao } = useAxios();
  //   const handleSubmit = async () => {
  //     const success = await EditEmployee({
  //         Id: employee.NIF,
  //         NIF: editedEmployee.NIF,
  //         nome: editedEmployee.nome,
  //         email: editedEmployee.email,
  //         nivel_acesso: editedEmployee.nivel_acesso,
  //         foto: editedEmployee.foto
  //     });
  //     console.log(success)

  //     if (success) {
  //         setEditedEmployee(EmployeeData);
  //         console.log(EmployeeData)
  //     }
  // };

  async function handleSubmit() {
    const req = await requisicao(
      `${BASE_URL}${getEndpoint()}`,
      {
        nome,
        cpf,
        telefoneCelular,
        email,
        associado,
        curso,
      },
      "PATCH",
      {
        authorization: `bearer ${token}`,
        nif: user,
      }
    );
    // setData(req.res.data.response);
  }

  console.log("STUDENT", student);
  return (
    <div>
      <header className="flex items-center gap-6 pb-2 mb-6 border-b border-b-cinza-200">
        <div>
          <div className="h-18 w-18">
            <img
              src={
                data.foto ||
                `https://static.thenounproject.com/png/2932881-200.png`
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
            disabled
          />
          <InputText
            id="CPF"
            name="CPF:"
            placeholder={student.CPF}
            onChange={(e) => setCpf(e.target.value)}
            disabled
          />
          <InputText
            id="Telefone"
            name="Telefone:"
            placeholder={student.telefone_celular}
            onChange={(e) => setTelefoneCelular(e.target.value)}
            disabled
          />
          <InputText
            id="Email"
            name="Email:"
            placeholder={student.email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          {/* Nome, CPF, Telefone, Email */}
        </div>
      </div>

      <div className="mt-8">
        <p className='relative text-fun2 pl-2 mb-2 text-rosa-500 before:content-[""] before:h-full before:w-[3px] before:bg-rosa-destaque before:inline-block before:absolute before:left-0 before:rounded-full'>
          Informações de curso:
        </p>
        <div className="flex flex-wrap gap-4">
          <InputText
            id="Socio"
            name="Sócio AAPM:"
            placeholder={student.associado ? "Sim" : "Não"}
            onChange={(e) => setAssociado(e.target.value)}
            disabled
          />
          <InputText
            id="Curso"
            name="Curso:"
            placeholder={student.curso}
            onChange={(e) => setCurso(e.target.value)}
            disabled
          />
          {/* Sócio AAPM, Curso */}
        </div>
      </div>

      {/* <button>Salvar Alterações</button> */}
    </div>
  );
}
