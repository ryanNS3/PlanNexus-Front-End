import { z } from 'zod';

// Função para validar o CPF
function validateCPF(value) {
  const cleanedCPF = value.replace(/\D/g, '');

  if (cleanedCPF.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cleanedCPF)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let firstDigit = (remainder >= 10) ? 0 : remainder;

  if (firstDigit !== parseInt(cleanedCPF.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let secondDigit = (remainder >= 10) ? 0 : remainder;

  return secondDigit === parseInt(cleanedCPF.charAt(10));
}

// Esquema de validação para CPF
export const cpfSchema = z.string()
  .refine((value) => /^\d{11}$/.test(value), {
    message: "CPF deve conter apenas números.",
  })
  .refine((value) => validateCPF(value), {
    message: "CPF inválido.",
  });

// Esquema de validação para Nome
export const nameSchema = z.string()
    .nonempty("Preencha todos os campos!")
    .min(2, "O nome deve possuir no mínimo 3 caracteres")
    .max(100, "O nome não deve ultrapassar 100 caracteres")

// Esquema de validação para Email
const emailSchema = z.string()
    .nonempty("Email é obrigatório.")
    .email("Email deve ser um email válido."
);

// Esquema de validação para Telefone
export const phoneSchema = z.string()
  .regex(/^\d{13}$/, "Telefone deve ter 13 dígitos e conter apenas números."
);

// Esquema para validação de NIF
export const nifSchema = z.string()
    .regex(/^\d+$/, "O NIF deve conter apenas números.")
    .min(5, "O NIF deve conter no mínimo 5 Caracteres!")
    .max(7, "O NIF deve conter no máximo 7 caracteres!"
);

// Esquema de validação para Data
export const dateSchema = z.date()
  .refine(date => date >= new Date(), "Data não pode ser menor que o dia atual."
);

// Esquema de validação para Quantidade
export const quantitySchema = z.number()
  .min(0, "Quantidade não pode ser menor que 0."
);

// Esquema de validação addStudent
export const addStudentSchema = z.object({
  nome: nameSchema,
  cpf: cpfSchema,
  telefone: phoneSchema,
  email: emailSchema,
});

export const addEmployeeSchema = z.object({
  nome: nameSchema,
  email: emailSchema,
  nif: nifSchema,
});

// Esquema de validação Login
export const loginSchema = z.object({
    email: z.string()
        .nonempty("Preencha todos os campos!")
        .email("Email deve ser um email válido.")
        .regex(/^[^@]+@senaisp.edu.br$/, 'Email deve terminar com @senaisp.edu.br'),
    password: z.string().nonempty("Preencha todos os campos!"),
});
