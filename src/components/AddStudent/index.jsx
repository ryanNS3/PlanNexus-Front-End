import React from 'react';
import { PinkButton } from '../Buttons/pinkButton';
import { InputText } from '../Inputs/input-text/inputTextComp';
import useAxios from '../../hooks/useAxios';

export function AddStudent() {
  const steps = [
    'Informações pessoais',
    'Informações de curso',
    'Pré-visualização',
  ];

  const [name, setName] = React.useState(null);
  const [cpf, setCpf] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [secondEmail, setSecondEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [secondPhone, setSecondPhone] = React.useState();
  const [course, setCourse] = React.useState(
    'Análise e Desenvolvimento de Sistemas'
  );
  const [fic, setFic] = React.useState(false);
  const [partner, setPartner] = React.useState(false);

  // Multi-Step Form
  const [currentStep, setCurrentStep] = React.useState(1);
  function setStep(step) {
    setCurrentStep(step);
  }

  // Consumo da API - POST (cadastrar/adicionar alunos)
  const { requisicao, loading } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      CPF: cpf,
      nome: name,
      email: email,
      fk_curso: '1',
      socioAapm: partner,
      telefone: phone,
      celular: '000000000',
    };

    const req = await requisicao(
      `${BASE_URL}/aluno/cadastro/unico`,
      data,
      'POST',
      {
        authorization: `bearer ${token}`,
        nif: user,
      }
    );

    console.log(req);
  };

  return (
    <>
      <div className='pb-5'>
        <nav className='mb-9'>
          <ul className='flex justify-between'>
            {steps?.map((step, index) => (
              <React.Fragment key={index}>
                <li
                  key={index}
                  className='flex flex-col items-center cursor-pointer gap-2'
                  onClick={() =>
                    name && cpf && email && phone ? setStep(index + 1) : null
                  }
                >
                  <div
                    className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${
                      currentStep == index + 1
                        ? 'bg-rosa-300 text-rosa-50'
                        : 'bg-[#D9D9D9] text-cinza-700'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`block ${
                      currentStep == index + 1 ? 'text-preto' : 'text-cinza-500'
                    } text-fun2 max-w-28 text-center`}
                  >
                    {step}
                  </span>
                </li>

                {index != steps.length - 1 ? (
                  <div className='w-screen h-[2px] bg-cinza-300 mt-[21px]'></div>
                ) : null}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <form onSubmit={handleSubmit}>
          <Step
            currentStep={currentStep}
            step={1}
          >
            <div className='flex flex-col gap-6'>
              <InputText
                id='name'
                type='text'
                name='Nome Completo'
                placeholder='ex:marlene'
                onChange={(e) => setName(e.target.value)}
                value={name ? name : ''}
              />
              <InputText
                id='cpf'
                type='text'
                name='CPF'
                placeholder='ex:000.000.000-00'
                onChange={(e) => setCpf(e.target.value)}
                value={cpf ? cpf : ''}
              />
              <InputText
                id='email'
                type='email'
                name='Email'
                placeholder='ex:marlene@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                value={email ? email : ''}
              />
              <InputText
                id='phone'
                type='text'
                name='phone'
                placeholder='ex: 55 11 9999999'
                onChange={(e) => setPhone(e.target.value)}
                value={phone ? phone : ''}
              />

              <div className='flex justify-end mt-8'>
                <PinkButton
                  text='Continuar'
                  action={() =>
                    name && cpf && email && phone
                      ? setCurrentStep(currentStep + 1)
                      : null
                  }
                  typeButton="button"
                />
              </div>
            </div>
          </Step>

          <Step
            currentStep={currentStep}
            step={2}
          >
            <h4 className='text-fun2 text-cinza-700'>Curso:</h4>
            <select
              name='curso'
              id='curso'
              className='border-2 border-cinza-100 rounded-lg text-ct-2 w-full p-5'
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value='Análise e Desenvolvimento de Sistemas'>
                Análise e Desenvolvimento de Sistemas
              </option>
              <option value='Análise e Desenvolvimento de Sistemas'>
                Mecânica de Precisão
              </option>
              <option value='Análise e Desenvolvimento de Sistemas'>
                Qualidade
              </option>
            </select>

            <h4 className='text-fun2 text-cinza-700'>Sócio AAPM:</h4>
            <div className='flex gap-2'>
              <label
                htmlFor='socioTrue'
                className='flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3'
              >
                <input
                  type='radio'
                  name='socioTrue'
                  id='socioTrue'
                  checked={partner === true}
                  onClick={() => setPartner(true)}
                />
                Sim
              </label>

              <label
                htmlFor='socioFalse'
                className='flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3'
              >
                <input
                  type='radio'
                  name='socioFalse'
                  id='socioFalse'
                  checked={partner === false}
                  onClick={() => setPartner(false)}
                />
                Não
              </label>
            </div>

            <h4 className='text-fun2 text-cinza-700'>FIC:</h4>
            <div className='flex gap-2'>
              <label
                htmlFor='ficTrue'
                className='flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3'
              >
                <input
                  type='radio'
                  name='ficTrue'
                  id='ficTrue'
                  checked={fic === true}
                  onClick={() => setFic(true)}
                />
                Sim
              </label>

              <label
                htmlFor='ficFalse'
                className='flex gap-1 items-center py-3 px-4 border border-solid border-rosa-300 rounded-lg text-ct3'
              >
                <input
                  type='radio'
                  name='ficFalse'
                  id='ficFalse'
                  checked={fic === false}
                  onClick={() => setFic(false)}
                />
                Não
              </label>
            </div>

            <div className='flex gap-4 justify-end mt-8'>
              <PinkButton
                text='Voltar'
                action={() => setCurrentStep(currentStep - 1)}
                typeButton="button"
              />
              <PinkButton
                text='Continuar'
                action={() => setCurrentStep(currentStep + 1)}
                typeButton="button"
              />
            </div>
          </Step>

          <Step
            currentStep={currentStep}
            step={3}
          >
            <h3 className='text-sub1'>Informações Pessoais</h3>
            <InputText
              id='name'
              type='text'
              name='Nome Completo'
              placeholder='ex:000.000.000-00'
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={true}
            />
            <InputText
              id='cpf'
              type='text'
              name='CPF'
              placeholder='ex:marlene'
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              disabled={true}
            />
            <InputText
              id='email'
              type='email'
              name='Email'
              placeholder='ex:marlene@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={true}
            />

            <InputText
              id='phone'
              type='text'
              name='phone'
              placeholder='ex: 55 11 9999999'
              value={phone}
              disabled={true}
            />
            <h3 className='text-sub1'>Informações de cursos</h3>
            <InputText
              id='curso'
              type='text'
              name='curso'
              placeholder='Curso'
              value={phone}
              disabled={true}
            />
            <InputText
              id='curso'
              type='text'
              name='Sócio da AAPM:'
              placeholder='Associado'
              value={partner ? 'Sim' : 'Não'}
              disabled={true}
            />
            {/* <p className='text-ct2'>Curso: {course}</p>
            <p className='text-ct2'>Sócio da AAPM: {partner ? 'Sim' : 'Não'}</p> */}
            <div className='flex justify-end mt-8 gap-4'>
              <PinkButton
                text='Voltar'
                action={() => setCurrentStep(currentStep - 1)}
                typeButton="button"
              />
              <PinkButton
                text='Cadastrar'
                loading={loading}
              />
            </div>
          </Step>
        </form>
      </div>
    </>
  );
}

function Step({ currentStep, step, children }) {
  const show = currentStep === step;

  return show ? <>{children}</> : null;
}
