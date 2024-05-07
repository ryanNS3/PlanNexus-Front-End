import React, { useEffect, useRef } from "react";
import { Percentage } from "../Percentage";
import { VoidDate } from "../VoidDate";
import { ModalOptions } from "../Modal";
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

// export const data = [
//   {
//     numero: 1,
//     status: 'desocupado'
//   },
//   {
//     numero: 2,
//     status: 'desocupado'
//   },

//   {
//     numero: 3,
//     status: 'desocupado'
//   },
//   {
//     numero: 4,
//     status: 'ocupado'
//   },
//   {
//     numero: 5,
//     status: 'ocupado'
//   },
//   {
//     numero: 6,
//     status: 'desocupado'
//   },
//   {
//     numero: 7,
//     status: 'desocupado'
//   },
//   {
//     numero: 8,
//     status: 'desocupado'
//   },
//   {
//     numero: 9,
//     status: 'ocupado'
//   },
//   {
//     numero: 10,
//     status: 'ocupado'
//   },
//   {
//     numero: 11,
//     status: 'desocupado'
//   },
//   {
//     numero: 12,
//     status: 'desocupado'
//   },
//   {
//     numero: 13,
//     status: 'desocupado'
//   },
//   {
//     numero: 14,
//     status: 'ocupado'
//   },
//   {
//     numero: 15,
//     status: 'ocupado'
//   },
//   {
//     numero: 16,
//     status: 'desocupado'
//   },
//   {
//     numero: 17,
//     status: 'desocupado'
//   },
//   {
//     numero: 18,
//     status: 'desocupado'
//   },
//   {

//     numero: 19,
//     status: 'ocupado'
//   },
//   {
//     numero: 20,
//     status: 'ocupado'
//   },
//   {

//     numero: 21,
//     status: 'desocupado'
//   },
//   {
//     numero: 22,
//     status: 'desocupado'
//   },
//   {
//     numero: 23,
//     status: 'desocupado'
//   },
//   {
//     numero: 24,
//     status: 'ocupado'
//   },
//   {
//     numero: 25,
//     status: 'ocupado'
//   },
//   {
//     numero: 26,
//     status: 'desocupado'
//   },
//   {
//     numero: 27,
//     status: 'desocupado'
//   },
//   {
//     numero: 28,
//     status: 'desocupado'
//   },
//   {
//     numero: 29,
//     status: 'desocupado'
//   },
//   {
//     numero: 30,
//     status: 'desocupado'
//   },
//   {
//     numero: 31,
//     status: 'desocupado'
//   },
//   {
//     numero: 32,
//     status: 'ocupado'
//   },
//   {
//     numero: 33,
//     status: 'ocupado'
//   },
//   {
//     numero: 34,
//     status: 'desocupado'
//   },
//   {
//     numero: 35,
//     status: 'desocupado'
//   },
//   {
//     numero: 36,
//     status: 'desocupado'
//   },
//   {
//     numero: 37,
//     status: 'ocupado'
//   },
//   {
//     numero: 38,
//     status: 'ocupado'
//   },
//   {
//     numero: 39,
//     status: 'desocupado'
//   },
//   {
//     numero: 40,
//     status: 'desocupado'
//   },
//   {
//     numero: 41,
//     status: 'desocupado'
//   },
//   {
//     numero: 42,
//     status: 'ocupado'
//   },
//   {
//     numero: 43,
//     status: 'ocupado'
//   },
//   {
//     numero: 44,
//     status: 'desocupado'
//   },
//   {
//     numero: 45,
//     status: 'desocupado'
//   },
//   {
//     numero: 46,
//     status: 'desocupado'
//   },
//   {
//     numero: 47,
//     status: 'ocupado'
//   },
//   {
//     numero: 48,
//     status: 'ocupado'
//   },
//   {
//     numero: 49,
//     status: 'desocupado'
//   },
//   {
//     numero: 50,
//     status: 'desocupado'
//   },
//   {
//     numero: 51,
//     status: 'desocupado'
//   },
//   {
//     numero: 52,
//     status: 'ocupado'
//   },
//   {
//     numero: 53,
//     status: 'ocupado'
//   },
//   {
//     numero: 54,
//     status: 'desocupado'
//   },
//   {
//     numero: 55,
//     status: 'desocupado'
//   },
//   {
//     numero: 56,
//     status: 'desocupado'
//   }, {
//     numero: 57,
//     status: 'desocupado'
//   },
//   {
//     numero: 58,
//     status: 'desocupado'
//   },

//   {
//     numero: 59,
//     status: 'desocupado'
//   },
//   {
//     numero: 60,
//     status: 'ocupado'
//   },
//   {
//     numero: 61,
//     status: 'ocupado'
//   },
//   {
//     numero: 62,
//     status: 'desocupado'
//   },
//   {
//     numero: 63,
//     status: 'desocupado'
//   },
//   {
//     numero: 64,
//     status: 'desocupado'
//   },
//   {
//     numero: 65,
//     status: 'ocupado'
//   },
//   {
//     numero: 66,
//     status: 'ocupado'
//   },
//   {
//     numero: 67,
//     status: 'desocupado'
//   },
//   {
//     numero: 68,
//     status: 'desocupado'
//   },
//   {
//     numero: 69,
//     status: 'desocupado'
//   },
//   {
//     numero: 70,
//     status: 'ocupado'
//   },
//   {
//     numero: 71,
//     status: 'ocupado'
//   },
//   {
//     numero: 72,
//     status: 'desocupado'
//   },
//   {
//     numero: 73,
//     status: 'desocupado'
//   },
//   {
//     numero: 74,
//     status: 'desocupado'
//   },
//   {
//     numero: 75,
//     status: 'ocupado'
//   },
//   {
//     numero: 76,
//     status: 'ocupado'
//   },
//   {
//     numero: 77,
//     status: 'desocupado'
//   },
//   {
//     numero: 78,
//     status: 'desocupado'
//   },
//   {
//     numero: 79,
//     status: 'desocupado'
//   },
//   {
//     numero: 80,
//     status: 'ocupado'
//   },
//   {
//     numero: 81,
//     status: 'ocupado'
//   },
//   {
//     numero: 82,
//     status: 'desocupado'
//   },
//   {
//     numero: 83,
//     status: 'desocupado'
//   },
//   {
//     numero: 84,
//     status: 'desocupado'
//   },
//   {
//     numero: 85,
//     status: 'desocupado'
//   },
//   {
//     numero: 86,
//     status: 'desocupado'
//   },

//   {
//     numero: 87,
//     status: 'desocupado'
//   },
//   {
//     numero: 88,
//     status: 'ocupado'
//   },
//   {
//     numero: 89,
//     status: 'ocupado'
//   },
//   {
//     numero: 90,
//     status: 'desocupado'
//   },
//   {
//     numero: 91,
//     status: 'desocupado'
//   },
//   {
//     numero: 92,
//     status: 'desocupado'
//   },
//   {
//     numero: 93,
//     status: 'ocupado'
//   },
//   {
//     numero: 94,
//     status: 'ocupado'
//   },
//   {
//     numero: 95,
//     status: 'desocupado'
//   },
//   {
//     numero: 96,
//     status: 'desocupado'
//   },
//   {
//     numero: 97,
//     status: 'desocupado'
//   },
//   {
//     numero: 98,
//     status: 'ocupado'
//   },
//   {
//     numero: 99,
//     status: 'ocupado'
//   },
//   {
//     numero: 100,
//     status: 'desocupado'
//   },
//   {
//     numero: 101,
//     status: 'desocupado'
//   },
//   {
//     numero: 102,
//     status: 'desocupado'
//   },
//   {
//     numero: 103,
//     status: 'ocupado'
//   },
//   {
//     numero: 104,
//     status: 'ocupado'
//   },
//   {
//     numero: 105,
//     status: 'desocupado'
//   },
//   {
//     numero: 106,
//     status: 'desocupado'
//   },
//   {
//     numero: 107,
//     status: 'desocupado'
//   },
//   {
//     numero: 108,
//     status: 'ocupado'
//   },
//   {
//     numero: 109,
//     status: 'ocupado'
//   },
//   {
//     numero: 110,
//     status: 'desocupado'
//   },
//   {
//     numero: 111,
//     status: 'desocupado'
//   },
//   {
//     numero: 112,
//     status: 'desocupado'
//   },
// ]

export function AllLocker({ typeUser, formModal }) {
  const { dados, dataLocker, GetLocker } = React.useContext(LockerContext);
  const [pagination, setPagination] = React.useState(0)

  useEffect(() => {
    GetLocker();
  }, []);

  const currentLockers = dataLocker[pagination]

  const [isOpenOptions, setIsOpenOptions] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

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
          <ModalOptions
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            Button={<PinkButton icon={<CampWhite />} text={'Enviar Aviso'} />}
          >
            {formModal}
          </ModalOptions>
        </div>

        <Lockers />

      </div>
    );
  }
}

export function Lockers() {

  const { dataLocker, GetLocker } = React.useContext(LockerContext);
  useEffect(() => {
    GetLocker();
  }, []);

  const [pagination, setPagination] = React.useState(0)

  const currentLockers = dataLocker[pagination]

  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "1 a 28",
      value: 0,
    },
    {
      label: "29 a 56",
      value: 1,
    },
    {
      label: "57 a 84",
      value: 2,
    },
    {
      label: "85 a 112",
      value: 3,
    },
    {
      label: "113 a 140",
      value: 4,
    },
    {
      label: "141 a 168",
      value: 5,
    },
    {
      label: "169 a 196",
      value: 6,
    },
    {
      label: "197 a 224",
      value: 7,
    },
    {
      label: "225 a 252",
      value: 8,
    },
    {
      label: "253 a 280",
      value: 9,
    },
  ];

  const [activeTab, setActiveTab] = React.useState(0); {/* Ativa o hover na primeira paginação do tab de armários*/}
  const [locker, setLocker] = React.useState();

  const handleLocker = (numero)=> {
    locker()


  }




  return (
    <>
      <div className="grid grid-cols-1 col-span-12 gap-4 mt-7 sm:grid-cols-3 sm:col-span-12 md:grid-cols-6 md:col-span-12 lg:grid-cols-9 lg:col-span-12 xl:grid-cols-12 xl:col-span-12">
        {
          currentLockers?.map((element) => {
            return (
              <Locker
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

export function Locker({ id, nome, numero, status }) {
  const [isOpenOptions, setIsOpenOptions] = React.useState(false);
  
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpenOptions(false);
        console.log(menuRef.current)

      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  },[])

  function onClickRight(event) {
    event.preventDefault();
    setIsOpenOptions(!isOpenOptions);
  }

  return (
    <>
      <div
        onContextMenuCapture={onClickRight}
        key={id}
        id={numero}
        nome={nome}
        className={`relative col-span-1 ${status == "ocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
          } h-24 flex items-center justify-center rounded-lg`}
      >
        <p className="text-h5">{numero}</p>

        <div className='absolute z-10 top-0 -right-2' ref={menuRef}>
          {isOpenOptions && <Options numero={numero}/>}
        </div>
      </div>
    </>
  );
}