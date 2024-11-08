// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ShoppingCart, Star } from "lucide-react";
// import Image from "next/image";
// import { createClient } from "@/utils/supabase/server";
// import { notFound } from "next/navigation";
// import Player from "@/components/Audio/Player";

// type Book = {
//   id: string;
//   title: string;
//   author: string;
//   image: string;
//   price: number;
//   rating: number | null;
//   duration: string | null;
//   genre_id: string;
//   narrator: string | null;
//   publisher: string | null;
//   created_at: string;
//   description: string | null;
//   release_date: string | null;
//   preview_url: string | null;
// };

// type Review = {
//   id: number;
//   userName: string;
//   rating: number;
//   comment: string;
//   date: string;
// };

// export default async function AudiobookPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const supabase = createClient();

//   const { data: audiobookData, error: audiobookDataError } = await supabase
//     .from("books")
//     .select("*")
//     .eq("id", params.id);

//   if (audiobookDataError) {
//     console.error(audiobookDataError);
//     notFound();
//   }

//   const { data: relatedBooksData, error: relatedBooksDataError } =
//     await supabase.from("books").select("*").limit(3).neq("id", params.id);

//   if (relatedBooksDataError) {
//     console.error(relatedBooksDataError);
//   }

//   const audiobook: Book = audiobookData && audiobookData[0];
//   const relatedBooks: Book[] = relatedBooksData ?? [];

//   // const { id } = useParams();
//   // const [audiobook, setAudiobook] = useState<Audiobook | null>(null);
//   // const [reviews, setReviews] = useState<Review[]>([]);
//   // const [relatedBooks, setRelatedBooks] = useState<Audiobook[]>([]);
//   // const [isPlaying, setIsPlaying] = useState(false);
//   // const [progress, setProgress] = useState(0);
//   // const [volume, setVolume] = useState(0.5);
//   // const audioRef = useRef<HTMLAudioElement | null>(null);

//   // useEffect(() => {
//   //   // In a real application, you would fetch the audiobook data from an API
//   //   // For this example, we'll use mock data
//   //   const mockAudiobook: Audiobook = {
//   //     id: Number(id),
//   //     title: "The Great Adventure",
//   //     author: "Jane Doe",
//   //     narrator: "John Smith",
//   //     price: 19.99,
//   //     coverUrl: "https://m.media-amazon.com/images/I/41om-xG+otL._SL320_.jpg",

//   //     previewUrl:
//   //       "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//   //     description:
//   //       "An epic journey through uncharted territories, filled with excitement and discovery. Follow our protagonist as they navigate through treacherous landscapes, encounter fascinating creatures, and uncover ancient mysteries. This audiobook will transport you to a world of wonder and keep you on the edge of your seat from start to finish.",
//   //     genre: "Adventure",
//   //     duration: "10 hours 30 minutes",
//   //     rating: 4.5,
//   //     releaseDate: "2023-06-15",
//   //     publisher: "Audiobooks Publishing House",
//   //     language: "English",
//   //     isbn: "978-1234567890",
//   //   };

//   const mockReviews: Review[] = [
//     {
//       id: 1,
//       userName: "AudioFan123",
//       rating: 5,
//       comment:
//         "Absolutely loved this audiobook! The narrator's voice brought the story to life.",
//       date: "2023-07-01",
//     },
//     {
//       id: 2,
//       userName: "BookwormAlice",
//       rating: 4,
//       comment:
//         "Great story, but I felt it dragged a bit in the middle. Overall, still a good listen.",
//       date: "2023-06-28",
//     },
//     {
//       id: 3,
//       userName: "AdventureSeeker",
//       rating: 5,
//       comment:
//         "Couldn't stop listening! The descriptions of the landscapes were so vivid.",
//       date: "2023-06-20",
//     },
//   ];

//   //   const mockRelatedBooks: Audiobook[] = [
//   //     {
//   //       id: 101,
//   //       title: "Mystery in the Mountains",
//   //       author: "Emily Brown",
//   //       narrator: "Sarah Johnson",
//   //       price: 18.99,
//   //       coverUrl: "https://m.media-amazon.com/images/I/51+gvyZG96L._SL160_.jpg",
//   //       previewUrl: "",
//   //       description: "",
//   //       genre: "Mystery",
//   //       duration: "8 hours 45 minutes",
//   //       rating: 4.2,
//   //       releaseDate: "2023-05-01",
//   //       publisher: "",
//   //       language: "",
//   //       isbn: "",
//   //     },
//   //     {
//   //       id: 102,
//   //       title: "Echoes of the Past",
//   //       author: "Michael Green",
//   //       narrator: "David Wilson",
//   //       price: 17.99,
//   //       coverUrl: "https://m.media-amazon.com/images/I/41jtwBpH9oL._SL320_.jpg",
//   //       previewUrl: "",
//   //       description: "",
//   //       genre: "Historical Fiction",
//   //       duration: "12 hours 15 minutes",
//   //       rating: 4.7,
//   //       releaseDate: "2023-04-15",
//   //       publisher: "",
//   //       language: "",
//   //       isbn: "",
//   //     },
//   //     {
//   //       id: 103,
//   //       title: "Futuristic Frontiers",
//   //       author: "Samantha Lee",
//   //       narrator: "Robert Taylor",
//   //       price: 20.99,
//   //       coverUrl: "https://m.media-amazon.com/images/I/41P2hA7g1bL._SL160_.jpg",
//   //       previewUrl: "",
//   //       description: "",
//   //       genre: "Science Fiction",
//   //       duration: "9 hours 30 minutes",
//   //       rating: 4.4,
//   //       releaseDate: "2023-07-01",
//   //       publisher: "",
//   //       language: "",
//   //       isbn: "",
//   //     },
//   //   ];

//   //   setAudiobook(mockAudiobook);
//   //   setReviews(mockReviews);
//   //   setRelatedBooks(mockRelatedBooks);
//   // }, [id]);

//   // useEffect(() => {
//   //   const audio = audioRef.current;
//   //   if (!audio) return;

//   //   const updateProgress = () => {
//   //     if (audio.duration) {
//   //       setProgress((audio.currentTime / audio.duration) * 100);
//   //     }
//   //   };

//   //   audio.addEventListener("timeupdate", updateProgress);
//   //   return () => audio.removeEventListener("timeupdate", updateProgress);
//   // }, []);

//   // const togglePlayPause = () => {
//   //   if (isPlaying) {
//   //     audioRef.current?.pause();
//   //   } else {
//   //     audioRef.current?.play();
//   //   }
//   //   setIsPlaying(!isPlaying);
//   // };

//   // const handleVolumeChange = (newVolume: number[]) => {
//   //   const volumeValue = newVolume[0];
//   //   setVolume(volumeValue);
//   //   if (audioRef.current) {
//   //     audioRef.current.volume = volumeValue;
//   //   }
//   // };

//   // if (!audiobook) {
//   //   return <div className="container mx-auto px-4 py-8">Loading...</div>;
//   // }

//   return (
//     <div className="container mx-auto px-4 pt-8 pb-28 ">
//       <Link href="/" className="text-primary hover:underline mb-4 inline-block">
//         &larr; Back to Home
//       </Link>
//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-1">
//           <Card>
//             <CardHeader className="p-0 aspect-square relative">
//               <Image
//                 src={audiobook?.image}
//                 alt={`${audiobook?.title} cover`}
//                 fill
//                 style={{ objectFit: "cover", objectPosition: "center center" }}
//                 className=" rounded-t-lg"
//               />
//             </CardHeader>
//             <CardContent className="p-4">
//               <CardTitle className="text-2xl mb-2">{audiobook.title}</CardTitle>
//               <p className="text-lg text-muted-foreground mb-4">
//                 By {audiobook.author}
//               </p>
//               <p className="text-sm text-muted-foreground mb-2">
//                 Narrated by: {audiobook.narrator ? audiobook.narrator : "N/A"}
//               </p>
//               <div className="flex items-center mb-2">
//                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
//                 <span>
//                   {audiobook.rating ? audiobook.rating.toFixed(1) : 4.4}
//                   {/* ({reviews.length} reviews) */}
//                 </span>
//               </div>
//               {/* <p className="text-sm text-muted-foreground mb-2">
//                 Genre: {audiobook.genre}
//               </p> */}
//               <p className="text-sm text-muted-foreground mb-2">
//                 Duration: {audiobook.duration ? audiobook.duration : "N/A"}
//               </p>
//               <p className="text-sm text-muted-foreground mb-2">
//                 Released:{" "}
//                 {audiobook.release_date ? audiobook.release_date : "N/A"}
//               </p>
//               <p className="text-sm text-muted-foreground mb-2">
//                 Publisher: {audiobook.publisher ? audiobook.publisher : "N/A"}
//               </p>
//               {/* <p className="text-sm text-muted-foreground mb-2">
//                 Language: {audiobook.language}
//               </p> */}
//               {/* <p className="text-sm text-muted-foreground">
//                 ISBN: {audiobook.isbn}
//               </p> */}
//             </CardContent>
//             <CardFooter className="p-4 flex flex-col space-y-2">
//               {/* <Button
//                 className="w-full"
//                 //  onClick={togglePlayPause}
//               >
//                 {isPlaying ? (
//                   <Pause className="mr-2 h-4 w-4" />
//                 ) : (
//                   <Headphones className="mr-2 h-4 w-4" />
//                 )}
//                 {isPlaying ? "Pause Preview" : "Listen to Preview"}
//               </Button> */}
//               <Button variant="secondary" className="w-full">
//                 <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart - $
//                 {audiobook.price.toFixed(2)}
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//         <div className="md:col-span-2">
//           <Tabs defaultValue="description" className="w-full">
//             <TabsList>
//               <TabsTrigger value="description">Description</TabsTrigger>
//               <TabsTrigger value="reviews">Reviews</TabsTrigger>
//             </TabsList>
//             <TabsContent value="description">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>About this Audiobook</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     {audiobook.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="reviews">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Customer Reviews</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   {mockReviews.map((review) => (
//                     <div
//                       key={review.id}
//                       className="mb-4 pb-4 border-b last:border-b-0"
//                     >
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="font-bold">{review.userName}</span>
//                         <div className="flex items-center">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`w-4 h-4 ${
//                                 i < review.rating
//                                   ? "fill-yellow-400 text-yellow-400"
//                                   : "fill-gray-200 text-gray-200"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                       <p className="text-sm text-muted-foreground mb-1">
//                         {review.comment}
//                       </p>
//                       <p className="text-xs text-muted-foreground">
//                         {review.date}
//                       </p>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>

//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-4">You might also like</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {relatedBooks.map((book) => (
//                 <Card key={book.id}>
//                   <Link href={`/audiobook/${book.id}`}>
//                     <CardHeader className="p-0">
//                       <img
//                         src={book.image}
//                         alt={`${book.title} cover`}
//                         className="w-full h-auto rounded-t-lg"
//                       />
//                     </CardHeader>
//                     <CardContent className="p-4">
//                       <CardTitle className="text-lg mb-2">
//                         {book.title}
//                       </CardTitle>
//                       <p className="text-sm text-muted-foreground mb-2">
//                         By {book.author}
//                       </p>
//                       <div className="flex items-center mb-2">
//                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                         <span className="text-sm">
//                           {book.rating ? book.rating.toFixed(1) : 4.4}
//                         </span>
//                       </div>
//                       {/* <p className="text-sm font-bold">
//                         ${book.price.toFixed(2)}
//                       </p> */}
//                     </CardContent>
//                   </Link>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Player previewUrl={audiobook.preview_url} bookTitle={audiobook.title} />
//     </div>
//   );
// }

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
import { addToCart } from "./actions";
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
    await supabase.from("books").select("*").limit(3).neq("id", params.id);

  if (relatedBooksDataError) {
    console.error(relatedBooksDataError);
  }

  const audiobook: Book = audiobookData && audiobookData[0];
  const relatedBooks: Book[] = relatedBooksData ?? [];

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
                <AddToCart
                  title={audiobook.title}
                  price={audiobook.price}
                  author={audiobook.author}
                  image={audiobook.image}
                  id={audiobook.id}
                />
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