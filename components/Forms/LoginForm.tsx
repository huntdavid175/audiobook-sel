"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

import { login } from "@/app/auth/actions";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full " disabled={pending}>
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      Sign in
    </Button>
  );
};

const LoginForm = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login initiated");
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sign in to your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Or start your 14-day free trial
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <form action={login} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-muted-foreground"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <FormButton />
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Not a member?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-primary hover:underline"
          >
            Start a 14 day free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
