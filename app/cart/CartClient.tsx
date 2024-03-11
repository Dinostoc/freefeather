import toast from "react-hot-toast";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import useCartStore from "../hooks/useCartStore";




const Cart = () => {
    const { cartItems } = useCartStore();
    // A supprimer quand fini d'implementer le panier
    console.log(cartItems);

    // const arrayUniqueByKey = cartItems.map(item => item.id)
    // .filter((value, index, self) => self.indexOf(value) === index)

    const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();
    const onIncreaseQuantity = (productId: String) => {
      increaseQuantity(productId);
      toast.success("Augmenté");
    };
    const onDecreaseQuantity = (productId: String) => {
      decreaseQuantity(productId);
      toast.success("Diminué");
    };
    const onRemoveItem = (productId: String) => {
      removeItemFromCart(productId);
      toast.success("Supprimé");
    };


  
    if (cartItems && cartItems.length < 1) {
      return (
        <div className="h-72 flex flex-col items-center justify-center">
          <h2 className="text-3xl mt-10 mb-5 font-bold">Votre panier est vide</h2>
          {/* <Link
            to="/shop"
            className="px-6 py-2 rounded-md text-white bg-orange-500"
          >
            Shop
          </Link> */}
        </div>
      );
    }
  
    return (
      <div>
        <Container>
        <div className="font-semibold text-xl pt-8">
                Votre panier
        </div>

      
        {/* <div className=" flex  flex-col-reverse md:flex-row  gap-10 items-center md:items-start md:select-none md:justify-between"> */}
        <div className="
                  pt-9
                  grid
                  grid-cols-2
                  sm:grid-cols-7
                  md-grid-cols-7
                  lg-grid-cols-7
                  xl-grid-cols-8
                  2xl-grid-cols-9
                  gap-8
                  ">
        {/* <div className="flex flex-wrap flex-col md:flex-row mb-10  gap-10 "> */}
          
            {cartItems?.map((item) => (
              // <CartItemCard product={item} />
              <div className="
                relative
              ">
                <ListingCard
                  currentUser={null}
                  key={item.id}
                  data={item}
                />
                            
                <div className="
                  flex
                  justify-center
                  align-center
                  border-3
                  shadow-md
                  w-3/4
                  top-1/2
                  left-1/2
                  translate-x-5
                  translate-y-1/4
                ">
                  <button onClick={() => onDecreaseQuantity(item.id)}
                  className="
                    px-0.5
                    py-0.5
                    w-12
                    text-base
                    text-center
                    bg-gray-200
                    rounded
                    hover:bg-gray-300
                  ">
                    -
                  </button>

                  <input type="text" value={item.quantity}
                    className="
                    px-0.5
                    py-0.5
                    w-12
                    text-base
                    text-center
                    "/>
                  <button onClick={() => onIncreaseQuantity(item.id)}
                    className="
                    px-0.5
                    py-0.5
                    w-12
                    text-base
                    text-center
                    bg-gray-200
                    rounded
                    hover:bg-gray-300
                  ">
                    +
                  </button>
                </div>
                <button onClick={() => onRemoveItem(item.id)}
                  className="
                  mt-2
                  px-8
                  text-sm
                  text-blue-400
                  hover:text-blue-500
                  underline
                  underline-offset-2
                ">
                  Retirer du panier
                </button>
              </div>
            ))}

          {/* </div> */}
    
          {/* <div className="md:sticky md:top-28 bg-orange-500 text-white flex-none w-72 h-[300px] rounded-2xl">
            <OrderValue />
          </div> */}
          </div>
          </Container>
        </div>
    );
  };
export default Cart;







// interface CartClientProps {
//     // listings: SafeListing[];
//     listings: CartProduct[];
//     currentUser?: SafeUser | null;
// }

// const CartClient: React.FC<CartClientProps> = ({
//     listings,
//     currentUser
// }) => {
//     return (
//         <Container>
//             <Heading
//                 title="Panier"
//                 subtitle="Votre panier"
//             />
//             <div className="
//                 mt-10
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-6
//                 md-grid-cols-6
//                 lg-grid-cols-6
//                 xl-grid-cols-7
//                 2xl-grid-cols-8
//                 gap-8
//                 ">
//                     {listings.map((listing) => (
//                         <ListingCard
//                             currentUser={currentUser}
//                             key={listing.id}
//                             data={listing}
//                         />
//                     ))}
//             </div>
//         </Container>        
//     )
// };

// export default CartClient;