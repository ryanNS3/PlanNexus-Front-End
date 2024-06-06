import { EstoqueIcon, EstoqueIconLight } from "../../assets/Estoque";
import { DoacaoIcon, DoacaoIconLight } from "../../assets/Doacao";
import { FinanceiroIcon, FinanceiroIconLight } from "../../assets/Financeiro";
import { CalendarioIcon, CalendarioIconLight } from "../../assets/Calendario";
import { HistoricoIcon, HistoricoIconLight } from "../../assets/Historico";
import { GestaoIcon, GestaoIconLight } from "../../assets/Gestao";
import { HomeIcon, HomeIconLight } from "../../assets/Home";
import { SettingsIcon, SettingsIconLight } from "../../assets/Settings";
import Logo from "../../assets/logo.svg";
import CompactLogo from "../../assets/compactLogo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-12 py-10 min-[1471px]:pr-9 min-[1471px]:col-span-2 max-[1024px]:absolute max-[1024px]:left-[-100%]">
      <Link to="/" className="w-full">
        <img
          className="max-[1471px]:hidden rounded-lg w-full"
          src={Logo}
          alt=""
        />
        <img className="min-[1471px]:hidden" src={CompactLogo} alt="" />
      </Link>

      <nav
        className="min-[1471px]:w-full"
      >
        <ul className="flex flex-col gap-9">
          <SidebarElement text="Home" icon="Home" href="/" />
          <SidebarElement text="Estoque" icon="Estoque" href="/estoque" />
          <SidebarElement text="Doação" icon="Doação" href="/doacao" />
          <SidebarElement text="Gestão" icon="Gestão" href="/gestao" />
          <SidebarElement text="Configuração" icon="Configuração" href="/config" />
        </ul>
      </nav>
    </aside>
  );
}

import { useMatch, useResolvedPath } from "react-router-dom";

export function SidebarElement({ text, href, icon }) {
  /* PROPS
   * text: STRING
   * href: STRING
   * icon: ENUM("estoque", "Estoque", "doação", "Doação", "financeiro", "Financeiro", "calendário", "Calendário", "histórico", "Histórico", "gestão", "Gestão")
   */

  const [isHovered, setIsHovered] = useState(false);
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname });

  const navIcon = (icon) => {
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

      case "configuração":
      case "Configuração":
        return isActive ? (
          <SettingsIconLight size={24} />
        ) : isHovered ? (
          <SettingsIconLight size={24} />
        ) : (
          <SettingsIcon size={24} />
        );

      default:
        return null;
    }
  };

  return (
    <li>
      <Link
        to={href}
        className={`relative flex items-center justify-start gap-9 m-auto w-full px-4 py-5 bg-red-500 rounded-lg font-poppins font-medium bg-transparent

        // ESTILOS DO PSEUDO ELEMENTO AFTER
        
        hover:after:content-[''] hover:after:h-3/5 hover:after:w-1.5 hover:after:absolute hover:after:right-[-14px] hover:after:bg-rosa-300 hover:after:rounded-lg z-30

        // HOVER
        hover:from-[#BD3FD1] hover:to-[#9332AE] hover:bg-gradient-to-b hover:text-[#fff]
      

        ${
          isActive
            ? `
        shadow-[0_4px_16px_0px_rgba(245,208,255)]

        // ESTILOS DO PSEUDO ELEMENTO AFTER
        after:content-[''] after:h-3/5 after:w-1.5 after:absolute after:right-[-14px] after:bg-rosa-300 after:rounded-lg

        //GRADIENTE
        from-[#BD3FD1] to-[#9332AE] bg-gradient-to-b text-[#fff]`
            : `after:content-[''] after:h-0 after:w-0 after:absolute after:right-[-14px] after:bg-rosa-300 after:rounded-lg`
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {navIcon(icon)}

        <span className="max-[1471px]:hidden">
          {text}
        </span>

        {isHovered && (
          <span className="min-[1471px]:hidden block max-[1471px]:absolute max-[1471px]:left-20 max-[1471px]:px-4 max-[1471px]:py-2 max-[1471px]:bg-rosa-300 max-[1471px]:text-ct3 rounded-md text-branco z-10">
            {text}
          </span>
        )}
      </Link>
    </li>
  );
}
