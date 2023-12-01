'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useSellModal from '@/app/hooks/useSellModal';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';



interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const sellModal = useSellModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onSell = useCallback(() => {
        if (!currentUser) {
        //_____________________________________________________________________Bonne forme -->____if (!currentUser) {
            return loginModal.onOpen();
        }

        sellModal.onOpen();
    }, [currentUser, loginModal, sellModal]);

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div onClick={onSell}
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-rose-100
                transition
                cursor-pointer
                ">
                    Vendez vos oeuvres
            </div>
            <div onClick={() => {console.log("Voici votre panier")}}
                className='
                relative
                md:block
                py-3
                px-3
                rounded-full
                hover:bg-rose-100
                transition
                cursor-pointer
                '>
                <AiOutlineShoppingCart size={22}/>
                <div className='
                    absolute
                    text-[10px]
                    top-[6px]
                    right-[7px]                    
                    bg-red-500
                    min-w-[14px]
                    h-[14px]
                    rounded-full
                    text-white
                                  
                    '>
                    <div className='
                        flex
                        items-center
                        justify-center
                        -mt-[1px]                        
                        '>
                            1
                    </div>

                </div>
            </div>
            <div onClick={toggleOpen}
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutrl-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                ">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
        </div>
      
        {isOpen && (
            <div className='
                absolute
                rounded-xl
                shadow-md
                w-[30vw]
                md:w-3/4bg-white
                overflow-hidden
                right-0
                top-12
                text-sm
            '>
                <div className='flex flex-col cursor-pointer'>
                    {/* ____________________________________________________________Bonne forme -->___{currentUser ? ( */}
                    {currentUser ? (
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label="Mon compte"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Panier"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Mes commandes"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Mes favories"
                            />
                            <MenuItem
                                onClick={() => signOut()}
                                label="Se déconnecter"
                            />
                        </>

                    ) : (
                    <>
                        <MenuItem
                            onClick={loginModal.onOpen}
                            label="Connexion"
                        />
                        <MenuItem
                            onClick={registerModal.onOpen}
                            label="Inscrivez-vous !"
                        />
                    </>
                    )}
                </div>
            </div>
        )}
    </div>
  )
};

export default UserMenu;
