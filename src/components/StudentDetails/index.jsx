import { useEffect, useState, useContext } from 'react';
import { InputText } from '../Inputs/input-text/inputTextComp';
// import { EmployeeContext } from "../../context/Employee";

export function StudentDetails({ student }) {
    // const { EditEmployee, EmployeeData } = useContext(EmployeeContext);
    // const [editedEmployee, setEditedEmployee] = useState(employee);

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

    console.log("STUDENT", student)
        return (
            <div>
                {/* <p>{employee.nome}</p> */}
                {/* <p>{employee.nome_cargo}</p> */}
                <p className='text-fun2 text-rosa-500 pl-1 before:content-["Funcionaaaaa"] before:h-5 before:w-5 '>Informações pessoais:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Nome" name="Nome:" placeholder={student.nome} disabled/>
                    <InputText id="CPF" name="CPF:" placeholder={student.CPF} disabled/>
                    <InputText id="Telefone" name="Telefone:" placeholder={student.telefone_celular} disabled/>
                    <InputText id="Email" name="Email:" placeholder={student.email} disabled/>
                    {/* Nome, CPF, Telefone, Email */}
                </div>

                <p>Informações de curso:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Socio" name="Sócio AAPM:" placeholder={student.associado ? "Sim" : "Não"} disabled/>
                    {/* Sócio AAPM, Curso */}
                </div>

                <button >Salvar Alterações</button>
            </div>
        );
    
}
