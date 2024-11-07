"use client";

import React from "react";
import { addToCart } from "@/app/audiobook/[id]/actions";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const AddToCart = ({ title, price }: { title: string; price: number }) => {
  return (
    <form className="w-full" action={addToCart}>
      <input
        name="title"
        value={title}
        onChange={() => {}}
        className="hidden"
      />
      <input
        name="price"
        value={price}
        onChange={() => {}}
        className="hidden"
      />

      <Button
        variant="secondary"
        className="w-full bg-orange-500 text-white hover:bg-orange-600"
      >
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart - $
        {price.toFixed(2)}
      </Button>
    </form>
  );
};

export default AddToCart;
