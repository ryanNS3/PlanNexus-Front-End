import { useState } from "react";
import SearchSvg from "../../assets/header/search.svg";
import NotificationSvg from "../../assets/header/notifications.svg";
import ArrowDownSvg from "../../assets/header/nav-arrow-down.svg";
import ClearSvg from "../../assets/header/xmark.svg";
import { SearchBar } from "../searchBar";

export function Header() {
  const [profileImage, setProfileImage] = useState(null); // Estado para armazenar a imagem de perfil

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
            className="w-6 h-6"
            src={NotificationSvg}
            alt="Ícone de notificação"
          />
        </div>

        <div className="w-20 col-span-1 hidden sm:flex justify-around items-center rounded-2xl bg-cinza-200 ">
          <div className="w-8 h-8 rounded-full bg-cinza-300 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          <label htmlFor="profile-image" className="ml-2 cursor-pointer">
            <img
              src={ArrowDownSvg}
              alt="Ícone de seta para baixo"
              className="w-6 h-6"
            />
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
          </label>
        </div>
      </form>
    </header>
  );
}
