'use client'

import { useState } from 'react';
import { SafeListing, SafeUser } from './types';
import getListings from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import Container from "./components/Container";


interface HomeListingsProps {
    //reservation?: Reservation[];
    listings: SafeListing[]; //& {user: SafeUser};

    currentUser?: SafeUser | null;
}

const HomeListings: React.FC<HomeListingsProps> = ({
    listings,
    currentUser
}) => {
    const [displayCount, setDisplayCount] = useState(6);

    const handleDisplayMore = () => {
        setDisplayCount(displayCount + 6);
    };


  return (
    <div>
        {/* Display the first 'displayCount' number of listings */}
        <Container>
            <div className="font-semibold text-xl pt-24">
                Les récentes parutions
            </div>

            <div className="
                pt-9
                grid
                grid-cols-2
                sm:grid-cols-6
                md-grid-cols-6
                lg-grid-cols-6
                xl-grid-cols-7
                2xl-grid-cols-8
                gap-8
                ">
                {(listings.slice(0, displayCount)).map((displayedListing) => {
                return (
                    <ListingCard
                    currentUser={currentUser}
                    key={displayedListing.id}
                    data={displayedListing}
                    />
                )
                })}
            </div>

            {/* Display More Books button */}
            {displayCount < listings.length && (
                <div className="flex justify-center  mt-6 gap-10">
                    <div onClick={handleDisplayMore}
                        className="
                        hidden
                        md:block
                        text-base
                        font-semibold
                        py-2
                        px-4
                        rounded-lg
                        hover:bg-rose-50
                        transition
                        cursor-pointer
                        ">
                            Afficher plus de livres
                    </div>
                </div>
            )}
        </Container>
    </div>
  );
};

export default HomeListings;