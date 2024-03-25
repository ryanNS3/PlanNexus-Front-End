import { useParams } from "react-router-dom";

export function NavBarGestao() {
  const url = window.location;
  const turmasStyle =
    url.pathname === "/home/turmas"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";

  const funcionariosStyle =
    url.pathname === "/home/funcionarios"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";
  const armariosStyle =
    url.pathname === "/home/armarios"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "bg-cinza-100";

  const hoverTurmas = url.pathname === "/home/turmas" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverFuncionarios = url.pathname === "/home/funcionarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios = url.pathname === "/home/armarios" ? "" : "hover:border-b-2 hover:border-dashed"

  return (
    <>
      <nav className="flex bg-cinza-100 rounded-lg text-cinza-800 text-fun2 w-full max-w-[71.438rem] min-w-[23.813rem]">
        <ul className="flex gap-2">
          <li className={`py-4 px-5 ${turmasStyle}`}>
            <a
              className={`${hoverTurmas} block`}
              href="/home/turmas"
            >
              Turmas
            </a>
          </li>
          <li className={`py-4 px-5 ${funcionariosStyle}`}>
            <a
              className={`${hoverFuncionarios} block`}
              href="/home/funcionarios"
            >
              Funcionários
            </a>
          </li>
          <li className={`py-4 px-5 ${armariosStyle}`}>
            <a
              className={`${hoverArmarios} block`}
              href="/home/armarios"
            >
              Armários
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
