"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  rating: string | null;
  duration: string | null;
  genre_id: string;
  narrator: string | null;
  publisher: string | null;
  created_at: string;
  description: string | null;
  release_date: string | null;
};

type Genre = {
  id: string;
  genre_name: string;
  books: Book[];
  description: string | null;
  created_at: string | null;
};

// const categories: Category[] = [
//   {
//     id: "money-finance",
//     title: "Money & Finance",
//     podcasts: [
//       {
//         id: "1",
//         title: "THE ED MYLETT SHOW",
//         author: "Ed Mylett",
//         image: "https://m.media-amazon.com/images/I/516e-Ps+1VL._SL160_.jpg",
//       },
//       {
//         id: "2",
//         title: "The Canadian Real Estate Investor",
//         author: "Daniel Focus",
//         image: "https://m.media-amazon.com/images/I/41HbIUqq88L._SL160_.jpg",
//       },
//       {
//         id: "3",
//         title: "Business Wars (Ad-free)",
//         author: "Wondery",
//         image: "https://m.media-amazon.com/images/I/51c7U55rhIL._SL160_.jpg",
//       },
//       {
//         id: "4",
//         title: "How I Built This",
//         author: "Guy Raz",
//         image: "https://m.media-amazon.com/images/I/51W4O9X8IYL._SL160_.jpg",
//       },
//       {
//         id: "5",
//         title: "Jocko Podcast",
//         author: "Jocko DEFCOR",
//         image: "https://m.media-amazon.com/images/I/41MFeivp4qL._SL160_.jpg",
//       },
//       {
//         id: "6",
//         title: "The School of Greatness",
//         author: "Lewis Howes",
//         image: "https://m.media-amazon.com/images/I/41fYZSWLsVL._SL160_.jpg",
//       },
//     ],
//   },
//   {
//     id: "comedy",
//     title: "Comedy",
//     podcasts: [
//       {
//         id: "7",
//         title: "SmartLess",
//         author: "Jason Bateman",
//         image: "https://m.media-amazon.com/images/I/51-Vm1JUzZL._SL320_.jpg",
//       },
//       {
//         id: "8",
//         title: "Morbid",
//         author: "Morbid Network",
//         image: "https://m.media-amazon.com/images/I/51NQrlGZURL._SL320_.jpg",
//       },
//       {
//         id: "9",
//         title: "21 Days of Meditation",
//         author: "Aaptiv",
//         image: "https://m.media-amazon.com/images/I/51706uMD-HL._SL320_.jpg",
//       },
//       {
//         id: "10",
//         title: "Conan O'Brien Needs a Friend",
//         author: "Team Coco",
//         image: "https://m.media-amazon.com/images/I/512XdMWjKAL._SL320_.jpg",
//       },
//       {
//         id: "11",
//         title: "Mike Ward Sous Écoute",
//         author: "Mike Ward",
//         image: "https://m.media-amazon.com/images/I/41om-xG+otL._SL320_.jpg",
//       },
//       {
//         id: "12",
//         title: "crime de bine",
//         author: "crime de bine",
//         image: "https://m.media-amazon.com/images/I/41jtwBpH9oL._SL320_.jpg",
//       },
//     ],
//   },
//   {
//     id: "health-wellness",
//     title: "Health & Wellness",
//     podcasts: [
//       {
//         id: "13",
//         title: "The Mel Robbins Podcast",
//         author: "Mel Robbins",
//         image: "https://m.media-amazon.com/images/I/51+gvyZG96L._SL160_.jpg",
//       },
//       {
//         id: "14",
//         title: "Just Sleep - Bedtime Stories",
//         author: "Bedtime Stories",
//         image: "https://m.media-amazon.com/images/I/51W464cRsDL._SL160_.jpg",
//       },
//       {
//         id: "15",
//         title: "Nothing much happens",
//         author: "iHeartPodcasts",
//         image: "https://m.media-amazon.com/images/I/41P2hA7g1bL._SL160_.jpg",
//       },
//       {
//         id: "16",
//         title: "Huberman Lab",
//         author: "Scicomm Media",
//         image: "https://m.media-amazon.com/images/I/51DKlWJhvdL._SL160_.jpg",
//       },
//       {
//         id: "17",
//         title: "Sleep Magic: Guided Sleep Meditation",
//         author: "Sleepiest & Co",
//         image: "https://m.media-amazon.com/images/I/51PkCmnthfL._SL160_.jpg",
//       },
//       {
//         id: "18",
//         title: "Meditations",
//         author: "Audible Sleep",
//         image: "https://m.media-amazon.com/images/I/41aV0yXXXjL._SL160_.jpg",
//       },
//     ],
//   },
// ];

function CategoryCarousel({ genre }: { genre: Genre }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    if (carouselRef.current) {
      setShowLeftArrow(scrollPosition > 0);
      setShowRightArrow(
        scrollPosition <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    updateArrows();
  }, [scrollPosition]);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition((prev) => prev + scrollAmount);
    }
  };

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">{genre.genre_name}</h2>
        <Link href="#" className="text-blue-500 hover:text-blue-400 text-sm">
          View more
        </Link>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={carouselRef}>
          <div className="flex gap-4">
            {genre.books.map((book) => (
              <div key={book.id} className="flex-shrink-0 w-60">
                <Link href={`/audiobook/${book.id}`}>
                  <div className="relative aspect-square mb-2">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={240}
                      height={240}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-1">
                    Written by: {book.author}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {showLeftArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </Button>
        )}
        {showRightArrow && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function BrowseSection({ books }: { books: Book[] }) {
  // console.log(books);
  return (
    <div className="bg-[#000914] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Imagine the listening possibilities
        </h1>
        {books.map((book: any) => (
          <CategoryCarousel key={book.id} genre={book} />
        ))}
      </div>
    </div>
  );
}
