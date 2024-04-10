import { useParams } from "react-router-dom";

export function NavLocker() {
  const url = window.location;
  const armarios1Style =
    url.pathname === "/gestao/armarios"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios2Style =
    url.pathname === "/gestao/armarios/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

  const armarios3Style =
    url.pathname === "/gestao/armarios/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

    const armarios4Style =
    url.pathname === "/gestao/armarios/"
      ? "bg-cinza-800 text-cinza-50 rounded-lg"
      : "";

      const armarios5Style =
      url.pathname === "/gestao/armarios/"
        ? "bg-cinza-800 text-cinza-50 rounded-lg"
        : "";

  const hoverArmarios1 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios2 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios3 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios4 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"
  const hoverArmarios5 = url.pathname === "/gestao/armarios" ? "" : "hover:border-b-2 hover:border-dashed"

  return (
    <>
      <nav className="flex rounded-lg text-fun2 w-full mt-12 max-w-[74.188] min-w-[23.813rem]">
        <ul className="flex gap-2">
          <li className={`py-4 px-5 ${armarios1Style}`}>
            <a
              className={`${hoverArmarios1} block`}
              href="/gestao/armarios"
            >
              1 a 28
            </a>
          </li>
          <li className={`py-4 px-5 ${armarios2Style}`}>
            <a
              className={`${hoverArmarios2} block`}
              href="/gestao/armarios" 
            >
              29 a 56
            </a>
          </li>
          <li className={`py-4 px-5 ${armarios3Style}`}>
            <a
              className={`${hoverArmarios3} block`}
              href="/gestao/armarios"
            >
              57 a 84 
            </a>
          </li>
          <li className={`py-4 px-5 ${armarios3Style}`}>
            <a
              className={`${hoverArmarios3} block`}
              href="/gestao/armarios"
            >
              85 a 112 
            </a>
          </li>
          <li className={`py-4 px-5 ${armarios3Style}`}>
            <a
              className={`${hoverArmarios3} block`}
              href="/gestao/armarios"
            >
              113 a 140
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}