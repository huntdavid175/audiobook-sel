// import { useState } from "react";

import LoginForm from "@/components/Forms/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  // const supabase = createClient();

  // const { data: user, error } = await supabase.auth.getUser();

  // if (error) {
  //   console.error(error);
  // }

  // if (user.user) {
  //   redirect("/");
  // }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Image Section */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615714901553-bfb2b5a27750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to AudioBook Store
            </h1>
            <p className="text-xl">
              Discover a world of stories at your fingertips
            </p>
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
