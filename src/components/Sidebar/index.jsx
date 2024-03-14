import Logo from "../../assets/logo.svg";

export function Sidebar() {
  return (
    <aside className="w-fit py-10 px-9 flex flex-col gap-12 col-start-1 col-end-3">
      <a href="/">
        <img src={Logo} alt="" />
      </a>

      <nav>
        <ul className="flex flex-col gap-9">
          <SidebarElement text="Estoque" icon="Estoque" link="/estoque" />
          <SidebarElement text="Doação" icon="Doação" link="/doacao" />
          <SidebarElement text="Financeiro" icon="Financeiro" link="/financeiro" />
          <SidebarElement text="Calendário" icon="Calendário" link="/calendario" />
          <SidebarElement text="Histórico" icon="Histórico" link="/historico" />
          <SidebarElement text="Gestão" icon="Gestão" link="/gestao" />
        </ul>
      </nav>
    </aside>
  );
}

import EstoqueIcon from "../../assets/estoque.svg";
import DoacaoIcon from "../../assets/doacao.svg";
import FinanceiroIcon from "../../assets/financeiro.svg";
import CalendarioIcon from "../../assets/calendario.svg";
import HistoricoIcon from "../../assets/historico.svg";
import GestaoIcon from "../../assets/gestao.svg";

export function SidebarElement({ text, link, icon }) {
  /* PROPS
    * text: STRING
    * link: STRING
    * icon: ENUM("estoque", "Estoque", "doação", "Doação", "financeiro", "Financeiro", "calendário", "Calendário", "histórico", "Histórico", "gestão", "Gestão")
  */

  const navIcon = (icon) => {
    let iconComponent;

    switch (icon) {
      case "estoque":
      case "Estoque":
        iconComponent = EstoqueIcon;
        break;

      case "doação":
      case "Doação":
        iconComponent = DoacaoIcon;
        break;

      case "financeiro":
      case "Financeiro":
        iconComponent = FinanceiroIcon;
        break;

      case "calendário":
      case "Calendário":
        iconComponent = CalendarioIcon;
        break;

      case "histórico":
      case "Histórico":
        iconComponent = HistoricoIcon;
        break;

      case "gestão":
      case "Gestão":
        iconComponent = GestaoIcon;
        break;

      default:
        break;
    }

    return iconComponent;
  };

  return (
    <li>
      <a
        href={link}
        className="flex items-center justify-start w-full gap-10 px-4 py-5 bg-red-500 rounded-lg font-poppins font-medium text-[#fff] relative 

        // ESTILOS DO PSEUDO ELEMENTO AFTER (Font-weight: 500 não está funcionando)
        after:content-[''] after:h-3/5 after:w-1.5 after:absolute after:right-[-1rem] after:bg-rosa-300 after:rounded-lg
        
        //GRADIENTE
        from-[#BD3FD1] to-[#9332AE] bg-gradient-to-b"
      >
        <img src={navIcon(icon)} alt="" />
        <span>{text}</span>
      </a>
    </li>
  );
}
