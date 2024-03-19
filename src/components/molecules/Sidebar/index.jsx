import { SidebarElement } from "../../atoms/SidebarElement";
import Logo from "../../../assets/logo.svg";

export function Sidebar() {
  return (
    <aside className=" py-10 pr-9 pl-0 flex flex-col gap-12 col-span-2"> {/* border border-indigo-600*/}
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

