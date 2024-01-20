import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length == 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="Aucun favoris"
                    subtitle="Il semble que vous n'ayez aucun produit en favori."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <div className="mt-10">
                <FavoritesClient
                    listings={listings}
                    currentUser={currentUser}
                />
            </div>
        </ClientOnly>
    )
};

export default FavoritesPage;
