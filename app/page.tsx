import getListings from "./actions/getListings";

import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import HomeListings from "./HomeListings";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }
  return (
    //<div className="text-rose-500 text-2xl">I am in the page page (/è v é)/</div>
    <ClientOnly>
      <HomeListings
        listings={listings}
        currentUser={currentUser}       
      />
      
    </ClientOnly>
  )
}
