import CartButtonSheet from "@/components/Checkout/CartButtonSheet";
import { createClient } from "@/utils/supabase/server";
import DashboardLibrary from "@/components/Dashboard/DashboardLibrary";

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

export default async function Dashboard() {
  const supabase = createClient();

  const { data: libraryData, error: libraryError } = await supabase
    .from("library")
    .select("*, book:books(*)");

  if (libraryError) {
    console.log(libraryError);
  }

  return (
    <div className="min-h-screen bg-[#000914] text-gray-100">
      {/* Main Content */}
      <DashboardLibrary books={libraryData} />
    </div>
  );
}
