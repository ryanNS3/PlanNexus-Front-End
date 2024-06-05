import React, { useContext, useEffect, useCallback, useState } from "react";
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { PinkButton } from "../../Buttons/pinkButton";
import { ProductContext } from "../../../context/ProductContext";
import { GhostButton } from "../../Buttons/ghostButton";
import { useDebounce } from "../../../hooks/useDebounce";
import { DonatorContext } from "../../../context/donatorContext";
import { studentContext } from "../../../context/studentsContext";
import { InputRadioInformation } from "../../Inputs/input-radio-information";
import { Lockers } from "../../AllLocker";
import { InputNumber } from "../../Inputs/input-number";

export function DonationForm() {
  const { GetActiveProducts } = useContext(ProductContext);
  const { resActiveProducts } = GetActiveProducts();
  const {postProductDonation, postMoneyDonation, postLockerDonation} = useContext(DonatorContext)
  const {getStudents} = useContext(studentContext)
  const resStudentsData = getStudents()

  const steps = [
    "Informações do aluno",
    "Produto para doação",
    "Contrato"
  ];

  const [selectedOption, setSelectedOption] = React.useState('moneyDonation');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [name, setName] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cellphone, setCellphone] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [contract, setContract] = React.useState('aaaaaaaaaaaaaaaaaaaaaaaa');
  const [studentId, setStudentId] = React.useState('');
  const [productId, setProductId] = React.useState('');
  const [lockerNumber, setLockerNumber] = React.useState();
  const [moneyAmount, setMoney] = React.useState('');
  const [assistanceType, setType] = React.useState('')
  const [date, setDate] = React.useState(null);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [filteredStudent, setFilteredStudent] = useState(''); 
  const [error, setError] = useState('')
  const [success, setSucess] = useState(null)

  const setStep = (step) => {
    setCurrentStep(step);
  }

  function handleCPF(event) {
    event.preventDefault()
    const cpfValue = event.target.value
    setCpf(cpfValue);

    const filter = resStudentsData.json.response?.filter((student) => {
      return student.CPF === cpfValue ? student : null;
    });

    if (filter.length > 0) {
      setFilteredStudent(filter[0]);
      setError(null)
    } else {
      setFilteredStudent(null);
      setStudentId(null); 
      setError('identificador do aluno não encontrado');
    }
  }

  useEffect(() => {
    if (filteredStudent) {
      setStudentId(filteredStudent.id_aluno);
      setEmail(filteredStudent.email)
      setCellphone(filteredStudent.telefone_celular)
      setName(filteredStudent.nome)

      const DonateTime = new Date();
      setDate(DonateTime.toISOString())
    }
  }, [studentId, filteredStudent]);

  useEffect(() => {
    if (studentId === null && filteredStudent === null) {
      setError('id aluno não encontrado');
    }
  }, [studentId, filteredStudent]);


  const handleContractChange = (event) => {
    setContract(event.target.files[0]);
  };

  const handleSelect = (event, item) => {
    event.preventDefault();
    setProductId(item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const DonateTime = new Date();
    setDate(DonateTime.toISOString())

    const commonData = {idAluno: studentId, contrato: contract, data: date }
    let postDataDonation;
  
    if (selectedOption === 'productDonation') {
      postDataDonation = { ...commonData, idProduto: productId, quantidade: quantity};
    } else if (selectedOption === 'moneyDonation') {
      postDataDonation = { ...commonData, valorDoado : moneyAmount, auxilio : assistanceType};
    } else if(selectedOption === 'lockerDonation') {
      postDataDonation = {...commonData, numeroArmario : lockerNumber }
    }

    try {
      let donationType;
      switch (selectedOption) {
        case 'productDonation':
          donationType = await postProductDonation(postDataDonation);
          break;
        case 'moneyDonation':
          donationType = await postMoneyDonation(postDataDonation);
          break;
        case 'lockerDonation':
          donationType = await postLockerDonation(postDataDonation)
          break;
        default:
          throw new Error('Opção desconhecida');
      }
      
      donationType ? setSucess('Doação realizada com sucesso') : setError('Erro ao realizar doação')

    } catch (error) {
      setError(error.message);
    } 
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

      <form onSubmit={handleSubmit} >
        <Step currentStep={currentStep} step={1}>
          <div className="flex flex-col gap-6">
            <InputText id="CPF" type="text" name="CPF" placeholder="000.000.000-00" onChange={(e) => handleCPF(e)} value={cpf} minlength='11' maxlength='14'/>
            {filteredStudent && (

              <>
                <InputText id={filteredStudent.id_aluno} type="text" name="Nome completo" placeholder="José da Silva" value={filteredStudent.nome}  onChange={() => setName(filteredStudent.nome)}/>
                <InputText id="email" type="email" name="Email" placeholder="jose@gmail.com" value={filteredStudent.email} onChange={() => setEmail(filteredStudent.email)}/>
                <InputText id="cellphone" type="text" name="telefone" placeholder="55 11 111111111" value={filteredStudent.telefone_celular} onChange={() => setCellphone(filteredStudent.telefone_celular)} />
              </>
            )
            }
          </div>
            <p>{error}</p>
          <div className="mt-4">
          <PinkButton
                  text="Continuar"
                  action={() =>
                    name && cpf && email && cellphone
                      ? setCurrentStep(currentStep + 1)
                      : null
                  }
                  typeButton="button"
                />
          </div>
        </Step>

        <Step currentStep={currentStep} step={2}>
        <div>
          
          <InputRadioInformation
            type="radio"
            value="moneyDonation"
            checked={selectedOption === 'moneyDonation'}
            onChange={handleOptionChange}
            placeholder={'Doação de dinheiro'}
          />

            <InputRadioInformation
              type="radio"
              value="productDonation"
              checked={selectedOption === 'productDonation'}
              onChange={handleOptionChange}
              placeholder={'doação de produto'}
            />
            
          
            <InputRadioInformation
              type="radio"
              value="lockerDonation"
              checked={selectedOption === 'lockerDonation'}
              onChange={handleOptionChange}
              placeholder={'Doação de armário'}
            />
            
          
        </div>

          {selectedOption === 'productDonation' && (
            <div>
            
            {resActiveProducts && resActiveProducts.json.response.map((product)=> {
              return(
                <div>
                  <button key={product.id_produto} onClick={(e) => handleSelect(e, product.id_produto)} >
                {product.nome}
              </button>

                </div>
              )
            })}
            <InputText id="quantidade" type="number" name="Quantidade" placeholder="0" onChange={(e) => setQuantity(e.target.value)} min='1' max='10' value={quantity} />
             
          </div>
          )}
          {
            selectedOption === 'moneyDonation' && (
              <div>
                  <div>
                  
                    <InputRadioInformation
                      type="radio"
                      value="fixed"
                      checked={assistanceType === 1}
                      id='fixedAssistence'
                      onChange={() => {setType(1)}}
                      description={'Pago mensalmente como valor fixo durante o semestre'}
                      placeholder={'Doação fixa'}
                    />
                    

                  
                    <InputRadioInformation
                      type="radio"
                      value="commum"
                      checked={assistanceType === 0}
                      id='commonAssistence'
                      onChange={() => {setType(0)}}
                      description={'Pago apenas uma vez'}
                      placeholder={'Doação comum'}
                    />
                    
                  </div>
                <InputText id="valorDoado" type="number" name="Valor a ser doado" placeholder="R$00" onChange={(e) => setMoney(e.target.value)} value={moneyAmount} min='1' max='1000' />

              </div>
            )
          }{
            selectedOption === 'lockerDonation' && (
              <div>
                <label>Digite o número do armário</label>
                <InputText id="numeroArmario" type="number" name="Número do armário" placeholder="0" onChange={(e) => setLockerNumber(e.target.value)} value={lockerNumber} min='1' max='1000' />
                <Lockers/>

              </div>
            )
          }
          <p>{error}</p>

            <div className="mt-4 flex justify-end gap-2">
              <GhostButton action={() => setCurrentStep(currentStep - 1)} text="voltar" />
              <PinkButton text="Continuar" action={() => setCurrentStep(currentStep + 1)} typeButton="button" />
            </div>
        </Step>

        <Step currentStep={currentStep} step={3}>
          <div>
            <div className="mt-4 flex justify-end gap-2">

              <div>
                <input type="file" name="contrato" id="contrato" onChange={handleContractChange} />
              </div>
              

              <p>{error}</p> 
              <p>{success}</p> 
              <GhostButton action={() => setCurrentStep(currentStep - 1)} text="voltar" />
              <PinkButton text="Finalizar" typeButton="submit" />
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

