import Logo from "../../assets/logo.svg";

export function Sidebar() {
  return (
    <aside className=" py-10 pr-9 pl-0 flex flex-col gap-12 col-span-2">
      {" "}
      {/* border border-indigo-600*/}
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <nav>
        <ul className="flex flex-col gap-9">
          <SidebarElement text="Home" icon="Home" link="/" />
          <SidebarElement text="Estoque" icon="Estoque" link="estoque" />
          <SidebarElement text="Doação" icon="Doação" link="doacao" />
          <SidebarElement
            text="Financeiro"
            icon="Financeiro"
            link="financeiro"
          />
          <SidebarElement
            text="Calendário"
            icon="Calendário"
            link="calendario"
          />
          <SidebarElement text="Histórico" icon="Histórico" link="historico" />
          <SidebarElement text="Gestão" icon="Gestão" link="gestao" />
        </ul>
      </nav>
    </aside>
  );
}

import { EstoqueIcon, EstoqueIconLight } from "../../assets/Estoque";
import { DoacaoIcon, DoacaoIconLight } from "../../assets/Doacao";
import { FinanceiroIcon, FinanceiroIconLight } from "../../assets/Financeiro";
import { CalendarioIcon, CalendarioIconLight } from "../../assets/Calendario";
import { HistoricoIcon, HistoricoIconLight } from "../../assets/Historico";
import { GestaoIcon, GestaoIconLight } from "../../assets/Gestao";
import { HomeIcon, HomeIconLight } from "../../assets/Home";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export function SidebarElement({ text, link, icon }) {
  /* PROPS
   * text: STRING
   * link: STRING
   * icon: ENUM("estoque", "Estoque", "doação", "Doação", "financeiro", "Financeiro", "calendário", "Calendário", "histórico", "Histórico", "gestão", "Gestão")
   */

  const [isHovered, setIsHovered] = useState(false);

  let { page } = useParams();

  if (!page) page = "/";

  const navIcon = (icon) => {
    const isActive = page === link;

    switch (icon) {
      case "Home":
      case "home":
        return isActive ? (
          <HomeIconLight size={24} />
        ) : isHovered ? (
          <HomeIconLight size={24} />
        ) : (
          <HomeIcon size={24} />
        );

      case "estoque":
      case "Estoque":
        return isActive ? (
          <EstoqueIconLight size={24} />
        ) : isHovered ? (
          <EstoqueIconLight size={24} />
        ) : (
          <EstoqueIcon size={24} />
        );

      case "doação":
      case "Doação":
        return isActive ? (
          <DoacaoIconLight size={24} />
        ) : isHovered ? (
          <DoacaoIconLight size={24} />
        ) : (
          <DoacaoIcon size={24} />
        );

      case "financeiro":
      case "Financeiro":
        return isActive ? (
          <FinanceiroIconLight size={24} />
        ) : isHovered ? (
          <FinanceiroIconLight size={24} />
        ) : (
          <FinanceiroIcon size={24} />
        );

      case "calendário":
      case "Calendário":
        return isActive ? (
          <CalendarioIconLight size={24} />
        ) : isHovered ? (
          <CalendarioIconLight size={24} />
        ) : (
          <CalendarioIcon size={24} />
        );

      case "histórico":
      case "Histórico":
        return isActive ? (
          <HistoricoIconLight size={24} />
        ) : isHovered ? (
          <HistoricoIconLight size={24} />
        ) : (
          <HistoricoIcon size={24} />
        );

      case "gestão":
      case "Gestão":
        return isActive ? (
          <GestaoIconLight size={24} />
        ) : isHovered ? (
          <GestaoIconLight size={24} />
        ) : (
          <GestaoIcon size={24} />
        );

      default:
        return null;
    }
  };

  return (
    <li>
      <Link
        to={link}
        className={`grid grid-cols-[auto,_1fr] gap-9 grid-flow-row items-center justify-between w-full px-4 py-5 bg-red-500 rounded-lg font-poppins font-medium relative transition-all duration-150

        // ESTILOS DO PSEUDO ELEMENTO AFTER
        
        hover:after:content-[''] hover:after:h-3/5 hover:after:w-1.5 hover:after:absolute hover:after:right-[-1rem] hover:after:bg-rosa-300 hover:after:rounded-lg

        // HOVER
        hover:from-[#BD3FD1] hover:to-[#9332AE] hover:bg-gradient-to-b hover:text-[#fff]
        
        ${
          page === link
            ? `
        shadow-[0_4px_16px_0px_rgba(245,208,255)]

        // ESTILOS DO PSEUDO ELEMENTO AFTER
        after:content-[''] after:h-3/5 after:w-1.5 after:absolute after:right-[-1rem] after:bg-rosa-300 after:rounded-lg

        //GRADIENTE
        from-[#BD3FD1] to-[#9332AE] bg-gradient-to-b text-[#fff]`
            : `after:content-[''] after:h-0 after:w-0 after:absolute after:right-[-1rem] after:bg-rosa-300 after:rounded-lg`
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navIcon(icon)}
        <span className="break-all">{text}</span>
      </Link>
    </li>
  );
}
