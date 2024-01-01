'use client'

import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    id: string;
    category: string;
    currentUser?: SafeUser | null; 
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    id,
    category,
    currentUser, 
}) => {

    if (imageSrc == '') {
        imageSrc = "/images/book_placeholder.jpg";
    }
    //const { getByValue } = useCountries();

    return (
        <>
            <Heading
                title={title}
                subtitle={`${category}`}
            />
            <div className=" 
                p-1.5
                group
                border-2
                border-gray-200
                hover:shadow-xl
                rounded-lg
                ">
                <div className="
                    aspect-book-cover
                    w-[45vh]
                    overflow-hidden
                    rounded-xl
                    relative
                    ">
                    <Image
                        alt="Image"
                        src={imageSrc}
                        fill
                        className="object-cover w-full"
                    />
                    <div className="absolute top-5 right-5">
                        <HeartButton 
                            listingId={id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default ListingHead;
