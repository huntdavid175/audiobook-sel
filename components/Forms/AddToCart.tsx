"use client";

import React, { useEffect, useState } from "react";
import { addToCart } from "@/app/(browse)/audiobook/[id]/actions";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useAtomValue, useSetAtom, atom } from "jotai";
import { CartItem, cartInit } from "../Checkout/CartButtonSheet";

const AddToCart = ({
  title,
  price,
  author,
  image,
  id,
}: {
  title: string;
  price: number;
  author: string;
  image: string;
  id: string;
}) => {
  const cartAtomState = useAtomValue(cartInit);

  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const availableItem = cartAtomState.find(
      (cartItem: any) => cartItem.book.id === id
    );

    if (!availableItem) setIsInCart(true);
  }, [cartAtomState]);

  return (
    <>
      {!isInCart && (
        <form className="w-full" action={addToCart}>
          <input name="id" value={id} onChange={() => {}} className="hidden" />

          <Button
            variant="secondary"
            className="w-full bg-orange-500 text-white hover:bg-orange-600 hover:animate-wobble"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart - $
            {price.toFixed(2)}
          </Button>
        </form>
      )}
    </>
  );
};

export default AddToCart;
