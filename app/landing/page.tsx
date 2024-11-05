"use client";

import React from "react";
import Image from "next/image";
import {
  Bell,
  BookOpen,
  Clock,
  Home,
  Search,
  Settings,
  Star,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-8">
        <div className="text-2xl font-bold">📚</div>
        <nav className="flex flex-col items-center space-y-4">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <BookOpen className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Clock className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Star className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search book name, author, edition..."
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src="https://educationweb.com.gh/wp-content/uploads/2023/05/FwMYdOoWcAAEHxi.jpg"
                alt="Alexander Mark"
              />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
            <span>Mona Montrage</span>
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6 cursor-pointer" />
            </Button>
          </div>
        </header>

        {/* Featured Audiobook Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Audiobook</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 flex">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                The Cambers of Secrets
              </h2>
              <p className="text-lg mb-2">by J.K. Rowlings</p>
              <p className="mb-4">
                Harry as he returns to Hogwarts school of witchcraft and
                wizardry for his 2nd year, only to discover that...
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  $24.99
                </Badge>
                <span className="text-sm text-gray-500">154 / 300 pages</span>
              </div>
              <Button>Buy Now</Button>
            </div>
            <div className="flex-1 relative">
              <Image
                src="/placeholder.svg?height=300&width=500&text=The+Cambers+of+Secrets"
                alt="The Cambers of Secrets"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Popular Now Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Popular Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                title: "The World of Ice and Fire",
                author: "George R.R. Martin",
                price: 29.99,
                coverImage:
                  "https://images.squarespace-cdn.com/content/v1/624da83e75ca872f189ffa42/aa45e942-f55d-432d-8217-17c7d98105ce/image001.jpg",
              },
              {
                title: "Fantastic Beasts",
                author: "J.K. Rowling",
                price: 24.99,
                coverImage:
                  "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg",
              },
              {
                title: "Game of Thrones",
                author: "George R.R. Martin",
                price: 34.99,
                coverImage:
                  "https://sdg-migration-met.s3.amazonaws.com/wp-content/uploads/2021/07/12213629/165523a5bad8aa3df160b9bbf37d19f5-Wade2BGreenbergThe2BJungle8057.jpg",
              },
              {
                title: "The Wise Man's Fear",
                author: "Patrick Rothfuss",
                price: 27.99,
                coverImage:
                  "https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg",
              },
              {
                title: "Game of Thrones",
                author: "George R.R. Martin",
                price: 34.99,
                coverImage:
                  "https://sdg-migration-met.s3.amazonaws.com/wp-content/uploads/2021/07/12213629/165523a5bad8aa3df160b9bbf37d19f5-Wade2BGreenbergThe2BJungle8057.jpg",
              },
              {
                title: "Game of Thrones",
                author: "George R.R. Martin",
                price: 34.99,
                coverImage:
                  "https://sdg-migration-met.s3.amazonaws.com/wp-content/uploads/2021/07/12213629/165523a5bad8aa3df160b9bbf37d19f5-Wade2BGreenbergThe2BJungle8057.jpg",
              },
            ].map((book, index) => (
              <div key={index} className="relative group">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                  <h3 className="font-semibold text-white">{book.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-white text-black">
                      ${book.price.toFixed(2)}
                    </Badge>
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*  New Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4"> Newly Released</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                title: "The World of Ice and Fire",
                author: "George R.R. Martin",
                price: 29.99,
                coverImage:
                  "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
              },
              {
                title: "Fantastic Beasts",
                author: "J.K. Rowling",
                price: 24.99,
                coverImage:
                  "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg",
              },
              {
                title: "Game of Thrones",
                author: "George R.R. Martin",
                price: 34.99,
                coverImage:
                  "https://sdg-migration-met.s3.amazonaws.com/wp-content/uploads/2021/07/12213629/165523a5bad8aa3df160b9bbf37d19f5-Wade2BGreenbergThe2BJungle8057.jpg",
              },
              {
                title: "The Wise Man's Fear",
                author: "Patrick Rothfuss",
                price: 27.99,
                coverImage:
                  "https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg",
              },
              {
                title: "The Wise Man's Fear",
                author: "Patrick Rothfuss",
                price: 27.99,
                coverImage:
                  "https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg",
              },
              {
                title: "The Wise Man's Fear",
                author: "Patrick Rothfuss",
                price: 27.99,
                coverImage:
                  "https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg",
              },
            ].map((book, index) => (
              <div key={index} className="relative group">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                  <h3 className="font-semibold text-white">{book.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{book.author}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-white text-black">
                      ${book.price.toFixed(2)}
                    </Badge>
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Series Collection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">New Series Collection</h2>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
            <Image
              src="https://beetifulbookcovers.com/wp-content/uploads/2023/05/DeathOfAnAngel.jpg"
              alt="Series Cover"
              width={225}
              height={150}
              className="rounded-lg shadow-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2">
                A Legend of Ice and Fire: The Ice Horse
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                2 volumes, 8 chapters each
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  $49.99
                </Badge>
                <Button>Buy Series</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Listening */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Schedule Listening</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <div key={index} className="text-center">
                    <p className="font-semibold">{day}</p>
                    <p
                      className={`mt-2 rounded-full w-8 h-8 flex items-center justify-center mx-auto ${
                        index === 1 ? "bg-primary text-white" : ""
                      }`}
                    >
                      {11 + index}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section> */}

        {/* Listener Reviews */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Listener Reviews</h2>
          <div className="space-y-4">
            {[
              {
                name: "Roberto Jordan",
                comment:
                  "What a delightful and magical audiobook! The narrator truly brings the wizarding world to life.",
                book: "The Cambers of Secrets",
                time: "2 min ago",
              },
              // { name: 'Anna Henry', comment: 'I finished listening to this audiobook last night and I'm still in awe. The production quality is top-notch!', book: 'The World of Ice and Fire', time: '1 hour ago' }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}`}
                      alt={review.name}
                    />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.comment}</p>
                    <p className="text-sm text-primary mt-2">{review.book}</p>
                    <p className="text-xs text-gray-400">{review.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
