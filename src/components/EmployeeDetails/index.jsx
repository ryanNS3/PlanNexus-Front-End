import { useEffect, useState, useContext } from 'react';
import { InputText } from '../Inputs/input-text/inputTextComp';
import { EmployeeContext } from "../../context/Employee";
import { PinkButton } from '../Buttons/pinkButton';

export function EmployeeDetails({ employee }) {
    const { EditEmployee, EmployeeData } = useContext(EmployeeContext);
    const [editedEmployee, setEditedEmployee] = useState(employee);

    console.log(employee)
    const editedData = [
        {
            "idFuncionario": employee.id_funcionario,
            "NIF": employee.NIF,
            "nome": employee.nome,
            "email": employee.email,
            "nivel_acesso": "3",
            "foto": "null"
        }
    ]

      const handleSubmit = async () => {
        const success = await EditEmployee(editedData);
        console.log(success)

        if (success) {
            setEditedEmployee(EmployeeData);
            console.log(EmployeeData)
        }
    };

    console.log(employee)
        return (
            <div>
                <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-cinza-300 flex items-center justify-center overflow-hidden '></div>
                    <div>
                        <p className='text-h5'>{employee.nome}</p>
                        <p className='text-cp2'>{employee.nome_cargo}</p>
                    </div>
                </div>
                
                
                <p className='text-rosa-500 text-fun2 border-l-2 border-rosa-500 pl-1 mb-4'>Informações pessoais:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Nome" name="Nome:" placeholder={employee.nome} disabled/>
                    <InputText id="NIF" name="NIF:" placeholder={employee.NIF} disabled/>
                    <InputText id="Email" name="Email:" placeholder={employee.email} disabled/>
                </div>

                <p className='text-rosa-500 text-fun2 border-l-2 border-rosa-500 pl-1 my-4'>Informações de cargo:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Nome" name="Cargo:" placeholder={employee.nome_cargo} disabled/>
                </div>

                <div className='flex gap-4 mt-20'>
                    <PinkButton type='secondary' text='Desabilitar perfil' action={handleSubmit}/>
                    <PinkButton text='Restaurar senha'/>
                </div>
            </div>
        );
    
}
