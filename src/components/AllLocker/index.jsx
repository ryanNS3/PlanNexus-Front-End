import React, { useEffect, useRef } from "react";
import { Percentage } from "../Percentage";
import { VoidDate } from "../VoidDate";
import { DuoModalOptions } from "../Modal";
import { LockerForm } from "../Form/lockerNotice";
import { SelectLocker } from "../SelectLocker";
import { Options } from "../Options";
import { LockerContext } from "../../context/lockerContext";
import { PinkButton } from "../Buttons/pinkButton";
import { CampWhite } from '../../assets/CampIcon'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";

export function AllLocker({ typeUser }) {
  const { dados, dataLocker, GetLocker } = React.useContext(LockerContext);

  useEffect(() => {
    GetLocker();
  }, []);

  const [pagination, setPagination] = React.useState(0)
  const [isOpenOptions, setIsOpenOptions] = React.useState(false);

  const currentLockers = dataLocker[pagination]

  function handleFocusAllLocker(event) {
    event.preventDefault();
    setIsOpenOptions(false);
  }

  if (dataLocker) {
    return (
      <div onFocus={handleFocusAllLocker}>
        <div className="flex flex-wrap mt-8 gap-5">
          <Percentage />
          <VoidDate />
        </div>

        <div className="col-start-1 col-end-12 flex justify-between mt-10">
          <h1 className="text-h5">Todos os {typeUser}: </h1>
          <DuoModalOptions
            contentOne={<SelectLocker />}
            contentDuo={<LockerForm />}
            Button={<PinkButton icon={<CampWhite />} text={'Enviar Aviso'} />}
          >

          </DuoModalOptions>
        </div>

        <Lockers />

      </div>
    );
  }
}

export function Lockers({ size }) {

  const { dataLocker } = React.useContext(LockerContext);

  const [pagination, setPagination] = React.useState(0)

  const currentLockers = dataLocker[pagination]

  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    { label: "1 a 28", value: 0, },
    { label: "29 a 56", value: 1, },
    { label: "57 a 84", value: 2, },
    { label: "85 a 112", value: 3, },
    { label: "113 a 140", value: 4, },
    { label: "141 a 168", value: 5, },
    { label: "169 a 196", value: 6, },
    { label: "197 a 224", value: 7, },
    { label: "225 a 252", value: 8, },
    { label: "253 a 280", value: 9, },
  ];

  const [activeTab, setActiveTab] = React.useState(0); {/* Ativa o hover na primeira paginação do tab de armários*/ }

  let sizeLockers = '';
  switch (size) {
    case 'small':
      sizeLockers = "grid grid-cols-1 col-span-12 gap-4 mt-7 sm:grid-cols-2 sm:col-span-12 md:grid-cols-5 md:col-span-12 lg:grid-cols-6 lg:col-span-12 xl:grid-cols-10 xl:col-span-12 ";
      break;
    default:
      sizeLockers = "grid grid-cols-1 col-span-12 gap-4 mt-7 sm:grid-cols-3 sm:col-span-12 md:grid-cols-6 md:col-span-12 lg:grid-cols-9 lg:col-span-12 xl:grid-cols-12 xl:col-span-12";
  }

  return (
    <>
      <div className={`${sizeLockers}`}>
        {
          currentLockers?.map((element, index) => {
            return (
              <Locker
                key={index}
                nome={element.nome}
                numero={element.numero}
                status={element.status}
              />
            );
          }
          )
        }
      </div>

      <div>  {/* Renderiza o menu dos armários*/}
        <ThemeProvider value={customTheme}>
          <Tabs value={activeTab}>
            <TabsHeader
              className="w-full gap-x-5 gap-y-2 flex-wrap mt-5 text-preto rounded-lg p-0 "
              indicatorProps={{
                className:
                  "w-[5.8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
              }}
            >
              {content.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => {
                    setActiveTab(value);
                    setPagination(value);
                  }}
                  className={
                    activeTab === value
                      ? "text-cinza-50 z-[9] w-[5.65rem] h-[2.5rem] py-0"
                      : "w-[5.65rem] py-2.5"
                  }
                >
                  <p className=" text-fun2 relative z-[5]"> {label}</p>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {content.map(({ value }) => (
                <TabPanel key={value} value={value}></TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </ThemeProvider>
      </div>
    </>
  )
}

export function Locker({ nome, numero, status }) {
  const [isOpenOptions, setIsOpenOptions] = React.useState(false);

  let menuRefLocker = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRefLocker.current.contains(e.target)) {
        setIsOpenOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [])

  function onClickRight(event) {
    event.preventDefault();
    setIsOpenOptions(!isOpenOptions);
  }

  let menu = '';

  return (
    <>
      <div
        onContextMenuCapture={onClickRight}
        key={numero}
        id={numero}
        nome={nome}
        className={`relative col-span-1 ${status == "ocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"} h-24 flex items-center justify-center rounded-lg`}
      >
        <p className="text-h5">{numero}</p>

        <div className='absolute z-1000 top-0 -right-2 ' ref={menuRefLocker}>
          {isOpenOptions && <Options numero={numero} />}
        </div>
      </div>
    </>
  );
}