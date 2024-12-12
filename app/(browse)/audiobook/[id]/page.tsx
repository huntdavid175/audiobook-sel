import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Player from "@/components/Audio/Player";
import {
  addToCart,
  // loadProductsToStripe
} from "./actions";
import AddToCart from "@/components/Forms/AddToCart";

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  rating: number | null;
  duration: string | null;
  genre_id: string;
  narrator: string | null;
  publisher: string | null;
  created_at: string;
  description: string | null;
  release_date: string | null;
  preview_url: string | null;
};

type Review = {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
};

export default async function AudiobookPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();

  const { data: audiobookData, error: audiobookDataError } = await supabase
    .from("books")
    .select("*")
    .eq("id", params.id);

  if (audiobookDataError) {
    console.error(audiobookDataError);
    notFound();
  }

  const { data: relatedBooksData, error: relatedBooksDataError } =
    await supabase
      .from("books")
      .select("*")
      .limit(3)
      .eq("genre_id", "3a8348d3-9baf-42b1-a423-75d4c83b9beb")
      .neq("id", params.id);

  if (relatedBooksDataError) {
    console.error(relatedBooksDataError);
  }

  const { data: cartData, error: cartDataError } = await supabase
    .from("cart")
    .select("*,book:books(*)");

  if (cartDataError) {
    console.error(cartDataError);
  }

  const audiobook: Book = audiobookData && audiobookData[0];
  const relatedBooks: Book[] = relatedBooksData ?? [];

  const currentCart: any = cartData;

  const isInCart = currentCart.find(
    (cartItem: any) => cartItem.book.id === audiobook.id
  );

  const mockReviews: Review[] = [
    {
      id: 1,
      userName: "AudioFan123",
      rating: 5,
      comment:
        "Absolutely loved this audiobook! The narrator's voice brought the story to life.",
      date: "2023-07-01",
    },
    {
      id: 2,
      userName: "BookwormAlice",
      rating: 4,
      comment:
        "Great story, but I felt it dragged a bit in the middle. Overall, still a good listen.",
      date: "2023-06-28",
    },
    {
      id: 3,
      userName: "AdventureSeeker",
      rating: 5,
      comment:
        "Couldn't stop listening! The descriptions of the landscapes were so vivid.",
      date: "2023-06-20",
    },
  ];

  return (
    <div className="bg-[#000914] min-h-screen">
      <div className="container mx-auto px-4 pt-8 pb-28 bg-[#000914] text-gray-100">
        <Link
          href="/"
          className="text-orange-400 hover:underline mb-4 inline-block"
        >
          &larr; Back to Home
        </Link>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="p-0 aspect-square relative">
                <Image
                  src={audiobook?.image}
                  alt={`${audiobook?.title} cover`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-2xl mb-2 text-white">
                  {audiobook.title}
                </CardTitle>
                <p className="text-lg text-gray-300 mb-4">
                  By {audiobook.author}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  Narrated by: {audiobook.narrator ? audiobook.narrator : "N/A"}
                </p>
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-gray-300">
                    {audiobook.rating ? audiobook.rating.toFixed(1) : 4.4}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  Duration: {audiobook.duration ? audiobook.duration : "N/A"}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  Released:{" "}
                  {audiobook.release_date ? audiobook.release_date : "N/A"}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  Publisher: {audiobook.publisher ? audiobook.publisher : "N/A"}
                </p>
              </CardContent>
              <CardFooter className="p-4 flex flex-col space-y-2">
                {!isInCart && (
                  <AddToCart
                    id={audiobook.id}
                    price={audiobook.price}
                    cart={currentCart}
                  />
                )}
                {/* <form action={loadProductsToStripe}>
                  <button className="bg-red-900 text-white" type="submit">
                    Load To Stripe
                  </button>
                </form> */}
              </CardFooter>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-gray-900 text-gray-300">
                <TabsTrigger
                  value="description"
                  className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      About this Audiobook
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{audiobook.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Customer Reviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {mockReviews.map((review) => (
                      <div
                        key={review.id}
                        className="mb-4 pb-4 border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-white">
                            {review.userName}
                          </span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-600 text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-1">
                          {review.comment}
                        </p>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-white">
                You might also like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedBooks.map((book) => (
                  <Card key={book.id} className="bg-gray-900 border-gray-700">
                    <Link href={`/audiobook/${book.id}`}>
                      <CardHeader className="p-0">
                        <img
                          src={book.image}
                          alt={`${book.title} cover`}
                          className="w-full h-auto rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg mb-2 text-white">
                          {book.title}
                        </CardTitle>
                        <p className="text-sm text-gray-400 mb-2">
                          By {book.author}
                        </p>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-300">
                            {book.rating ? book.rating.toFixed(1) : 4.4}
                          </span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Player
          previewUrl={audiobook.preview_url}
          bookTitle={audiobook.title}
        />
      </div>
    </div>
  );
}
