import { useState } from "react";
import { SearchBar } from "../searchBar";
import NotificationSvg from "../../assets/header/notifications.svg";
import ArrowDownSvg from "../../assets/header/nav-arrow-down.svg";

export function Header() {

  const [profileImage, setProfileImage] = useState(null); // Estado para armazenar a imagem de perfil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
 
  // Função para lidar com o upload da imagem de perfil
  const handleProfileImageUpload = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
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
              <div className="absolute top-full bg-branco mt-1 lg:right-4 w-auto h-auto">
                <ul>
                  <li className="text-fun2 text-preto">Ver perfil</li>
                  <button className="text-fun2 text-vermelho-300" onClick={logout}>Sair</button>
                </ul>
              </div>
            )}
 
           
          </button>
        </div>
      </form>
    </header>
  );
}