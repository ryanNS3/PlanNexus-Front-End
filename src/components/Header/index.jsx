import { useState } from 'react';
import SearchSvg from '../../assets/header/search.svg';
import NotificationSvg from '../../assets/header/notifications.svg';
import ArrowDownSvg from '../../assets/header/nav-arrow-down.svg';
import ClearSvg from '../../assets/header/xmark.svg';

export function Header() {
    const [searchTerm, setSearchTerm] = useState('');
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

    // Função para limpar o campo de pesquisa
    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <header className='col-span-10'>
            <form className="mt-10 grid grid-cols-12 gap-2 relative">
                <div className="col-start-1 col-end-10">
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
                        className="w-6 h-6"
                        src={NotificationSvg}
                        alt="Ícone de notificação"
                    />
                </div>

                <div className="w-20 col-span-1 hidden sm:flex justify-around items-center rounded-2xl bg-cinza-200 ">
                    <div className="w-8 h-8 rounded-full bg-cinza-300 flex items-center justify-center overflow-hidden">
                        {profileImage ? (
                            <img src={profileImage} alt="Foto de perfil" className="w-full h-full object-cover" />
                        ) : null}
                    </div>

                    <label htmlFor="profile-image" className="ml-2 cursor-pointer">
                        <img src={ArrowDownSvg} alt="Ícone de seta para baixo" className="w-6 h-6" />
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