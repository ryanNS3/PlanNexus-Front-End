import { SidebarElement } from "../../atoms/SidebarElement";
import Logo from "../../../assets/logo.svg";

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

