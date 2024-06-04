import React, { useContext,useState, useEffect } from "react";
import { toastifyContext } from "../../context/toastifyContext";
import { EmployeeContext } from "../../context/Employee";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PinkButton } from '../../components/Buttons/pinkButton';
import { InputText } from "../../components/Inputs/input-text/inputTextComp";
import { passwordSchema } from '../../hooks/useZod';

const validatePasswords = (password, confirmPassword) => {
    const passwordValidation = passwordSchema.safeParse(password);
    if (!passwordValidation.success) {
        return passwordValidation.error.errors[0].message;
    }
    if (password !== confirmPassword) {
        return "As senhas não coincidem.";
    }
    return null;
};
export function ResetPassword() {
    const {ResetPassword} = useContext(EmployeeContext)
    const {Notification} = useContext(toastifyContext) 
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [inputError, setInputError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token) {
        navigate('/login');
        }
    }, [token, navigate]);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setInputError(false);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setInputError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validatePasswords(password, confirmPassword);
        if (validationError) {
        setErrorMessage(validationError);
        setInputError(true);
        return;
        }

        setLoading(true);
        try {
        const success = await ResetPassword(token, password)

        if (!success) {
            throw new Error('Erro ao redefinir a senha.');
        }

        Notification('sucess', 'Senha Atualizada com sucesso')
        setLoading(false);
        navigate('/login');
        } catch (error) {
        setLoading(false);
        setErrorMessage(error.message || 'Erro durante a redefinição da senha. Por favor, tente novamente.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen md:h-screen md:flex-row bg-preto">
        <div className="flex flex-col w-full min-h-screen bg-preto justify-start pl-10">
            <h1 className="text-h5 text-cinza-50 pt-20">Definir Nova Senha</h1>
            <p className="text-cp2 text-cinza-50 pt-6 w-3/4">
            Por favor, insira sua nova senha nos campos designados.
            </p>
        </div>

        <div className="min-h-screen w-full mt-12 pt-10 md:pt-0 pl-6 md:pl-12 md:mt-0 bg-cinza-50 flex flex-col justify-center items-center md:items-start rounded-t-[16px] md:rounded-l-[16px]">
            <h3 className="text-h3 mb-8">Nova Senha</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4" noValidate>
            <InputText id='password' type='password' name='Senha' value={password} onChange={handlePasswordChange} placeholder='Nova Senha' required={true} disabled={loading} error={inputError} />
            <InputText id='confirm-password' type='password' name='Confirmar senha' value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirmar Senha' required={true} disabled={loading} error={inputError} />
            {errorMessage && <p className="text-vermelho-300 text-fun2">{errorMessage}</p>}
            <Link to="/login" className="text-start text-rosa-400 text-fun2 mt-4">Voltar para Login</Link>
            <PinkButton text="Redefinir Senha" size="medium" align='end' loading={loading} />
            </form>
        </div>
        </div>
    );
    }
