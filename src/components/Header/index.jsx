<<<<<<< HEAD
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserGlobal } from "../../context/userContext";
=======
>>>>>>> e086db8865d1da653825afce95eed202b41b45fa
import { SearchBar } from "../searchBar";
import { useContext, useState } from "react";
import { UserGlobal } from "../../context/userContext";
import NotificationSvg from "../../assets/header/notifications.svg";
import ArrowDownSvg  from "../../assets/header/nav-arrow-down.svg"
import { Navigate } from "react-router-dom";
 
export function Header() {
  const [profileImage, setProfileImage] = useState(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
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
<<<<<<< HEAD
=======
  };
 
  const logout = () => {
    localStorage.removeItem('token');
    <Navigate to='login' />
   
>>>>>>> e086db8865d1da653825afce95eed202b41b45fa
  };

 
  return (
    <header className="col-span-10">
      <form className="mt-10 grid grid-cols-12 gap-2 relative">
                
      <SearchBar/>

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
