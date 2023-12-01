'use client'

import { SafeUser } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";
//import { format } from 'date-fns';

interface ListingCardProps {
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
    
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser,
}) => {
    const router = useRouter();

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return ;
            }

            onAction?.(actionId);
        }, [onAction, actionId, disabled]
    )

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price]);


    const imageSrc = useMemo(() => {
        if (data.imageSrc != '') {
            return data.imageSrc;
        } else {
            return "/images/book_placeholder.jpg";
        }        
    }, [data.imageSrc]);

    /*const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])*/
    

    return (
        <div onClick={() => router.push(`/listings/${data.id}`)}
            //className="col-span-1 cursor-pointer group
            className="max-w-[300px] 
            p-1.5
            group
            border-2
            border-gray-200
            hover:border-gray-400
            hover:shadow-xl
            rounded-lg
        ">
            <div className="flex flex-col gap-2 w-full">
                <div className="
                    aspect-book-cover
                    w-full
                    relative
                    overflow-hidden
                    rounded-xl
                    ">
                    <Image
                        fill
                        alt="Listings"
                        src={imageSrc}
                        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                        className="
                            object-cover
                            h-full
                            w-full
                            transition
                        "
                    />
                    <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {data.title}
                </div>
                <div className="font-light text-neutral-500">
                    {data.author}
                </div>
                <div className="flex flex-row items-center gap-1 font-semibold">
                        {price} €
                </div>
                {/*{onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        smalllabel={actionLabel}
                        onClick={handleCancel}
                )}*/}
            </div>
        </div>
    )
};

export default ListingCard;
