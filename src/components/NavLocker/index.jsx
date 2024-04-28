import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export function NavLocker() {
  const url = window.location;
  const armarios1Style =
    url.pathname === "/gestao"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios2Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios3Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios4Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios5Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios6Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios7Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios8Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios9Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios10Style =
    url.pathname === "/gestao/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const hoverArmarios1 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios2 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios3 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios4 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios5 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios6 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios7 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios8 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios9 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios10 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"

  return (
    <>
      <nav className="flex rounded-lg text-fun2 w-full mt-12 max-w-[74.188] min-w-[23.813rem]">
        <ul className="flex gap-2 flex-wrap">
          <li className={`py-4 px-5 ${armarios1Style}`}>
            <Link
              className={`${hoverArmarios1} block`}
              href="/gestao/armarios/"
            >
              1 a 28
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios2Style}`}>
            <Link
              className={`${hoverArmarios2} block`}
              href="/gestao/armarios/"
            >
              29 a 56
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios3Style}`}>
            <Link
              className={`${hoverArmarios3} block`}
              href="/gestao/armarios/"
            >
              57 a 84
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios4Style}`}>
            <Link
              className={`${hoverArmarios4} block`}
              href="/gestao/armarios/"
            >
              85 a 112
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios5Style}`}>
            <Link
              className={`${hoverArmarios5} block`}
              href="/gestao/armarios/"
            >
              113 a 140
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios6Style}`}>
            <Link
              className={`${hoverArmarios6} block`}
              href="/gestao/armarios/"
            >
              141 a 168
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios7Style}`}>
            <Link
              className={`${hoverArmarios7} block`}
              href="/gestao/armarios/"
            >
              169 a 196
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios8Style}`}>
            <Link
              className={`${hoverArmarios8} block`}
              href="/gestao/armarios/"
            >
              197 a 224
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios9Style}`}>
            <Link
              className={`${hoverArmarios9} block`}
              href="/gestao/armarios/"
            >
              225 a 252
            </Link>
          </li>
          <li className={`py-4 px-5 ${armarios10Style}`}>
            <Link
              className={`${hoverArmarios10} block`}
              href="/gestao/armarios/"
            >
              253 a 280
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
