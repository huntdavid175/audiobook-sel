import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Globe, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BrowseSection from "@/components/Landing/BrowseSection";
import { createClient } from "@/utils/supabase/server";

export default async function Component() {
  const supabase = createClient();

  const { data, error } = await supabase.from("genres").select("*, books(*)");

  if (error) {
    console.log(error);
  }

  // const carouselItems = [
  //   {
  //     id: 1,
  //     title: "Office Ladies",
  //     image: "https://m.media-amazon.com/images/I/413pXgU21sL._SL500_.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Ear Biscuits",
  //     image: "https://m.media-amazon.com/images/I/51CatMooFnL._SL500_.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "True Crime All The Time",
  //     image: "https://m.media-amazon.com/images/I/515mMtCrWJL._SL500_.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "This is Actually Happening",
  //     image: "https://m.media-amazon.com/images/I/51YWboDnGpL._SL500_.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Business Wars",
  //     image: "https://m.media-amazon.com/images/I/31X7tKX1Y7L._SL500_.jpg",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(2);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + carouselItems.length) % carouselItems.length
  //   );
  // };

  return (
    <div className="min-h-screen bg-[#000914] pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-transparent transform -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 bg-violet-400 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Audiobooks
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Top-rated shows, news, comedy, true crime, storytelling–it's all
              here.
            </p>
            {/* <Button className="bg-violet-400 hover:bg-violet-500 text-black font-semibold px-8 py-6 text-lg rounded-full">
              Try for $0.00
            </Button> */}
            {/* <p className="text-sm text-gray-400 mt-4">
              New customers only. Auto-renews at $14.95/mo. + applicable tax
              after 30 days. Cancel anytime.
            </p> */}
          </div>

          {/* Phone Mockup */}
          <div className="max-w-md mx-auto relative">
            <Image
              src="https://m.media-amazon.com/images/I/413pXgU21sL._SL500_.jpg"
              width={300}
              height={600}
              alt="Phone mockup"
              className="mx-auto"
            />
            {/* Podcast covers positioned absolutely around the phone */}
            <div className="absolute -left-32 top-1/4">
              <Image
                src="https://m.media-amazon.com/images/I/51CatMooFnL._SL500_.jpg"
                width={150}
                height={150}
                alt="Podcast cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -right-32 top-1/4">
              <Image
                src="https://m.media-amazon.com/images/I/41om-xG+otL._SL320_.jpg"
                width={150}
                height={150}
                alt="Podcast cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Now Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hear what's popular now
          </h2>
          <p className="text-gray-300">
            Discover listener favorites and exclusive, ad-free Audible Original
            series.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-12 h-12 text-white" />
          </Button>
          <div className="flex items-center justify-center gap-4 px-16">
            {carouselItems.map((item, index) => {
              const position =
                (index - currentIndex + carouselItems.length) %
                carouselItems.length;
              const isCurrent = position === 0;
              const isAdjacent =
                position === 1 || position === carouselItems.length - 1;
              return (
                <div
                  key={item.id}
                  className={`transition-all duration-300 ${
                    isCurrent
                      ? "w-64 h-64 z-10"
                      : isAdjacent
                      ? "w-48 h-48 opacity-75"
                      : "w-0 h-48 opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    width={isCurrent ? 256 : 192}
                    height={isCurrent ? 256 : 192}
                    alt={item.title}
                    className="rounded-lg shadow-lg"
                  />
                  {isCurrent && (
                    <div className="text-center mt-4 space-y-2">
                      <h3 className="text-white font-semibold">
                        {item.title} (Ad-free)
                      </h3>
                      <p className="text-sm text-gray-400">
                        Written by: Emash Digital / Wondery
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <span className="text-blue-400">Social Sciences</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-blue-400">True Crime</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-blue-400">History</span>
                      </div>
                      <Button variant="secondary" size="sm" className="mt-2">
                        Sample
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="w-12 h-12 text-white" />
          </Button>
        </div>
      </section> */}

      {/* Browse  */}
      <section className=" py-">
        <BrowseSection books={data} />
      </section>
    </div>
  );
}
