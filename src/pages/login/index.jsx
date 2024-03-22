import { useState } from 'react';
import { PinkButton } from '../../components/Buttons/pinkButton';

export function Login() {
  let [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (value.includes('@')) {
      setErrorMessage('Domínio inválido');
    } else {
      setErrorMessage(''); 
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    if (email.endsWith('@senaisp.edu.br')) {
      setEmail(email); // Mantém o email intacto se já contém o domínio
    } else {
      setEmail(email + '@senaisp.edu.br'); // Adiciona o domínio se não estiver presente
    }

    event.preventDefault();
    console.log(`email: ${email} password: ${password}`)
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen md:flex-row bg-preto">
      <div className="flex flex-col w-full  h-full bg-preto justify-start pl-10">

        <h1 className="text-h5 text-cinza-50 pt-20">Bem-vindo(a)</h1>
        <p className="text-cp2 text-cinza-50 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione commodi quisquam cum, ut maiores quasi eos! Tempore, error fuga dolore ut illo sequi fugiat quasi nesciunt nulla laborum. Nesciunt!</p>

        <iframe className="w-full aspect-video mt-10 pr-2" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

      </div>

      <div className="min-h-screen w-full mt-12 pt-10 md:pt-0 pl-6 md:pl-12 md:mt-0 bg-cinza-50 flex flex-col justify-center items-center md:items-start rounded-t-[16px] md:rounded-l-[16px]">
        <h3 className="text-h3 mb-8">Login</h3>
        <div className="w-3/4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <p className='block text-fun1'>Email</p>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="appearance-none border border-2 border-cinza-50 rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline h-16"
                placeholder="Ex: marlene"
              />
              <span className="absolute inset-y-0 right-2 top-10 flex items-center text-ct3 md:text-fun2 text text-roxo-50 p-1 md:p-2 bg-rosa-destaque rounded-lg w-auto h-8">@senaisp.edu.br</span>
            </div>
            {errorMessage && <p className="text-vermelho text-fun2">{errorMessage}</p>}

            <p className='block text-fun1 mt-8'>Senha</p>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="appearance-none border border-2 border-cinza-50 rounded-lg focus:outline-none focus:border-rosa-destaque w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline h-12 md:h-16"
              placeholder="Senha"
            />
            <div className="text-start">
              <a href="#" className="text-rosa-400 text-fun2">Esqueci a senha</a>
            </div>

            <PinkButton text="Entrar" size="medium" action={() => console.log('hi')} align='end'/>
          </form>
        </div>
      </div>
    </div>
  );
}
