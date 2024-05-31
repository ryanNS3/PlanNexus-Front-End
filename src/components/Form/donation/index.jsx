import React, {useContext, useEffect} from "react";
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { InputRadioInformation } from "../../Inputs/input-radio-information";
import { PinkButton } from "../../Buttons/pinkButton";
import { ProductContext } from "../../../context/ProductContext";
import { GhostButton } from "../../Buttons/ghostButton";
import { studentContext } from "../../../context/studentsContext";

export function DonationForm(){
  const {GetProducts} = React.useContext(ProductContext)
  const {resProductData} = GetProducts()

  const {SearchStudents} = React.useContext(studentContext)
  // const {resStudent} = searchStudentsByCPF()
  // const resSearch = SearchStudents()

  const steps = [
    'Informações do aluno',
    'Produto para doação',
    'Contrato'
  ]

  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [email, setEmail] = React.useState()
  const [cellphone, setCellphone] = React.useState()
  const [quantity, setQuantity] = React.useState()
  const [contract, setContract] = React.useState()
  const [studentId, setStudentId] = React.useState()
  const [productId, setProductId] = React.useState()
  const [lockerNumber, setLockerNumber] = React.useState()
  const [moneyAmount, setMoney] = React.useState()

  const [search, setSearch] = React.useState()
  
  const [currentStep, setCurrentStep] = React.useState(1)

  function setStep(step){
    setCurrentStep(step)
  }

  function Step({currentStep, step, children}) {
    const show = currentStep === step
  
    return show ? <>{children}</> : null
  }

  useEffect(() => {
    if(cpf == true){
      const fetchData = async () => {
        try {
          const result = await SearchStudents(cpf);
          console.log(result)
          setSearch(result);
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      };

      fetchData()
    }
  }, [cpf, SearchStudents])

  // const handleCPFChange = (event) => {
  //   setCpf(event.target.value);
  //   setError(false)
  // };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  //   setError(false)
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  //   setError(false)
  // };

  // const handleQuantityChange = (event) => {
  //   setQuantity(event.target.value);
  //   setError(false)
  // };

  // const handleStudentChange = (event) => {
  //   setStudentId(event.target.value);
  //   setError(false)
  // };

  // const handleProductChange = (event) => {
  //   setProductId(event.target.value);
  //   setError(false)
  // };

  // const handleLockerChange = (event) => {
  //   setLockerNumber(event.target.value);
  //   setError(false)
  // };

  // const handleMoneyChange = (event) => {
  //   setMoney(event.target.value);
  //   setError(false)
  // };

  // const handleContractChange = (event) => {
  //   setContract(event.target.value);
  //   setError(false)
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  }



  return(
    <>
      <div>
        <h4 className="text-h4 mb-11">DOAÇÃO</h4>

        <nav className="mb-9">
          <ul className="flex justify-between">
            {steps?.map((step, index) => (
              <React.Fragment key={index}>
                <li key={index} 
                onClick={() => name && email && cpf && cellphone ? setStep(index + 1) : null} 
                className="flex flex-col items-center cursor-pointer gap-2">

                  <div className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${
                      currentStep == index + 1
                        ? 'bg-rosa-300 text-rosa-50'
                        : 'bg-[#D9D9D9] text-cinza-700'
                    }`}>
                      {index + 1}
                  </div>
                  
                      <span className={`block ${
                      currentStep == index + 1 ? 'text-preto' : 'text-cinza-500'
                    } text-fun2 max-w-28 text-center`}>
                        {step}
                      </span>
                </li>

                {index != steps.length -1 ? (
                  <div className="w-screen h-[2px] bg-cinza-300 mt-[21px]"></div> 
                ) : null}
                </React.Fragment>
            ))}
          </ul>
        </nav>

                <form onSubmit={handleSubmit}>
                  <Step currentStep={currentStep} step={1}>
                    <div className="flex flex-col gap-6">
                      <InputText  id='cpf' type='text' name='CPF' placeholder='000.000.000-00' onChange={(e) => setCpf(e.target.value)} value={cpf} />

                    {search &&  search.json.response.map((student, key) => {
                      <p key={key} > {student.cpf} </p>
                    }) 
                    }


                      <InputText id='name' type='text' name='Nome completo' placeholder='José da Silva' onChange={(e) => setName(e.target.value)} value={name ? name : ''} />

                      <InputText id='email' type='email' name='Email' placeholder='jose@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email ? email : '' } />


                      <InputText id='cellphone' type='text' name='telefone' placeholder='55 11 111111111' onChange={(e) => setCellphone(e.target.value)} value={cellphone ? cellphone : ''} />
                    </div>


                    <div className="mt-4">
                      <PinkButton text='Continuar' 
                      action={() => setCurrentStep(currentStep + 1)}
                      // name && email && cpf && cellphone ?
                      typeButton='button'>

                      </PinkButton>
                    </div>
                  </Step>


                  <Step currentStep={currentStep} step={2}>

                    <div>
                      <p className="text-fun2 my-2">escolha um produto</p>
                      {resProductData && resProductData.json.response.map((product, key) => {
                        return(
                          <div>
                            <div className="border border-cinza-100 max-w-20 rounded-lg my-2">
                            <button key={key}
                            name="product"
                            >
                              <img src={product.foto} className="max-w-14" />
                            {product.nome} - {product.tamanho}
                            </button>
                            </div>


                          {/* <div>
                            <p>escolha um tamanho</p>
                            <button>
                            {product.tamanho}
                            </button>
                          </div> */}
                          </div>

                        )
                      }) 
                      
                    }
                    <InputText type='number' id='quantity' name='quantidade' onChange={(e) => setQuantity(e.target.value)} value={quantity ? quantity : ''}/>


                      <div className="mt-4 flex justify-end gap-2">
                      <GhostButton action={() => setCurrentStep(currentStep - 1)} text={'voltar'}></GhostButton>
                      
                      <PinkButton text='Continuar' 
                      action={() => setCurrentStep(currentStep + 1)}
                      // name && email && cpf && cellphone ?
                      typeButton='button'>

                      </PinkButton>
                    </div>
                    </div>
                  </Step>

                  <Step currentStep={currentStep} step={3}>

                    <div>
                      <div className="mt-4 flex justify-end gap-2">
                        <GhostButton action={() => setCurrentStep(currentStep - 1)} text={'voltar'}></GhostButton>
                        
                        <PinkButton text='Continuar' 
                        action={() => setCurrentStep(currentStep + 1)}
                        // name && email && cpf && cellphone ?
                        typeButton='button'>

                        </PinkButton>
                      </div>
                    </div>
                  </Step>
                </form>
              

    </div>
    
    </>
  )
}

