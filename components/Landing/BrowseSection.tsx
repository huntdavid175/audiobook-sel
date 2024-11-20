"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            {/* {genre.books.map((book) => (
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
            ))} */}

            <Carousel>
              <CarouselContent>
                {genre.books.map((book) => (
                  <CarouselItem className="basis-1/6" key={book.id}>
                    {" "}
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
