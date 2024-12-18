import { useContext, useState } from "react";
import { UserGlobal } from "../../context/userContext";

import { useNavigate } from "react-router-dom";
import SearchSvg from "../../assets/header/search.svg";
import NotificationSvg from "../../assets/header/notifications.svg";
import ArrowDownSvg from "../../assets/header/nav-arrow-down.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import LogoutSvg from "../../assets/header/logout.svg";

export function Header({ sidebarControllers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userLogoutRequest, userData } = useContext(UserGlobal);
  const navigate = useNavigate();

  const defaultPhoto = "https://static.thenounproject.com/png/2932881-200.png";

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLogout = async () => {
    await userLogoutRequest();
  };

  const handleProfileClick = () => {
    navigate("/funcionario/perfil");
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { setIsSidebarOpen } = sidebarControllers;

  return (
    <header className="col-span-10 mb-8">
      <form className="mt-10 grid grid-cols-12 gap-2">
        <div className="min-[1024px]:hidden flex flex-col gap-1 p-2 pl-0 self-center" onClick={() => setIsSidebarOpen((previous) => !previous)}>
          <span className="block w-8 h-[4px] rounded bg-rosa-400"></span>
          <span className="block w-7 h-[4px] rounded bg-rosa-400"></span>
          <span className="block w-6 h-[4px] rounded bg-rosa-400"></span>
        </div>

        <div className="min-[1024px]:col-start-1 col-start-2 col-end-11 relative">
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleChange}
            className="w-full py-2 pl-10 pr-4 border-[3px] border-cinza-50 rounded-lg focus:outline-none focus:border-rosa-destaque"
          />

          {searchTerm && (
            <img
              className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
              src={ClearSvg}
              alt="Ícone de limpar"
              onClick={clearSearch}
            />
          )}

          <img
            className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 "
            src={SearchSvg}
            alt="Ícone de pesquisar"
          />
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <img
            className="w-6 h-6 cursor-pointer"
            src={NotificationSvg}
            alt="Ícone de notificação"
          />
        </div>

        <div className="w-20 col-span-1 hidden sm:flex justify-around items-center rounded-2xl bg-cinza-100 ">
          <div className="w-8 h-8 rounded-full bg-cinza-50 flex items-center justify-center overflow-hidden">
            {userData && (
              <img
                src={defaultPhoto}
                alt="Foto do usuário"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <button
            onClick={toggleDropdown}
            htmlFor="profile-image"
            className="ml-2 relative cursor-pointer"
          >
            <img
              src={ArrowDownSvg}
              alt="Ícone de seta para baixo"
              className="w-6 h-6"
            />
            {isDropdownOpen && (
              <div className="absolute top-full z-50 border border-cinza-100 mt-4 rounded-lg bg-branco right-1 w-36 h-auto ">
                <ul className="divide-y divide-cinza-100">
                  <li
                    className="px-2 py-2 flex text-fun2 text-preto w-36 "
                    onClick={handleProfileClick}
                  >
                    Ver perfil
                  </li>
                  <li
                    className="px-2 py-2 flex gap-1 w-36 "
                    onClick={handleLogout}
                  >
                    <img src={LogoutSvg} alt="logout" className="" />
                    <span className="text-fun2 text-vermelho-300">Sair</span>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </form>
    </header>
  );
}
