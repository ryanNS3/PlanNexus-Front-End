import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

  const hoverTurmas = url.pathname === "/gestao/turmas" ? "border-b-2 border-transparent" : "hover:border-b-2 hover:border-dashed"
  const hoverFuncionarios = url.pathname === "/gestao/funcionarios" ? "border-b-2 border-transparent" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios = url.pathname === "/gestao/armarios" ? "border-b-2 border-transparent" : "hover:border-b-2 hover:border-dashed"

  return (
    <>
      <nav className="flex bg-cinza-100 rounded-lg text-cinza-800 text-fun2  w-full mt-12 max-w-[74.188] min-w-[23.813rem]">
        <ul className="flex gap-2">
          <li className={` rounded-md py-4 px-5 ${turmasStyle}`}>
            <a
              className={`${hoverTurmas} block`}
              to="/gestao/turmas"
            >
              Turmas
            </Link>
          </li>
          <li className={`py-4 px-5 ${funcionariosStyle}`}>
            <Link
              className={`${hoverFuncionarios} block`}
              to="/gestao/funcionarios"
            >
              Funcionários
            </Link>
          </li>
          <li className={`py-4 px-5 ${armariosStyle}`}>
            <Link
              className={`${hoverArmarios} block`}
              to="/gestao/armarios"
            >
              Armários
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}