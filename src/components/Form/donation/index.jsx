import React, { useContext, useEffect, useCallback, useState } from "react";
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { PinkButton } from "../../Buttons/pinkButton";
import { ProductContext } from "../../../context/ProductContext";
import { GhostButton } from "../../Buttons/ghostButton";
import { useDebounce } from "../../../hooks/useDebounce";
import { DonatorContext } from "../../../context/donatorContext";
import { studentContext } from "../../../context/studentsContext";

export function DonationForm() {
  const { GetProducts } = useContext(ProductContext);
  const { resProductData } = GetProducts();
  const {mutateProductDonation} = useContext(DonatorContext)
  const {getStudents} = useContext(studentContext)
  const resStudentsData = getStudents()

  const steps = [
    "Informações do aluno",
    "Produto para doação",
    "Contrato"
  ];

  const [selectedOption, setSelectedOption] = React.useState('productDonation');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cellphone, setCellphone] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [contract, setContract] = React.useState(null);
  const [studentId, setStudentId] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [lockerNumber, setLockerNumber] = React.useState('');
  const [moneyAmount, setMoney] = React.useState('');
  const [search, setSearch] = React.useState();
  const [date, setDate] = React.useState(Date.now());
  const [currentStep, setCurrentStep] = React.useState(1);

  const [filteredStudent, setFilteredStudent] = useState(''); 

  const [DonateDebounce] = useDebounce(cpf, 2000);

  const setStep = (step) => {
    setCurrentStep(step);
  }

  function handleCPF(event) {
    const cpfValue = event.target.value
    setCpf(cpfValue);
    console.log('valor pesquisa: '+cpfValue)

    const filter = resStudentsData.json.response?.filter((student) => {
      return student.CPF === cpfValue ? student: null;
    });

    if (filter.length > 0) {
      setFilteredStudent(filter);  
    } 
    console.log('valor q devia ser achado no banco supostamente: ' + filteredStudent)
  }


  const handleSelect = (event, item) => {
    event.preventDefault();
    console.log('Item selecionado:', item);
    setProductId(item);
  };


  const commonDataDonation = { studentId, date, contract };
  // let postDataDonation = { ...commonDataDonation };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let postDataDonation = { idAluno: studentId, data: date, contrato: contract, produtoId: productId, quantidade: quantity };
    // setError(false)
    // setLoading(true)

    try {
      mutateProductDonation.mutate(postDataDonation)
    } catch (error) {
      console.log(error)
    }

    // if (selectedOption === 'productDonation') {
    // } else if (selectedOption === 'moneyDonation') {
    //   postDataDonation = { ...postDataDonation, moneyAmount };
    // } else {
    //   postDataDonation = {...postDataDonation, lockerNumber }
    // }

    // try {
    //   let donationType;
    //   switch (selectedOption) {
    //     case 'productDonation':
    //       donationType = await postDoacaoProduto(postDataDonation);
    //       break;
    //     case 'moneyDonation':
    //       donationType = await postDoacaoDinheiro(postDataDonation);
    //       break;
    //     case 'LockerDonation':
    //       donationType = await postDoacaoArmario(postDataDonation);
    //       break;
    //     default:
    //       throw new Error('Opção desconhecida');
    //   }
    //   setResponseData(donationType);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }

  };

  return (
    <div>
      <h4 className="text-h4 mb-11">DOAÇÃO</h4> 
      <nav className="mb-9">
        <ul className="flex justify-between">
          {steps?.map((step, index) => (
            <React.Fragment key={index}>
              <li
                key={index}
                onClick={() => name && email && cpf && cellphone ? setStep(index + 1) : null}
                className="flex flex-col items-center cursor-pointer gap-2"
              >
                <div
                  className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${
                    currentStep === index + 1 ? 'bg-rosa-300 text-rosa-50' : 'bg-[#D9D9D9] text-cinza-700'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`block ${
                    currentStep === index + 1 ? 'text-preto' : 'text-cinza-500'
                  } text-fun2 max-w-28 text-center`}
                >
                  {step}
                </span>
              </li>
              {index !== steps.length - 1 ? (
                <div className="w-screen h-[2px] bg-cinza-300 mt-[21px]"></div>
              ) : null}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      <form >
        <Step currentStep={currentStep} step={1}>
          <div className="flex flex-col gap-6">
            <InputText id="CPF" type="text" name="CPF" placeholder="000.000.000-00" onChange={(e) => handleCPF(e)} value={cpf} />
            {filteredStudent && (
              
              <>
                <button onClick={() => setStudentId(filteredStudent.id_aluno)}> {filteredStudent.nome} </button>
              </>
            )
            }
            <InputText id="name" type="text" name="Nome completo" placeholder="José da Silva" onChange={(e) => setName(e.target.value)} value={name} />
            <InputText id="email" type="email" name="Email" placeholder="jose@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} />
            <InputText id="cellphone" type="text" name="telefone" placeholder="55 11 111111111" onChange={(e) => setCellphone(e.target.value)} value={cellphone} />
          </div>
          <div className="mt-4">
            <PinkButton text="Continuar" action={() => setCurrentStep(currentStep + 1)} typeButton="button" />
          </div>
        </Step>

        <Step currentStep={currentStep} step={2}>
          <div>
            {/* <div>
            <label>
            <input
              type="radio"
              value="productDonation"
              checked={selectedOption === 'productDonation'}
              onChange={handleOptionChange}
            />
            Doação de Produto
          </label>
          <label>
            <input
              type="radio"
              value="moneyDonation"
              checked={selectedOption === 'moneyDonation'}
              onChange={handleOptionChange}
            />
            Doação de Dinheiro
          </label>
          <label>
            <input
              type="radio"
              value="lockerDonation"
              checked={selectedOption === 'lockerDonation'}
              onChange={handleOptionChange}
            />
            Doação de armário
          </label>
            </div> */}

            
            {resProductData && resProductData.json.response.map((product)=> {
              return(
                <div>
                  <button key={product.id_produto} onClick={(e) => handleSelect(e, product.id_produto)} >
                {product.nome}
              </button>

                </div>
              )
            })}
            <InputText id="quantidade" type="number" name="Quantidade" placeholder="0" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
            

            <div className="mt-4 flex justify-end gap-2">
              <GhostButton action={() => setCurrentStep(currentStep - 1)} text="voltar" />
              <PinkButton text="Continuar" action={() => setCurrentStep(currentStep + 1)} typeButton="button" />
            </div>
          </div>
        </Step>

        <Step currentStep={currentStep} step={3}>
          <div>
            <div className="mt-4 flex justify-end gap-2">
            <input type="file" name="contrato" id="contrato" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={ (e) => setContract(e.target.value) } />
              <GhostButton action={() => setCurrentStep(currentStep - 1)} text="voltar" />
              <PinkButton text="Finalizar" action={handleSubmit} typeButton="submit" />
            </div>
          </div>
        </Step>
      </form>
    </div>
  );
}

function Step({ currentStep, step, children }) {
  return currentStep === step ? <>{children}</> : null;
}

