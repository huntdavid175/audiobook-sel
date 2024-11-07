// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ChevronDown, Globe, Search, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import CartButtonSheet from "@/components/Checkout/CartButtonSheet";

// export default function Component() {
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [selectedSort, setSelectedSort] = useState("date-added");

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="border-b border-gray-200">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-8">
//               <Link href="/" className="flex items-center">
//                 <Image
//                   src="/placeholder.svg?height=40&width=120"
//                   width={120}
//                   height={40}
//                   alt="Audible"
//                   className="h-10"
//                 />
//               </Link>
//               <nav className="hidden md:flex items-center gap-6">
//                 <Link href="/library" className="text-black font-medium">
//                   Library
//                 </Link>
//                 {/* <Link
//                   href="/wish-list"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Wish List
//                 </Link> */}
//                 <div className="relative group">
//                   <button className="flex items-center gap-1 text-gray-600 hover:text-black">
//                     Browse
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                 </div>
//                 {/* <Link
//                   href="/plus-catalogue"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Plus Catalogue
//                 </Link> */}
//                 {/* <Link
//                   href="/why-audible"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Why Audible?
//                 </Link> */}
//               </nav>
//             </div>

//             <div className="flex items-center gap-6">
//               <div className="relative hidden md:block w-[300px]">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                 <Input
//                   className="pl-10"
//                   placeholder="Search for a great book"
//                 />
//               </div>
//               <div className="flex items-center gap-4">
//                 <button className="text-gray-600 hover:text-black">
//                   Hi, Jake! <ChevronDown className="inline-block h-4 w-4" />
//                 </button>
//                 {/* <button className="text-gray-600 hover:text-black">
//                   0 Credits Available{" "}
//                   <ChevronDown className="inline-block h-4 w-4" />
//                 </button> */}
//                 <Link
//                   href="/contact"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Contact Us
//                 </Link>
//                 <button className="flex items-center gap-1 text-gray-600 hover:text-black">
//                   <Globe className="h-4 w-4" />
//                   English
//                 </button>
//                 <CartButtonSheet />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">Library</h1>
//           <div className="relative w-[300px]">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <Input className="pl-10" placeholder="Search your library" />
//           </div>
//         </div>

//         {/* Library Navigation */}
//         <nav className="mb-8">
//           <ul className="flex gap-6 border-b border-gray-200">
//             <li>
//               <Link
//                 href="#all"
//                 className="inline-block px-1 py-4 text-black font-medium border-b-2 border-black"
//               >
//                 All
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#audiobooks"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Audiobooks
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#podcasts"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Podcasts
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#wish-list"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Wish List
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#collections"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Collections
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#authors"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Authors
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Filters */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex gap-4">
//             <Button
//               variant={selectedFilter === "all" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("all")}
//               className="rounded-full"
//             >
//               All titles
//             </Button>
//             <Button
//               variant={selectedFilter === "finished" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("finished")}
//               className="rounded-full"
//             >
//               Finished
//             </Button>
//             <Button
//               variant={selectedFilter === "unfinished" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("unfinished")}
//               className="rounded-full"
//             >
//               Unfinished
//             </Button>
//           </div>
//           <div className="flex gap-4">
//             <Select defaultValue={selectedSort} onValueChange={setSelectedSort}>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="date-added">Date Added</SelectItem>
//                 <SelectItem value="title">Title</SelectItem>
//                 <SelectItem value="author">Author</SelectItem>
//                 <SelectItem value="length">Length</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button variant="outline">Select</Button>
//           </div>
//         </div>

//         {/* Empty State */}
//         <div className="text-center py-16">
//           <h2 className="text-2xl font-semibold mb-4">
//             Your Library looks empty
//           </h2>
//           <p className="text-gray-600 mb-8">
//             When you buy or add titles to your Library, they&apos;ll be
//             displayed here.
//           </p>
//           <Button className="rounded-full">Browse Catalog</Button>
//         </div>
//       </main>
//     </div>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   ChevronDown,
//   Globe,
//   Search,
//   ShoppingCart,
//   Play,
//   Menu,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import CartButtonSheet from "@/components/Checkout/CartButtonSheet";

// const audiobooks = [
//   {
//     id: 1,
//     title: "The Midnight Library",
//     author: "Matt Haig",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 75,
//   },
//   {
//     id: 2,
//     title: "Atomic Habits",
//     author: "James Clear",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 30,
//   },
//   {
//     id: 3,
//     title: "Project Hail Mary",
//     author: "Andy Weir",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 100,
//   },
//   {
//     id: 4,
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 50,
//   },
//   {
//     id: 5,
//     title: "Dune",
//     author: "Frank Herbert",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 10,
//   },
//   {
//     id: 6,
//     title: "The Sandman",
//     author: "Neil Gaiman",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 0,
//   },
// ];

// export default function Component() {
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [selectedSort, setSelectedSort] = useState("date-added");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="border-b border-gray-200">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Link href="/" className="flex items-center mr-6">
//                 <Image
//                   src="/placeholder.svg?height=40&width=120"
//                   width={120}
//                   height={40}
//                   alt="Audible"
//                   className="h-8 w-auto"
//                 />
//               </Link>
//               <nav className="hidden md:flex items-center space-x-6">
//                 <Link href="/library" className="text-black font-medium">
//                   Library
//                 </Link>
//                 <Link
//                   href="/wish-list"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Wish List
//                 </Link>
//                 <div className="relative group">
//                   <button className="flex items-center gap-1 text-gray-600 hover:text-black">
//                     Browse
//                     <ChevronDown className="h-4 w-4" />
//                   </button>
//                 </div>
//                 <Link
//                   href="/plus-catalogue"
//                   className="text-gray-600 hover:text-black"
//                 >
//                   Plus Catalogue
//                 </Link>
//               </nav>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="hidden md:block relative w-64">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                 <Input
//                   className="pl-10"
//                   placeholder="Search for a great book"
//                 />
//               </div>
//               <button className="text-gray-600 hover:text-black hidden md:block">
//                 Hi, fawaz! <ChevronDown className="inline-block h-4 w-4" />
//               </button>
//               <button className="text-gray-600 hover:text-black hidden md:block">
//                 0 Credits <ChevronDown className="inline-block h-4 w-4" />
//               </button>
//               <button className="text-gray-600 hover:text-black">
//                 <Globe className="h-5 w-5" />
//               </button>
//               <CartButtonSheet />
//               <button
//                 className="md:hidden"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <nav className="mt-4 md:hidden">
//               <Link
//                 href="/library"
//                 className="block py-2 text-black font-medium"
//               >
//                 Library
//               </Link>
//               <Link href="/wish-list" className="block py-2 text-gray-600">
//                 Wish List
//               </Link>
//               <Link href="/browse" className="block py-2 text-gray-600">
//                 Browse
//               </Link>
//               <Link href="/plus-catalogue" className="block py-2 text-gray-600">
//                 Plus Catalogue
//               </Link>
//               <Link href="/why-audible" className="block py-2 text-gray-600">
//                 Why Audible?
//               </Link>
//               <div className="relative mt-4">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                 <Input
//                   className="pl-10 w-full"
//                   placeholder="Search for a great book"
//                 />
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <h1 className="text-3xl font-bold mb-4 md:mb-0">Library</h1>
//           <div className="w-full md:w-auto">
//             <Input
//               className="w-full md:w-64"
//               placeholder="Search your library"
//             />
//           </div>
//         </div>
//         {/* Library Navigation */}
//         <nav className="mb-8 overflow-x-auto">
//           <ul className="flex whitespace-nowrap border-b border-gray-200">
//             <li className="mr-6">
//               <Link
//                 href="#all"
//                 className="inline-block px-1 py-4 text-black font-medium border-b-2 border-black"
//               >
//                 All
//               </Link>
//             </li>
//             <li className="mr-6">
//               <Link
//                 href="#audiobooks"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Audiobooks
//               </Link>
//             </li>
//             <li className="mr-6">
//               <Link
//                 href="#podcasts"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Podcasts
//               </Link>
//             </li>
//             <li className="mr-6">
//               <Link
//                 href="#wish-list"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Wish List
//               </Link>
//             </li>
//             <li className="mr-6">
//               <Link
//                 href="#collections"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Collections
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#authors"
//                 className="inline-block px-1 py-4 text-gray-600 hover:text-black"
//               >
//                 Authors
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         {/* Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
//           <div className="flex flex-wrap gap-2">
//             <Button
//               variant={selectedFilter === "all" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("all")}
//               className="rounded-full"
//             >
//               All titles
//             </Button>
//             <Button
//               variant={selectedFilter === "finished" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("finished")}
//               className="rounded-full"
//             >
//               Finished
//             </Button>
//             <Button
//               variant={selectedFilter === "unfinished" ? "default" : "outline"}
//               onClick={() => setSelectedFilter("unfinished")}
//               className="rounded-full"
//             >
//               Unfinished
//             </Button>
//           </div>
//           <div className="flex gap-2 w-full md:w-auto">
//             <Select defaultValue={selectedSort} onValueChange={setSelectedSort}>
//               <SelectTrigger className="w-full md:w-[180px]">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="date-added">Date Added</SelectItem>
//                 <SelectItem value="title">Title</SelectItem>
//                 <SelectItem value="author">Author</SelectItem>
//                 <SelectItem value="length">Length</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button variant="outline">Select</Button>
//           </div>
//         </div>
// {
/* Audiobooks Grid */
// }
// {
/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {audiobooks.map((book) => (
            <div key={book.id} className="flex flex-col">
              <div className="relative aspect-square mb-2">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  <Button size="icon" variant="ghost" className="text-white">
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
                {book.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          ))}
        </div> */
// }
// {
/* Empty State */
// }

// {
/* <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">
            Your Library looks empty
          </h2>

          <p className="text-gray-600 mb-8">
            When you buy or add titles to your Library, they&apos;ll be
            displayed here.
          </p>
          <Button className="rounded-full">Browse Catalog</Button>
        </div>
      </main>
    </div>
  );
} */
// }

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  Globe,
  Search,
  // ShoppingCart,
  // Play,
  Menu,
} from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
// import CartSheet from "@/components/Checkout/CartButtonSheet";
import CartButtonSheet from "@/components/Checkout/CartButtonSheet";

// const audiobooks = [
//   {
//     id: 1,
//     title: "The Midnight Library",
//     author: "Matt Haig",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 75,
//   },
//   {
//     id: 2,
//     title: "Atomic Habits",
//     author: "James Clear",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 30,
//   },
//   {
//     id: 3,
//     title: "Project Hail Mary",
//     author: "Andy Weir",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 100,
//   },
//   {
//     id: 4,
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 50,
//   },
//   {
//     id: 5,
//     title: "Dune",
//     author: "Frank Herbert",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 10,
//   },
//   {
//     id: 6,
//     title: "The Sandman",
//     author: "Neil Gaiman",
//     cover: "/placeholder.svg?height=240&width=240",
//     progress: 0,
//   },
// ];

export default function Component() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("date-added");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000914] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-700">
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
                  Why Audible?
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
              <button className="text-gray-300 hover:text-white hidden md:block">
                Hi, fawaz! <ChevronDown className="inline-block h-4 w-4" />
              </button>
              {/* <button className="text-gray-300 hover:text-white hidden md:block">
                0 Credits <ChevronDown className="inline-block h-4 w-4" />
              </button> */}
              <button className="text-gray-300 hover:text-white">
                <Globe className="h-5 w-5" />
              </button>
              <CartButtonSheet />
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Library</h1>
          <div className="w-full md:w-auto">
            <Input
              className="w-full md:w-64 bg-gray-800 border-gray-700 text-white"
              placeholder="Search your library"
            />
          </div>
        </div>

        {/* Library Navigation */}
        <nav className="mb-8 overflow-x-auto">
          <ul className="flex whitespace-nowrap border-b border-gray-700">
            <li className="mr-6">
              <Link
                href="#all"
                className="inline-block px-1 py-4 text-violet-400 font-medium border-b-2 border-violet-400"
              >
                All
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="#audiobooks"
                className="inline-block px-1 py-4 text-gray-300 hover:text-white"
              >
                Audiobooks
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="#podcasts"
                className="inline-block px-1 py-4 text-gray-300 hover:text-white"
              >
                Podcasts
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="#wish-list"
                className="inline-block px-1 py-4 text-gray-300 hover:text-white"
              >
                Wish List
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="#collections"
                className="inline-block px-1 py-4 text-gray-300 hover:text-white"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                href="#authors"
                className="inline-block px-1 py-4 text-gray-300 hover:text-white"
              >
                Authors
              </Link>
            </li>
          </ul>
        </nav>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
              className="rounded-full bg-violet-500 text-white hover:bg-violet-600"
            >
              All titles
            </Button>
            <Button
              variant={selectedFilter === "finished" ? "default" : "outline"}
              onClick={() => setSelectedFilter("finished")}
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Finished
            </Button>
            <Button
              variant={selectedFilter === "unfinished" ? "default" : "outline"}
              onClick={() => setSelectedFilter("unfinished")}
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Unfinished
            </Button>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select defaultValue={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-full md:w-[180px] bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="date-added">Date Added</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="author">Author</SelectItem>
                <SelectItem value="length">Length</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Select
            </Button>
          </div>
        </div>

        {/* Audiobooks Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {audiobooks.map((book) => (
            <div key={book.id} className="flex flex-col">
              <div className="relative aspect-square mb-2">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  <Button size="icon" variant="ghost" className="text-white">
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
                {book.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-white">
                {book.title}
              </h3>
              <p className="text-sm text-gray-400">{book.author}</p>
            </div>
          ))}
        </div> */}

        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">
            Your Library looks empty
          </h2>

          <p className="text-gray-600 mb-8">
            When you buy or add titles to your Library, they&apos;ll be
            displayed here.
          </p>
          <Button className="rounded-full ">Browse Catalog</Button>
        </div>
      </main>
    </div>
  );
}
