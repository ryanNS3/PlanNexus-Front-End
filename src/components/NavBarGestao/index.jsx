import { useParams } from "react-router-dom";

export function NavBarGestao() {
  const url = window.location;
  const turmasStyle =
    url.pathname === "/home/turmas"
      ? "bg-cinza-800 text-cinza-50"
      : "bg-cinza-100";

  const funcionariosStyle =
    url.pathname === "/home/funcionarios"
      ? "bg-cinza-800 text-cinza-50"
      : "bg-cinza-100";
  const armariosStyle =
    url.pathname === "/home/armarios"
      ? "bg-cinza-800 text-cinza-50"
      : "bg-cinza-100";

  return (
    <>
      <nav className="flex bg-cinza-100 rounded-[0.25rem] text-cinza-800 text-fun2 w-[1143px]">
        <ul className="flex gap-2">
          <li>
            <a
              className={`hover:bg-cinza-800 hover:text-[#f9f9f9] block py-4 px-5 rounded-lg ${turmasStyle}`}
              href="/home/turmas"
            >
              Turmas
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-cinza-800 hover:text-[#f9f9f9] block py-4 px-5 rounded-lg ${funcionariosStyle}`}
              href="/home/funcionarios"
            >
              Funcionários
            </a>
          </li>
          <li>
            <a
              className={`hover:bg-cinza-800 hover:text-[#f9f9f9] block py-4 px-5 rounded-lg ${armariosStyle}`}
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
