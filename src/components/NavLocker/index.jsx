import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React,{useState} from 'react'
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";  
import { data } from '../../components/AllLocker'


export function NavLocker({data}) {
  const customTheme = withMT({
        theme: {
            // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
          },
        })
  
  const content = [
    {
      label: "0 a 28",
      value: "",
    },
    {
      label: "29 a 56",
      value: "pag2",
    },
    {
      label: "57 a 84",
      value: "pag3"
    },
    {
      label: "85 a 112",
      value: "pag4",
    },
    {
      label: "113 a 140",
      value: "pag5",
    },
    {
      label: "141 a 168",
      value: "page6",
    },
    {
      label: "169 a 196",
      value: "page7"
    },
    {
      label: "197 a 224",
      value: "page8",
    },
    {
      label: "225 a 252",
      value: "page9",
    },
    {
      label: "253 a 280",
      value: "page10",
    },
  ];


  // const listaArmarios = Array.from( (_,i) => i + 1);
  // const teste = paginacao(10, listaArmarios);
  // console.log(listaArmarios + 'aqui sua lista')


  const [activeTab, setActiveTab] = React.useState("armarios");
  return <ThemeProvider value={customTheme} >
    
    <Tabs value={activeTab}>
      <TabsHeader className="w-full justify-between gap-x-5 gap-y-2 flex-wrap mt-5 bg-cinza-50 text-preto rounded-lg p-0 " 
      indicatorProps={{
          className:
            "w-[5.8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
        }}>
        {content.map(({ label, value }) =>(
          <Tab key={value} value={value}
          onClick={() => setActiveTab(value)}
          className={activeTab === value ? "text-cinza-50 z-[9] w-[5.65rem] h-[2.5rem] py-0" : "w-[5.65rem] py-2.5" } >
            <p className=" text-fun2 relative z-[5]"> {label}</p>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {content.map(({value}) => (
          <TabPanel key={value} value={value}>

          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  </ThemeProvider>
}











//   let divid = data.length
    




//   const url = window.location;
//   const armarios1Style =
//     url.pathname === "/gestao"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios2Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios3Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios4Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios5Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios6Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios7Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios8Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios9Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const armarios10Style =
//     url.pathname === "/gestao/"
//       ? "bg-cinza-800 text-cinza-50 rounded-lg"
//       : "";

//   const hoverArmarios1 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios2 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios3 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios4 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios5 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios6 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios7 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios8 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios9 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
//   const hoverArmarios10 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"

//   return (
//     <>
//       <nav className="flex rounded-lg text-fun2 w-full mt-12 max-w-[74.188] min-w-[23.813rem]">
//         <ul className="flex gap-2 flex-wrap">
//           <li className={`py-4 px-5 ${armarios1Style}`}>
//             <Link
//               className={`${hoverArmarios1} block`}
//               href="/gestao/armarios/"
//             >
//               1 a 28
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios2Style}`}>
//             <Link
//               className={`${hoverArmarios2} block`}
//               href="/gestao/armarios/"
//             >
//               29 a 56
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios3Style}`}>
//             <Link
//               className={`${hoverArmarios3} block`}
//               href="/gestao/armarios/"
//             >
//               57 a 84
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios4Style}`}>
//             <Link
//               className={`${hoverArmarios4} block`}
//               href="/gestao/armarios/"
//             >
//               85 a 112
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios5Style}`}>
//             <Link
//               className={`${hoverArmarios5} block`}
//               href="/gestao/armarios/"
//             >
//               113 a 140
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios6Style}`}>
//             <Link
//               className={`${hoverArmarios6} block`}
//               href="/gestao/armarios/"
//             >
//               141 a 168
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios7Style}`}>
//             <Link
//               className={`${hoverArmarios7} block`}
//               href="/gestao/armarios/"
//             >
//               169 a 196
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios8Style}`}>
//             <Link
//               className={`${hoverArmarios8} block`}
//               href="/gestao/armarios/"
//             >
//               197 a 224
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios9Style}`}>
//             <Link
//               className={`${hoverArmarios9} block`}
//               href="/gestao/armarios/"
//             >
//               225 a 252
//             </Link>
//           </li>
//           <li className={`py-4 px-5 ${armarios10Style}`}>
//             <Link
//               className={`${hoverArmarios10} block`}
//               href="/gestao/armarios/"
//             >
//               253 a 280
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }
