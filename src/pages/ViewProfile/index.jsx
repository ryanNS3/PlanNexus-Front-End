import React, {useContext, useState} from 'react';
import { InputText } from '../../components/Inputs/input-text/inputTextComp';
import { UserGlobal } from '../../context/userContext';

export function Profile() {
    const { userData } = useContext(UserGlobal);
    const defaultPhoto = "https://static.thenounproject.com/png/2932881-200.png";

  return (
    <div>
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-12 h-12 rounded-full bg-cinza-50 flex items-center justify-center overflow-hidden '>
            <img
                src={userData.foto || defaultPhoto}
                alt="Foto do usuário"
                className='w-full h-full object-cover'
          />
        </div>
        <div>
          <p className='text-h5'>{userData.nome}</p>
          <p className='text-cp2'>{userData.nome_cargo}</p>
        </div>
      </div>

      <p className='text-rosa-500 text-fun2 border-l-2 border-rosa-500 pl-1 mb-4'>Informações pessoais:</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <InputText id='Nome' name='Nome' placeholder={userData.nome} disabled/>
        <InputText id='NIF' name='NIF' placeholder={userData.NIF} disabled/>
        <InputText id='Email' name='Email' placeholder={userData.email} disabled/>
      </div>

      <p className='text-rosa-500 text-fun2 border-l-2 border-rosa-500 pl-1 my-4'>Informações de cargo:</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
       <InputText id='Cargo' name='Cargo' placeholder={userData.nome_cargo} disabled/>
      </div>
    </div>
  );
}
