import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";

export default function SignupConfirmationPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent you a confirmation link
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We&apos;ve sent an email to the address you provided. Please click
            the link in that email to confirm your account.
          </p>
          <p className="text-sm text-muted-foreground">
            If you don&apos;t see the email, check your spam folder or try
            resending the confirmation email.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full" variant="outline">
            Resend confirmation email
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            <Link
              href="/login"
              className="hover:underline inline-flex items-center"
            >
              Back to login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
