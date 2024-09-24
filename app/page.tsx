"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  // BookOpen,
  Headphones,
  Menu,
  Pause,
  Play,
  Search,
  ShoppingCart,
  Volume2,
} from "lucide-react";
import Image from "next/image";

type Audiobook = {
  id: number;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  previewUrl: string;
  description: string;
};

const genres = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Sci-Fi",
  "Romance",
  "Biography",
];

export default function AudiobookStore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Audiobook[]>([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const featuredBook: Audiobook = {
    id: 0,
    title: "The Great Adventure",
    author: "Jane Doe",
    price: 19.99,
    coverUrl:
      "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
    previewUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    description:
      "An epic journey through uncharted territories, filled with excitement and discovery.",
  };

  const bestsellers: Audiobook[] = [
    {
      id: 1,
      title: "Bestseller 1",
      author: "Author A",
      price: 14.99,
      coverUrl:
        "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/aa45e942-f55d-432d-8217-17c7d98105ce/image001.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      description: "A gripping thriller that tops the charts.",
    },
    {
      id: 2,
      title: "Bestseller 2",
      author: "Author B",
      price: 15.99,
      coverUrl:
        "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      description: "An inspiring story of perseverance and triumph.",
    },
    {
      id: 3,
      title: "Bestseller 3",
      author: "Author C",
      price: 16.99,
      coverUrl:
        "https://sdg-migration-met.s3.amazonaws.com/wp-content/uploads/2021/07/12213629/165523a5bad8aa3df160b9bbf37d19f5-Wade2BGreenbergThe2BJungle8057.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      description: "A heartwarming tale that has captured readers' hearts.",
    },
    {
      id: 4,
      title: "Bestseller 4",
      author: "Author D",
      price: 17.99,
      coverUrl:
        "https://cdn.myportfolio.com/560d16623f9c2df9615744dfab551b3d/e50c016f-b6a8-4666-8fb8-fe6bd5fd9fec_rw_1920.jpeg?h=dc627898fc5eac88aa791fb2b124ecbd",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      description: "An edge-of-your-seat mystery that keeps you guessing.",
    },
  ];

  const newReleases: Audiobook[] = [
    {
      id: 5,
      title: "New Release 1",
      author: "Author E",
      price: 18.99,
      coverUrl:
        "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      description: "A fresh voice in contemporary fiction.",
    },
    {
      id: 6,
      title: "New Release 2",
      author: "Author F",
      price: 19.99,
      coverUrl:
        "https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
      description: "An exciting debut novel that's making waves.",
    },
    {
      id: 7,
      title: "New Release 3",
      author: "Author G",
      price: 20.99,
      coverUrl:
        "https://cdn.pastemagazine.com/www/articles/2019/12/06/cryingbookbbc19final.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      description: "A thought-provoking exploration of modern themes.",
    },
    {
      id: 8,
      title: "New Release 4",
      author: "Author H",
      price: 21.99,
      coverUrl:
        "https://m.media-amazon.com/images/I/711Finx0PRL._AC_UF1000,1000_QL80_.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      description: "A genre-defying work that pushes boundaries.",
    },
  ];

  const editorsPicks: Audiobook[] = [
    {
      id: 9,
      title: "Editor's Pick 1",
      author: "Author I",
      price: 22.99,
      coverUrl:
        "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:d44e2d7a-3cff-5013-8271-da3014c106c6/component?assetType=TEMPLATE&etag=9116a03d71184191811e2ecc4f588a4a&revision=a64d442a-c1c4-4ac3-9d30-d1440cf44988&component_id=b655723a-e40e-4678-bf57-c337b5aa5750",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      description: "A hidden gem that our editors can't stop talking about.",
    },
    {
      id: 10,
      title: "Editor's Pick 2",
      author: "Author J",
      price: 23.99,
      coverUrl:
        "https://www.picmaker.com/assets/images/bookcovermaker/template-1.png",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
      description: "A masterfully crafted narrative that stands out.",
    },
    {
      id: 11,
      title: "Editor's Pick 3",
      author: "Author K",
      price: 24.99,
      coverUrl:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/how-to-creative-ideas-book-cover-design-template-52f7ec58f53452b9b46a351cea1bd9a1_screen.jpg?ts=1698479236",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      description: "An audiobook experience that's not to be missed.",
    },
    {
      id: 12,
      title: "Editor's Pick 4",
      author: "Author L",
      price: 25.99,
      coverUrl:
        "https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg",
      previewUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
      description: "A unique perspective that challenges and enlightens.",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement actual search functionality here
  };

  const addToCart = (book: Audiobook) => {
    setCart([...cart, book]);
  };

  const togglePlayPause = (bookId: number, previewUrl: string) => {
    if (currentlyPlaying === bookId) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.src = previewUrl;
        audioRef.current.play();
      }
      setCurrentlyPlaying(bookId);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0];
    setVolume(volumeValue);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const AudiobookCard = ({ book }: { book: Audiobook }) => (
    <Card>
      <CardHeader className="p-0 w-full h-[450px] relative">
        <Image
          src={book.coverUrl}
          alt={`${book.title} cover`}
          fill
          style={{ objectFit: "cover" }}
          className="object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">
          <Link href={`/audiobook/${book.id}`} className="hover:underline">
            {book.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{book.author}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => togglePlayPause(book.id, book.previewUrl)}
        >
          {currentlyPlaying === book.id && isPlaying ? (
            <Pause className="mr-2 h-4 w-4" />
          ) : (
            <Play className="mr-2 h-4 w-4" />
          )}
          Preview
        </Button>
        <Button variant="ghost" size="sm" onClick={() => addToCart(book)}>
          ${book.price.toFixed(2)}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Browse
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Library
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="text-2xl font-bold">
              AudioBooks
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Browse</Button>
            <Button variant="ghost">My Library</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <Input
                type="search"
                placeholder="Search audiobooks..."
                className="w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleSearch}
            >
              <Search className="h-6 w-6" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-xs flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {cart.map((book) => (
                  <DropdownMenuItem key={book.id}>
                    {book.title} - ${book.price.toFixed(2)}
                  </DropdownMenuItem>
                ))}
                {cart.length === 0 && (
                  <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:flex items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src={featuredBook.coverUrl}
                alt={`${featuredBook.title} cover`}
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold mb-2">
                <Link
                  href={`/audiobook/${featuredBook.id}`}
                  className="hover:underline"
                >
                  {featuredBook.title}
                </Link>
              </h2>
              <p className="text-xl mb-4">By {featuredBook.author}</p>
              <p className="mb-6">{featuredBook.description}</p>
              <div className="flex space-x-4">
                <Button
                  onClick={() =>
                    togglePlayPause(featuredBook.id, featuredBook.previewUrl)
                  }
                >
                  {currentlyPlaying === featuredBook.id && isPlaying ? (
                    <Pause className="mr-2 h-4 w-4" />
                  ) : (
                    <Headphones className="mr-2 h-4 w-4" />
                  )}
                  {currentlyPlaying === featuredBook.id && isPlaying
                    ? "Pause"
                    : "Listen Now"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => addToCart(featuredBook)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Buy $
                  {featuredBook.price.toFixed(2)}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Bestsellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
            {bestsellers.map((book) => (
              <AudiobookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">New Releases</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newReleases.map((book) => (
              <AudiobookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Editor&apos;s Picks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {editorsPicks.map((book) => (
              <AudiobookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {genres.map((genre) => (
              <Button key={genre} variant="outline" className="h-24 text-lg">
                {genre}
              </Button>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="container mx-auto flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (currentlyPlaying !== null) {
                    togglePlayPause(
                      currentlyPlaying,
                      [
                        ...bestsellers,
                        ...newReleases,
                        ...editorsPicks,
                        featuredBook,
                      ].find((book) => book.id === currentlyPlaying)
                        ?.previewUrl || ""
                    );
                  }
                }}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <div className="text-sm font-medium">
                {currentlyPlaying !== null
                  ? [
                      ...bestsellers,
                      ...newReleases,
                      ...editorsPicks,
                      featuredBook,
                    ].find((book) => book.id === currentlyPlaying)?.title
                  : "No audio playing"}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <Slider
                className="w-24"
                value={[volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
