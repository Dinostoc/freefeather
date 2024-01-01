import getListings from "./actions/getListings";

import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

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
      <Container>
        <div className="font-semibold text-xl pt-24">
        Les récentes paruptions
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
            {listings.map((listing) =>{
              return (
                <ListingCard
                  currentUser={currentUser}
                  key={listing.id}
                  data={listing}
                />
              )
            })}
          </div>
      </Container>
    </ClientOnly>
  )
}
