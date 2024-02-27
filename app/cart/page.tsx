'use client'
import ClientOnly from "../components/ClientOnly";
import Cart from "./CartClient";


const CartPage = async () => {
    //const listings = await getFavoriteListings();
    //const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <div className="mt-10">
                <Cart>
                    
                </Cart>
                {/* <CartClient
                    listings={listings}
                    currentUser={currentUser}
                /> */}
            </div>
        </ClientOnly>
    )
};

export default CartPage;