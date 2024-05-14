import { useEffect, useState, useContext } from 'react';
import { InputText } from '../Inputs/input-text/inputTextComp';
import { EmployeeContext } from "../../context/Employee";

export function EmployeeDetails({ employee }) {
    const { EditEmployee, EmployeeData } = useContext(EmployeeContext);
    const [editedEmployee, setEditedEmployee] = useState(employee);

      const handleSubmit = async () => {
        const success = await EditEmployee({
            Id: employee.NIF,
            NIF: editedEmployee.NIF,
            nome: editedEmployee.nome,
            email: editedEmployee.email,
            nivel_acesso: editedEmployee.nivel_acesso,
            foto: editedEmployee.foto
        });
        console.log(success)

        if (success) {
            setEditedEmployee(EmployeeData);
            console.log(EmployeeData)
        }
    };

    console.log(employee)
        return (
            <div>
                <p>{employee.nome}</p>
                <p>{employee.nome_cargo}</p>
                <p>Informações pessoais:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Nome" name="Nome:" placeholder={employee.nome} disabled/>
                    <InputText id="NIF" name="NIF:" placeholder={employee.NIF} disabled/>
                    <InputText id="Email" name="Email:" placeholder={employee.email} disabled/>
                </div>

                <p>Informações de cargo:</p>
                <div className='flex flex-wrap gap-4'>
                    <InputText id="Nome" name="Cargo:" placeholder={employee.nome_cargo} disabled/>
                </div>

                <button onClick={handleSubmit}>Salvar Alterações</button>
            </div>
        );
    
}
