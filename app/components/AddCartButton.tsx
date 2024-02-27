'use client'

import { FaShoppingCart } from "react-icons/fa";
import useFavorite from "../hooks/useFavorite";
import { SafeUser } from "../types";

interface AddCartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
    small?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({
    listingId,
    currentUser,
    small,
    onClick
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    });

    return (
        <button
            onClick={onClick}
            className={`
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
                text-white
                rounded-full
                cursor-pointer
                flex
                justify-center
                items-center
                ${small ? 'bg-[#efc09a]' : 'bg-[#efa568]'}            
                ${small ? 'mt-0' : 'mt-5'}
                ${small ? 'py-3' : 'py-1'}
                ${small ? 'px-3' : 'py-5'}
                ${small ? 'w-20' : 'w-60'}
                ${small ? 'h-8' : 'h-10'}
                ${small ? 'float-right' : ''}
                
                `}>
                <FaShoppingCart
                size={20}
                className={`
                    relative                    
                    
                    ${small ? '' : 'right-3'} 
                    `}/>
                    {small ? '' : 'Ajouter au panier'}         
            </button>
    )
};

export default AddCartButton;
