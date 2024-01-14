'use client'

import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";

interface UserHeadProps {
    name: string | null;
    imageSrc: string | null;
    id: string;
    email: string;
    currentUser?: SafeUser | null; 
}

const UserHead: React.FC<UserHeadProps> = ({
    name,
    imageSrc,
    id,
    email,
    currentUser, 
}) => {

    if (name == null) {
        name = "Anonyme";
    }


    return (
        <>
            {/* <Heading
                title={name}
            /> */}
            <div className="
                group
                hover:shadow-xl
                rounded-full
                ">
                <div className="                    
                    w-[30vh]
                    overflow-hidden
                    rounded-xl
                    relative
                    ">
                    <Image
                        className="rounded-full"
                        height="280"
                        width="280"
                        alt="Image"
                        src={imageSrc || "/images/placeholder.jpg"}                        
                    />              
                </div>
            </div>
        </>
    )
};

export default UserHead;
