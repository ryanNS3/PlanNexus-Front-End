import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TemplateViewTab } from "../ViewTemplateTab";
import { LineTable, TemplateView } from "../ViewTemplate";
import { EmployeeForm } from "../Form/employee";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";
import { DonatorContext } from "../../context/donatorContext";
import { DonationForm } from "../Form/donation";

export function DonateTab() {
  const {useGetMoneyDonation, useGetLockerDonation, useGetProductDonation} = useContext(DonatorContext)
  const resMoneyData = useGetMoneyDonation()
  const resProductData = useGetProductDonation()
  const resLockerData = useGetLockerDonation()

  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "Produtos",
      value: "Produtos",
      element: <TemplateView name={'doações'} formModal={ <DonationForm/> } 
      header_data={['Produto']} 
      children={resProductData && resProductData?.resProductData?.json?.response?.map((donate) => {
        const date = donate.data
          return(
            <LineTable  grid={`67px 1fr repeat(${3}, 100px)`} name={donate.nome} detailsModal={
              <div>
                <h4 className="my-2 text-h4" >Dados da doação</h4>

                <p>Nome do aluno: {donate.nome} </p>
                <p>Produto doado: {donate.produto} </p>
                <p>Quantidade de produtos: {donate.quantidade} </p>
                <p>Data da doação: {donate.data} </p>
              </div>
            }/>
          )
        })
      }/>,
    },
    {
      label: "Armários",
      value: "Armários",
      element: <TemplateView name={'doações'} formModal={ <DonationForm/> } 
      header_data={[ 'Valor']} 
      children={resLockerData && resLockerData?.resLockerData?.json?.response?.map((donate) => {
          return(
            <LineTable  grid={`67px 1fr repeat(${3}, 100px)`}  name={donate.nome} detailsModal={
              <div>
                <h4 className="my-2 text-h4" >Dados da doação</h4>

                <p>Nome do aluno: {donate.nome} </p>
                <p>Número do armário doado: {donate.fk_numero} </p>
                <p>Data da doação: {donate.data} </p>
              </div>
            }/>
          )
        })
      }/>, 
    },
    {
      label: "Dinheiro",
      value: "dinheiro",
      element: <TemplateView name={'doações'} formModal={ <DonationForm/> } 
      header_data={['Valor']} 
      children={resMoneyData && resMoneyData?.resMoneyData?.json?.response?.map((donate) => {
          return(
            <LineTable grid={`67px 1fr repeat(${3}, 100px)`}  name={donate.nome} detailsModal={
              <div>
                <h4 className="my-2 text-h4" >Dados da doação</h4>

                <p>Nome do aluno: {donate.nome} </p>
                <p>Valor em reais: {donate.quantia} </p>
                <p>Tipo de auxilio: {donate.auxilio} </p>
                <p>Data da doação: {donate.data} </p>
              </div>
            } />
          )
        })
      }/>,
    },
  ];


  const [activeTab, setActiveTab] = React.useState("Produtos");
  return (
    <ThemeProvider value={customTheme}>
      <Tabs className="w-full" value={activeTab}>
        <div className="flex justify-between">
          <h1 className="text-h5">Auxílios Fixos</h1>
          <TabsHeader
            className="w-[430px] gap-4  bg-cinza-50 text-preto rounded-lg h-[2.75rem] p-0 "
            indicatorProps={{
              className:
                "w-[8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
            }}
          >
            {content.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={
                  activeTab === value
                    ? "text-cinza-50 z-[9] w-[8rem] h-[2.75rem] py-0"
                    : "w-[8rem] py-4"
                }
              >
                <p className=" text-fun2 relative z-[5]"> {label}</p>
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody>
          {content.map(({ value, element }) => (
            <TabPanel key={value} value={value}>
              {element}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}
