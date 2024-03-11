'use client'

import useCartStore from "@/app/hooks/useCartStore";
import { SafeListing, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReactStars from "react-stars";
import AddCartButton from "../AddCartButton";
import Avatar from "../Avatar";

interface ListingInfoProps {
    user: SafeUser;
    data: SafeListing;
    description: string;
    author: string;
    price: number;
    id: string;

}


const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    data,
    description,
    author,
    price,
    id
}) => {
    const router = useRouter();

    const { addItemToCart } = useCartStore();
    const onAddToCart = () => {
        addItemToCart(data);
        toast.success("Added to cart");
    };


    return (
        <div className="col-span-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div onClick={() => router.push(`/users/${user.id}`)}
                    className="
                    text-xl
                    font-semibold
                    flex
                    flex-row
                    items-center
                    gap-2
                    cursor-pointer
                    ">
                    <div> Par {author} </div>
                    <Avatar src={user?.image} />
                </div>
                <div className="
                flex
                flex-row
                items-center
                gap-4
                font-light
                text-neutral-500
                ">
                </div>

            </div>
            
            <div className="border-b py-1"></div>

            <div className="text-lg font-light text-neutral-800 pt-4">
                <div className="font-semibold text-2xl pb-6 text-neutral-500"> Description</div>
                {description}
            </div>

            <div className="border-b py-1"></div>

            <div className="flex flex-row text-xl items-center pt-6 font-semibold">
                        Prix : {price} €
            </div>

            {/* Etoiles pour les reviews */}
            <ReactStars 
                    count={5} 
                    size={24} 
                    color2={'#ffd700'} 
            /> 

            <AddCartButton 
                listingId={id}
                currentUser={user}
                onClick={onAddToCart}
                //onClick={() =>{console.log("Clique panié")}}
             />
                        
            
            
        </div>
    )
};

export default ListingInfo;
