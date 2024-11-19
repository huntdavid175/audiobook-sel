import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PurchaseSuccessProps {
  bookTitle: string;
  bookCover: string;
  authorName: string;
}

export default function PurchaseSuccess({
  bookTitle,
  bookCover,
  authorName,
}: PurchaseSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-white mb-4">
          Purchase Successful!
        </h1>
        <p className="text-gray-300 mb-6">
          Thank you for your purchase. Your audiobook is now available in your
          library.
        </p>
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-4">
            <Image
              src={bookCover}
              alt={`${bookTitle} cover`}
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="text-left">
              <h2 className="text-lg font-semibold text-white">{bookTitle}</h2>
              <p className="text-sm text-gray-400">by {authorName}</p>
            </div>
          </div>
        </div>
        <Link href="/dashboard">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Go to My Library
          </Button>
        </Link>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Having trouble?{" "}
          <Link href="/contact" className="text-orange-400 hover:underline">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}
