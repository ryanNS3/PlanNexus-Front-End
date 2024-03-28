import { EstoqueIcon, EstoqueIconLight } from "../../assets/Estoque";
import { DoacaoIcon, DoacaoIconLight } from "../../assets/Doacao";
import { FinanceiroIcon, FinanceiroIconLight } from "../../assets/Financeiro";
import { CalendarioIcon, CalendarioIconLight } from "../../assets/Calendario";
import { HistoricoIcon, HistoricoIconLight } from "../../assets/Historico";
import { GestaoIcon, GestaoIconLight } from "../../assets/Gestao";
import { HomeIcon, HomeIconLight } from "../../assets/Home";
import Logo from "../../assets/logo.svg";
import CompactLogo from "../../assets/compactLogo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  return (
    <aside className="py-10 min-[1471px]:pr-9 flex flex-col gap-12 min-[1471px]:col-span-2 items-center">
      <Link to="/">
        <img className="max-[1471px]:hidden" src={Logo} alt="" />
        <img className="min-[1471px]:hidden" src={CompactLogo} alt="" />
      </Link>

      <nav>
        <ul className="flex flex-col gap-9">
          <SidebarElement text="Home" icon="Home" href="/" />
          <SidebarElement text="Estoque" icon="Estoque" href="/estoque" />
          <SidebarElement text="Doação" icon="Doação" href="/doacao" />
          <SidebarElement
            text="Financeiro"
            icon="Financeiro"
            href="/financeiro"
          />
          <SidebarElement
            text="Calendário"
            icon="Calendário"
            href="/calendario"
          />
          <SidebarElement text="Histórico" icon="Histórico" href="/historico" />
          <SidebarElement text="Gestão" icon="Gestão" href="/gestao" />
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
          <HomeIconLight size={32} />
        ) : isHovered ? (
          <HomeIconLight size={32} />
        ) : (
          <HomeIcon size={32} />
        );

      case "estoque":
      case "Estoque":
        return isActive ? (
          <EstoqueIconLight size={32} />
        ) : isHovered ? (
          <EstoqueIconLight size={32} />
        ) : (
          <EstoqueIcon size={32} />
        );

      case "doação":
      case "Doação":
        return isActive ? (
          <DoacaoIconLight size={32} />
        ) : isHovered ? (
          <DoacaoIconLight size={32} />
        ) : (
          <DoacaoIcon size={32} />
        );

      case "financeiro":
      case "Financeiro":
        return isActive ? (
          <FinanceiroIconLight size={32} />
        ) : isHovered ? (
          <FinanceiroIconLight size={32} />
        ) : (
          <FinanceiroIcon size={32} />
        );

      case "calendário":
      case "Calendário":
        return isActive ? (
          <CalendarioIconLight size={32} />
        ) : isHovered ? (
          <CalendarioIconLight size={32} />
        ) : (
          <CalendarioIcon size={32} />
        );

      case "histórico":
      case "Histórico":
        return isActive ? (
          <HistoricoIconLight size={32} />
        ) : isHovered ? (
          <HistoricoIconLight size={32} />
        ) : (
          <HistoricoIcon size={32} />
        );

      case "gestão":
      case "Gestão":
        return isActive ? (
          <GestaoIconLight size={32} />
        ) : isHovered ? (
          <GestaoIconLight size={32} />
        ) : (
          <GestaoIcon size={32} />
        );

      default:
        return null;
    }
  };

  return (
    <li>
      <Link
        to={href}
        className={`flex items-center justify-start w-full gap-10 px-4 py-5 bg-red-500 rounded-lg font-poppins font-medium relative transition-all duration-150

        // RESPONSIVE SIZES
        

        // ESTILOS DO PSEUDO ELEMENTO AFTER
        
        hover:after:content-[''] hover:after:h-3/5 hover:after:w-1.5 hover:after:absolute hover:after:right-[-1rem] hover:after:bg-rosa-300 hover:after:rounded-lg

        // HOVER
        hover:from-[#BD3FD1] hover:to-[#9332AE] hover:bg-gradient-to-b hover:text-[#fff]
        
        ${
          isActive
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

        <span className="max-[1471px]:absolute max-[1471px]:left-20 max-[1471px]:px-4 max-[1471px]:py-2 max-[1471px]:bg-rosa-300 max-[1471px]:text-ct3 max-[1471px]:hidden rounded-md">
          {text}
        </span>
        
        {isHovered ? (
          <span className="min-[1471px]:hidden max-[1471px]:absolute max-[1471px]:left-20 max-[1471px]:px-4 max-[1471px]:py-2 max-[1471px]:bg-rosa-300 max-[1471px]:text-ct3 rounded-md text-branco">
            {text}
          </span>
        ) : (
          ""
        )}
      </Link>
    </li>
  );
}
