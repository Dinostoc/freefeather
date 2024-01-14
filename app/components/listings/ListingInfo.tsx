'use client'

import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";

interface ListingInfoProps {
    user: SafeUser;
    description: string;
    author: string;
    price: number;

}


const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    author,
    price
}) => {
    const router = useRouter();

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
            
        </div>
    )
};

export default ListingInfo;
