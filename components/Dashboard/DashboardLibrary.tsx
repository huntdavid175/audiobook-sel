"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Play } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const audiobooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 75,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 30,
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 100,
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 50,
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 10,
  },
  {
    id: 6,
    title: "The Sandman",
    author: "Neil Gaiman",
    cover: "/placeholder.svg?height=240&width=240",
    progress: 0,
  },
];

const DashboardLibrary = ({ books }: { books: any }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("date-added");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
      {books.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {books.map((book: any) => (
            <div key={book.id} className="flex flex-col">
              <div className="relative aspect-square mb-2">
                <Image
                  src={book.book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white hover:bg-orange-400"
                  >
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
                {/* book.progress > 0  should be the condition */}
                {book.progress == null && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-500"
                      // style={{ width: `${book.progress}%` }}
                      style={{ width: `${60}%` }}
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
        </div>
      ) : (
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
      )}
    </main>
  );
};

export default DashboardLibrary;
