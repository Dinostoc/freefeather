import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <Container>
            <Heading
                title="Favoris"
                subtitle="Liste des oeuvres ajoutées en favoris !"
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-6
                md-grid-cols-6
                lg-grid-cols-6
                xl-grid-cols-7
                2xl-grid-cols-8
                gap-8
                ">
                    {listings.map((listing) => (
                        <ListingCard
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing}
                        />
                    ))}
            </div>
        </Container>        
    )
};

export default FavoritesClient;
