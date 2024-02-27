'use client'

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { useMemo } from "react";

interface ListingClientProps {
    //reservation?: Reservation[];
    listing: SafeListing & {user: SafeUser};

    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    const category = useMemo(() => {
        return categories.find((item) =>
        item.label == listing.category);
    }, [listing.category]);

    return (
        <Container>
            <div className="flex gap-14 max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead 
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        id={listing.id}
                        category={listing.category}
                        currentUser={currentUser}
                    />
                    
                </div>
                <div className="
                        grid
                        grid-cols-1
                        md:grid-cols-7
                        md:gap-6
                        mt-6
                        ">
                        <ListingInfo
                            user={listing.user}
                            data={listing}
                            //category={category}
                            description={listing.description}
                            author={listing.author}
                            price={listing.price}
                            id={listing.id}
                        />
                        </div>
            </div>
        </Container>
    )
};

export default ListingClient;
