"use client";

import React from "react";
import { addToCart } from "@/app/(browse)/audiobook/[id]/actions";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const AddToCart = ({
  id,
  price,
  cart,
}: {
  price: number;
  id: string;
  cart: any;
}) => {
  return (
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
  );
};

export default AddToCart;
