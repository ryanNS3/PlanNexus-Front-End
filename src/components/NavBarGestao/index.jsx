import { useParams } from "react-router-dom";

export function NavBarGestao() {
  const url = window.location;
  const turmasStyle =
    url.pathname === "/gestao/turmas"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";

  const funcionariosStyle =
    url.pathname === "/gestao/funcionarios"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";
  const armariosStyle =
    url.pathname === "/gestao/armarios"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";

  const hoverTurmas = url.pathname === "/gestao/turmas" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverFuncionarios = url.pathname === "/gestao/funcionarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"

  return (
    <>
      <nav className="flex bg-cinza-100 rounded-lg text-cinza-800 text-fun2 w-full mt-12 max-w-[74.188] min-w-[23.813rem]">
        <ul className="flex gap-2">
          <li className={`py-4 px-5 ${turmasStyle}`}>
            <a
              className={`${hoverTurmas} block`}
              href="/gestao/turmas"
            >
              Turmas
            </a>
          </li>
          <li className={`py-4 px-5 ${funcionariosStyle}`}>
            <a
              className={`${hoverFuncionarios} block`}
              href="/gestao/funcionarios"
            >
              Funcionários
            </a>
          </li>
          <li className={`py-4 px-5 ${armariosStyle}`}>
            <a
              className={`${hoverArmarios} block`}
              href="/gestao/armarios"
            >
              Armários
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
