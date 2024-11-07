import { Button } from "@/components/ui/button";
import { BookOpen, Home, Search } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  type = "no-book",
}: {
  type?: "no-book" | "not-found";
}) {
  const content = {
    "no-book": {
      title: "Book Not Found",
      description:
        "We couldn&apos;t find any book matching your search. Try adjusting your filters or search terms.",
      icon: Search,
      action: "Try Another Search",
      actionLink: "/search",
    },
    "not-found": {
      title: "Page Not Found",
      description:
        "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
      icon: BookOpen,
      action: "Go to Homepage",
      actionLink: "/",
    },
  };

  const { title, description, icon: Icon } = content[type];

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="bg-violet-100 rounded-full p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Icon className="w-8 h-8 text-violet-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button asChild>
            <Link href={actionLink}>{action}</Link>
          </Button> */}
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Need help?{" "}
          <Link href="/contact" className="text-violet-500 hover:underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}
