"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { Loader } from "lucide-react";

import Link from "next/link";

import { signup } from "@/app/auth/actions";

const FormButton = ({ terms }: { terms: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full d" disabled={pending || !terms}>
      {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
      Create account
    </Button>
  );
};

const SignupForm = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
    console.log("Google signup initiated");
  };
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Start your 14-day free trial, no credit card required
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignup}
        >
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign up with Google
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

        <form action={signup} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <FormButton terms={agreeTerms} />
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
