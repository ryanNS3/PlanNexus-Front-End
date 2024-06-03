import { array, z } from 'zod';

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
export const emailSchema = z.string()
    .nonempty("Email é obrigatório.")
    .email("Email deve ser um email válido."
);

export const employeeEmailSchema = z.string()
  .nonempty("Email é obrigatório.")
  .email("Email deve ser um email válido.")
  .regex(/^[^@]+@senaisp.edu.br$/, 'Email deve terminar com @senaisp.edu.br'
);

export const imageUniqueValidate = z.array()

export const colorUniqueSchema = z.string()
  .min(3,"O nome da cor deve ter no mínimo 3 caracteres")
  .max(30, "O nome da cor não deve ter um tamanho ter mais de 30 caracteres")

export const priceSchema = z.number()
  .min(1, "O valor não pode estar vazio")
  .max(1000, "O valor não pode ser maior que 1000")

export const comparePriceAndDiscount = z.object({
  valor : priceSchema,
  desconto: priceSchema
}).refine(data => data.valor >= data.desconto,{
  message: "O desconto não pode ser maior que o valor",
  path: ["desconto"]
})


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

export const ProductSchema = z.object({
    nome: z.string().min(3, "O nome não pode estar vazio").max(100,"O nome pode ter no máximo 100 caracteres"),
    cores: z.array(z.string().min(3, "A cor deve estar preenchida")).min(1, "As cores não podem estar vazias"),
    tamanhos: z.array(z.string()).min(1, "Os tamanhos não podem estar vazios"),
    valor: z.number().min(1, "O valor não pode estar vazio"),
    desconto: z.number().min(1, "O desconto não pode estar vazio"),
    descricao: z.string().max(150).nullable(),
  //   fotos: z.array(
  //     z.array(
  //       z.object(
  //         z.object({
  //           file: z.instanceof(File, "é necesário uma imgem aqui")

  //         })
  //       )

  //     )
  // ).refine((fotos) => fotos.length > 0, "É necessário preencher todas imagens"),
    // fotos: z.array(),
    brinde: z.enum(["false","true"])

}).superRefine((data, ctx) => {
  if (data.valor <= data.desconto) {
    ctx.addIssue({
      path: ['desconto'],
      message: 'O desconto deve ser menor que o valor.',
    });
  }

})

// Esquema de validação Login
export const loginSchema = z.object({
    email: employeeEmailSchema,
    password: z.string().nonempty("Preencha todos os campos!"),
});

export const passwordSchema = z.string()
  .min(6, "A senha deve ter no mínimo 6 caracteres")
  .nonempty("Preencha todos os campos!");
