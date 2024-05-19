import { useState, useContext } from 'react';
import { EditableInput } from '../Inputs/input-text/inputTextComp';
import { EmployeeContext } from "../../context/Employee";
import { PinkButton } from '../Buttons/pinkButton';
import { toastifyContext } from '../../context/toastifyContext';
import { modalContext } from '../../context/modalContext';

export function EmployeeDetails({ employee }) {
  const { EditEmployee } = useContext(EmployeeContext);
  const { Notification } = useContext(toastifyContext);
  const { setIsOpenModal } = useContext(modalContext);

  const [editedEmployee, setEditedEmployee] = useState(employee);
  const [originalEmployee, setOriginalEmployee] = useState(employee);
  const [isEditing, setIsEditing] = useState({
    nome: false,
    NIF: false,
    email: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleCancel = () => {
    setEditedEmployee(originalEmployee);
    setIsEditing({
      nome: false,
      NIF: false,
      email: false
    });
  };

  const handleSubmit = async () => {
    const editedData = {
      idFuncionario: String(editedEmployee.id_funcionario),
      NIF: editedEmployee.NIF,
      nome: editedEmployee.nome,
      email: editedEmployee.email,
      nivel_acesso: "3",
      foto: null
    };

    console.log('Edited Data:', editedData);

    const success = await EditEmployee(editedData);

    if (success) {
        console.log(editedEmployee)
      setIsOpenModal(false);
      Notification("sucess", "Funcionário atualizado com sucesso");
    } else {
        console.log(editedEmployee)
      setIsOpenModal(true);
      Notification("error", "Falha ao atualizar funcionário");
    }
  };

  const isAnyFieldEditing = Object.values(isEditing).some(value => value);

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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <EditableInput
          id="nome"
          name="nome"
          value={editedEmployee.nome}
          onChange={handleInputChange}
          placeholder={employee.nome}
          disabled={!isEditing.nome}
          onEditClick={() => handleEditClick('nome')}
          isEditable
        />
        <EditableInput
          id="NIF"
          name="NIF"
          value={editedEmployee.NIF}
          onChange={handleInputChange}
          placeholder={employee.NIF}
          disabled={!isEditing.NIF}
          onEditClick={() => handleEditClick('NIF')}
          isEditable
        />
        <EditableInput
          id="email"
          name="email"
          value={editedEmployee.email}
          onChange={handleInputChange}
          placeholder={employee.email}
          disabled={!isEditing.email}
          onEditClick={() => handleEditClick('email')}
          isEditable
        />
      </div>

      <p className='text-rosa-500 text-fun2 border-l-2 border-rosa-500 pl-1 my-4'>Informações de cargo:</p>
      <div className='grid grid-cols-1 gap-4'>
        <EditableInput
          id="cargo"
          name="cargo"
          placeholder={employee.nome_cargo}
          disabled
        />
      </div>

      <div className='flex gap-4 mt-20 justify-end'>
      {isAnyFieldEditing ? (
          <>
            <PinkButton text='Cancelar' type='secondary' action={handleCancel} />
            <PinkButton text='Confirmar' action={handleSubmit} />
          </>
        ) : (
          <>
            <PinkButton type='secondary' text='Desabilitar perfil' />
            <PinkButton text='Restaurar senha' />
          </>
        )}
      </div>
    </div>
  );
}
