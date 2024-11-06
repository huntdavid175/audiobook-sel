import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-violet-400 font-bold text-2xl">
            dollarbook
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-black hover:text-violet-400">
              Browse
            </Link>
            <Link href="#" className="text-black hover:text-violet-400">
              Why DollarBook?
            </Link>
            {/* <Link href="#" className="text-black hover:text-violet-400">
            Blog
          </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              className="w-[300px] pl-10 bg-white"
              placeholder="Search for a great book"
            />
          </div>
          <div className="flex items-center gap-4 text-white">
            <Link href="#" className="hover:text-violet-400">
              Contact Us
            </Link>
            <Button variant="ghost" size="sm" className="text-white">
              <Globe className="w-4 h-4 mr-2" />
              English
            </Button>
            <Link href="#" className="hover:text-violet-400">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
