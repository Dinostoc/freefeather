'use client';

import { useCallback, useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { PiUserSwitch } from "react-icons/pi";
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useSellModal from '@/app/hooks/useSellModal';

import useCartStore from '@/app/hooks/useCartStore';
import { SafeUser } from '@/app/types';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';



interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const sellModal = useSellModal();
    const [isOpen, setIsOpen] = useState(false);

    const { cartItems } = useCartStore();
    const cartCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

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
            <div onClick={() => router.push('/cart')}
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
                {/* Affichage du compteur du panier seulementi si il contient des elements */}
                {cartItems.length > 0 ? 
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
                                {cartCount}
                        </div>
                    </div>
                : null}

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

            <div className="
                rounded-full
                hover:bg-blue-100
                p-1
                transition
            ">
                <PiUserSwitch size={24}/>
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
                                onClick={() => router.push(`/users/${currentUser.id}`)}
                                label="Mon compte"
                            />
                            <MenuItem
                                //onClick={() => router.push('/cart')}
                                onClick={() => {console.log(cartItems)}}
                                label="Panier"
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Mes commandes"
                            />
                            <MenuItem
                                onClick={() => router.push('/favorites')}
                                label="Mes favoris"
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
