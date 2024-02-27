import { create } from "zustand";
// import CartProduct from "../types/CartProduct";
// import Product from "../types/Product";
import { CartProduct, SafeListing } from "../types";



interface CartState {
  cartItems: CartProduct[];
  //addItemToCart: (item: SafeListing) => void;
  addItemToCart: (item: SafeListing) => void;
  increaseQuantity: (productId: String) => void;
  decreaseQuantity: (productId: String) => void;
  removeItemFromCart: (productId: String) => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

  addItemToCart: (item) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    console.log(itemExists);

    
    if (itemExists) {
      //if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      //}

      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },

  increaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      }

      set({ cartItems: [...get().cartItems] });
    }
  },


  decreaseQuantity: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        if (itemExists.quantity === 1) {
          const updatedCartItems = get().cartItems.filter(
            (item) => item.id !== productId
          );
          set({ cartItems: updatedCartItems });
        } else {
          itemExists.quantity--;
          set({ cartItems: [...get().cartItems] });
        }
      }
    }
  },

  removeItemFromCart: (productId) => {
    const itemExists = get().cartItems.find(
      (cartItem) => cartItem.id === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        const updatedCartItems = get().cartItems.filter(
          (item) => item.id !== productId
        );
        set({ cartItems: updatedCartItems });
      }
    }
  },
}));

export default useCartStore;