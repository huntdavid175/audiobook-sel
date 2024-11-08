// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { ShoppingCart, X } from "lucide-react";
// import Image from "next/image";

// type CartItem = {
//   id: number;
//   title: string;
//   author: string;
//   price: number;
//   image: string;
// };

// export default function CartButtonSheet() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartItem, setCartItem] = useState<CartItem | null>({
//     id: 1,
//     title: "The Midnight Library",
//     author: "Matt Haig",
//     price: 14.99,
//     image: "https://m.media-amazon.com/images/I/51c7U55rhIL._SL160_.jpg",
//   });

//   const removeItem = () => {
//     setCartItem(null);
//   };

//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetTrigger asChild>
//         {/* <Button variant="outline" size="icon" className="relative">
//           <ShoppingCart className="h-4 w-4" />
//           {cartItem && (
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>

//           )}

//         </Button> */}
//         <button className="text-gray-600 hover:text-black">
//           <ShoppingCart className="h-6 w-6" />
//           {cartItem && (
//             <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               1
//             </span>
//           )}
//         </button>
//       </SheetTrigger>
//       <SheetContent className="w-full sm:max-w-md flex flex-col">
//         <SheetHeader>
//           <SheetTitle>Your Cart</SheetTitle>
//           <SheetDescription>
//             {cartItem ? "You have 1 item in your cart" : "Your cart is empty"}
//           </SheetDescription>
//         </SheetHeader>
//         <div className="flex-grow overflow-auto py-4">
//           {cartItem && (
//             <div className="flex items-center gap-4 py-4 border-b">
//               <Image
//                 src={cartItem.image}
//                 alt={cartItem.title}
//                 width={120}
//                 height={120}
//                 className="rounded-md"
//               />
//               <div className="flex-grow">
//                 <h3 className="font-semibold">{cartItem.title}</h3>
//                 <p className="text-sm text-gray-500">{cartItem.author}</p>
//                 <p className="font-medium mt-2">${cartItem.price.toFixed(2)}</p>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={removeItem}
//                 aria-label="Remove item"
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           )}
//         </div>
//         <div className="border-t pt-4">
//           {cartItem && (
//             <>
//               <div className="flex justify-between items-center mb-4">
//                 <span className="font-semibold">Total</span>
//                 <span className="font-semibold">
//                   ${cartItem.price.toFixed(2)}
//                 </span>
//               </div>
//               <Button className="w-full">Proceed to Checkout</Button>
//             </>
//           )}
//           {!cartItem && (
//             <div className="text-center text-gray-500">
//               <p>Your cart is empty. Add an audiobook to get started!</p>
//             </div>
//           )}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { deleteCartItem } from "@/app/(browse)/audiobook/[id]/actions";
import { atom, useAtom } from "jotai";

export type CartItem = {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
};

export const cartInit = atom<CartItem[]>([]);

export default function CartButtonSheet() {
  const [isOpen, setIsOpen] = useState(false);

  // const [cart, setCart] = useState<CartItem[]>([]);

  const [cartAtom, setCartAtom] = useAtom(cartInit);

  useEffect(() => {
    subscribeToCart();
  }, []);

  const subscribeToCart = async () => {
    const supabase = createClient();
    const { data: userData, error: userDataError } =
      await supabase.auth.getUser();

    if (userDataError) {
      console.error(userDataError);
    }

    if (userData.user) {
      fetchCart(supabase, userData.user?.id);

      supabase
        .channel("cart_channel")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "cart",
            filter: `user_id=eq.${userData.user?.id}`,
          },
          (payload) => {
            fetchCart(supabase, userData.user?.id);
          }
        )
        .on(
          "postgres_changes",
          { event: "DELETE", schema: "public", table: "cart" },
          (payload: any) =>
            setCartAtom((cartAtom: CartItem[]) => {
              return cartAtom.filter(
                (prevItem: CartItem) => prevItem.id !== payload.old.id
              );
            })
        )
        .subscribe();
    }
  };

  const fetchCart = async (supabase: any, userId: string) => {
    const { data: cartData, error: cartDataError } = await supabase
      .from("cart")
      .select("*,book:books(*)")
      .eq("user_id", userId);

    if (cartDataError) {
      console.error(cartDataError);
    }

    console.log(cartData);

    setCartAtom(cartData);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="text-gray-300 hover:text-white relative">
          <ShoppingCart className="h-6 w-6" />
          {cartAtom.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartAtom.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-gray-900 text-gray-100 border-gray-700">
        <SheetHeader>
          <SheetTitle className="text-white">Your Cart</SheetTitle>
          <SheetDescription className="text-gray-400">
            {cartAtom.length > 1
              ? `You have ${cartAtom.length} item in your cart`
              : "Your cart is empty"}
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-auto py-4">
          {cartAtom.length > 0 &&
            cartAtom.map((cartItem: any) => (
              <div
                className="flex items-center gap-4 py-4 border-b border-gray-700"
                key={cartItem.id}
              >
                <Image
                  src={cartItem.book.image}
                  alt={cartItem.book.title}
                  width={120}
                  height={120}
                  className="rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-white">
                    {cartItem.book.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {cartItem.book.author}
                  </p>
                  <p className="font-medium mt-2 text-orange-400">
                    ${cartItem.book.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteCartItem(cartItem.id)}
                  aria-label="Remove item"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
        </div>
        <div className="border-t border-gray-700 pt-4">
          {cartAtom.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-white">Total</span>
                <span className="font-semibold text-orange-400">
                  {cartAtom
                    .reduce(
                      (prevPrice: number, currentItem: any) =>
                        prevPrice + currentItem.book.price,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
                Proceed to Checkout
              </Button>
            </>
          )}
          {cartAtom.length < 1 && (
            <div className="text-center text-gray-400">
              <p>Your cart is empty. Add an audiobook to get started!</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
