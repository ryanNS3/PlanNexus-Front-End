import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserGlobal } from "../../context/userContext";


import SearchSvg from "../../assets/header/search.svg";
import NotificationSvg from "../../assets/header/notifications.svg";
import ArrowDownSvg from "../../assets/header/nav-arrow-down.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import LogoutSvg from '../../assets/header/logout.svg'
 
export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userLogoutRequest } = useContext(UserGlobal)
 
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const handleLogout = async () => {
    await userLogoutRequest(); 
  };
 
  // Função para lidar com o upload da imagem de perfil
  // const handleProfileImageUpload = (event) => {
  //   const image = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProfileImage(reader.result);
  //   };
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // };
 
  // Função para limpar o campo de pesquisa
  const clearSearch = () => {
    setSearchTerm("");
  };
 
  // Função para alternar o estado do dropdown
  const toggleDropdown = (event) => {
    event.preventDefault()
    setIsDropdownOpen(!isDropdownOpen);
  };

 
  return (
    <header className="col-span-10 mb-8">
      <form className="mt-10 grid grid-cols-12 gap-2">
        <div className="col-start-1 col-end-11 relative">
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleChange}
            className="w-full py-2 pl-10 pr-4 border-2 border-cinza-50 rounded-lg focus:outline-none focus:border-rosa-destaque"
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
 
 
        <div className="w-20 col-span-1 hidden sm:flex justify-around items-center rounded-2xl bg-cinza-200 ">
          <div className="w-8 h-8 rounded-full bg-cinza-300 flex items-center justify-center overflow-hidden">
            {profileImage && (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
          )}
          </div>
 
          <button  onClick={toggleDropdown} htmlFor="profile-image" className="ml-2 relative cursor-pointer">
            <img
              src={ArrowDownSvg}
              alt="Ícone de seta para baixo"
              className="w-6 h-6"
             
            />
           {isDropdownOpen && (
              <div className="absolute top-full border border-cinza-100 mt-4 rounded-lg bg-branco right-1 w-36 h-auto ">
                <ul className="divide-y divide-cinza-100">
                  <li className="px-2 py-2 flex text-fun2 text-preto w-36 ">Ver perfil</li>
                  <li className="px-2 py-2 flex gap-1 w-36 " onClick={handleLogout} >
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
