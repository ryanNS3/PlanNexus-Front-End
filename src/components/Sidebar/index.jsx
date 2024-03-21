import { EstoqueIcon, EstoqueIconLight } from "../../assets/Estoque";
import { DoacaoIcon, DoacaoIconLight } from "../../assets/Doacao";
import {
  FinanceiroIcon,
  FinanceiroIconLight,
} from "../../assets/Financeiro";
import {
  CalendarioIcon,
  CalendarioIconLight,
} from "../../assets/Calendario";
import { HistoricoIcon, HistoricoIconLight } from "../../assets/Historico";
import { GestaoIcon, GestaoIconLight } from "../../assets/Gestao";
import { HomeIcon, HomeIconLight } from "../../assets/Home";
import Logo from "../../assets/logo.svg";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  return (
    <aside className="w-fit py-10 px-9 flex flex-col gap-12 col-start-1 col-end-3">
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <nav>
        <ul className="flex flex-col gap-9">
          <SidebarElement text="Home" icon="Home" link="/" />
          <SidebarElement text="Estoque" icon="Estoque" link="estoque" />
          <SidebarElement text="Doação" icon="Doação" link="doacao" />
          <SidebarElement text="Financeiro" icon="Financeiro" link="financeiro" />
          <SidebarElement text="Calendário" icon="Calendário" link="calendario" />
          <SidebarElement text="Histórico" icon="Histórico" link="historico" />
          <SidebarElement text="Gestão" icon="Gestão" link="gestao" />
        </ul>
      </nav>
    </aside>
  );
}

export function SidebarElement({ text, link, icon }) {
  /* PROPS
   * text: STRING
   * link: STRING
   * icon: ENUM("estoque", "Estoque", "doação", "Doação", "financeiro", "Financeiro", "calendário", "Calendário", "histórico", "Histórico", "gestão", "Gestão")
   */

  const [isHovered, setIsHovered] = useState(false);

  let { page } = useParams();

  if (!page)
    page = "/"

  const navIcon = (icon) => {
    const isActive = page === link;

    switch (icon) {
      case "Home":
      case "home":
        return isActive ? (
          <HomeIconLight />
        ) : isHovered ? (
          <HomeIconLight />
        ) : (
          <HomeIcon />
        );

      case "estoque":
      case "Estoque":
        return isActive ? (
          <EstoqueIconLight />
        ) : isHovered ? (
          <EstoqueIconLight />
        ) : (
          <EstoqueIcon />
        );

      case "doação":
      case "Doação":
        return isActive ? (
          <DoacaoIconLight />
        ) : isHovered ? (
          <DoacaoIconLight />
        ) : (
          <DoacaoIcon />
        );

      case "financeiro":
      case "Financeiro":
        return isActive ? (
          <FinanceiroIconLight />
        ) : isHovered ? (
          <FinanceiroIconLight />
        ) : (
          <FinanceiroIcon />
        );

      case "calendário":
      case "Calendário":
        return isActive ? (
          <CalendarioIconLight />
        ) : isHovered ? (
          <CalendarioIconLight />
        ) : (
          <CalendarioIcon />
        );

      case "histórico":
      case "Histórico":
        return isActive ? (
          <HistoricoIconLight />
        ) : isHovered ? (
          <HistoricoIconLight />
        ) : (
          <HistoricoIcon />
        );

      case "gestão":
      case "Gestão":
        return isActive ? (
          <GestaoIconLight />
        ) : isHovered ? (
          <GestaoIconLight />
        ) : (
          <GestaoIcon />
        );

      default:
        return null;
    }
  };

  return (
    <li>
      <Link
        to={link}
        className={`flex items-center justify-start w-full gap-10 px-4 py-5 bg-red-500 rounded-lg font-poppins font-medium relative transition-all duration-150

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
        <span>{text}</span>
      </Link>
    </li>
  );
}