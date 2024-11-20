"use client";
import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { useAtom, useAtomValue } from "jotai";
import { mobileMenuAtom } from "@/utils/jotai/instances";

export const MobileMenuButton = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuAtom);
  return (
    <button
      className="md:hidden text-gray-300 hover:text-white"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <Menu className="h-6 w-6" />
    </button>
  );
};

const MobileMenu = () => {
  const mobileMenuState = useAtomValue(mobileMenuAtom);

  return (
    <>
      {mobileMenuState && (
        <nav className="mt-4 md:hidden">
          <Link
            href="/dashboard"
            className="block py-2 text-violet-400 font-medium"
          >
            Library
          </Link>
          <Link href="/wish-list" className="block py-2 text-gray-300">
            Wish List
          </Link>
          <Link href="/browse" className="block py-2 text-gray-300">
            Browse
          </Link>
          <Link href="/plus-catalogue" className="block py-2 text-gray-300">
            Plus Catalogue
          </Link>
          <Link href="/why-audible" className="block py-2 text-gray-300">
            Why Audible?
          </Link>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-10 w-full bg-gray-800 border-gray-700 text-white"
              placeholder="Search for a great book"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
