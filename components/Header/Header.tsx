"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CartButtonSheet from "../Checkout/CartButtonSheet";
import { Search, Globe, ChevronDown, Menu } from "lucide-react";

import { createClient } from "@/utils/supabase/client";

const Header = () => {
  const supabase = createClient();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error(error);
    }

    if (data.user) {
      setUser(data.user);
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="border-b bg-gray-900 border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-6">
              {/* <Image
                    src="/placeholder.svg?height=40&width=120"
                    width={120}
                    height={40}
                    alt="Audible"
                    className="h-8 w-auto"
                  /> */}
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/library" className="text-violet-400 font-medium">
                Library
              </Link>
              {/* <Link
                    href="/wish-list"
                    className="text-gray-300 hover:text-white"
                  >
                    Wish List
                  </Link> */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-300 hover:text-white">
                  Browse
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              {/* <Link
                    href="/plus-catalogue"
                    className="text-gray-300 hover:text-white"
                  >
                    Plus Catalogue
                  </Link> */}
              <Link
                href="/why-audible"
                className="text-gray-300 hover:text-white"
              >
                Why dollarbook?
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10 bg-gray-800 border-gray-700 text-white"
                placeholder="Search for a great book"
              />
            </div>
            {user && (
              <button className="text-gray-300 hover:text-white hidden md:block">
                Hi, fawaz! <ChevronDown className="inline-block h-4 w-4" />
              </button>
            )}
            {/* <button className="text-gray-300 hover:text-white hidden md:block">
                  0 Credits <ChevronDown className="inline-block h-4 w-4" />
                </button> */}
            <button className="text-gray-300 hover:text-white">
              <Globe className="h-5 w-5" />
            </button>
            {user && <CartButtonSheet />}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <Link
              href="/library"
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
      </div>
    </header>
  );
};

export default Header;
