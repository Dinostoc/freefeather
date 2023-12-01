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
        <div className="
          pt-24
          grid
          grid-cols-2
          sm:grid-cols-5
          md-grid-cols-5
          lg-grid-cols-6
          xl-grid-cols-7
          2xl-grid-cols-8
          gap-8
          ">
            {listings.map((listing: any) =>{
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
