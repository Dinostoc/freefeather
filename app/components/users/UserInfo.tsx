'use client'

import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import Button from "../Button";

interface ListingInfoProps {
    user: SafeUser;
    currentUser: SafeUser | null;
    // description: string;
    // author: string;
    // price: number;

}


const UserInfo: React.FC<ListingInfoProps> = ({
    user,
    currentUser,
}) => {
    const router = useRouter();

    return (
        <div className="col-span-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <div onClick={() => router.push(`/users/${user.id}`)}
                        className="
                        text-xl
                        font-semibold
                        flex
                        flex-row
                        items-center
                        gap-2
                        ">
                        {user.name}
                    </div>
                    <div className="
                        text-sm
                        mt-1.5
                        text-justify
                        text-neutral-400
                        gap-1
                        ">
                        Membre depuis {user.createdAt}
                    </div>
                    <div className="
                        relative
                        right-0
                        px-40
                        "
                        >
                        {currentUser && currentUser.id === user.id ? (
                            <Button
                                outline
                                small
                                label="Modifier mon profil"
                                onClick={() => {}}
                            />
                        ) : null}
                    </div>
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
                {/* {description} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="border-b py-1"></div>

            <div className="flex flex-row text-xl items-center pt-6 font-semibold">
                        {/* Prix : {price} € */}
            </div>            
        </div>
    )
};

export default UserInfo;
