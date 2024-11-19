"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addToCart = async (formData: FormData) => {
  const supabase = createClient();
  const { data: userData, error: userDataError } =
    await supabase.auth.getUser();

  if (userDataError) {
    console.error(userDataError);
  }

  if (userData.user === null) {
    redirect("/auth/login");
  }

  const product_id = formData.get("id");

  const { data, error } = await supabase
    .from("cart")
    .insert({ product_id, user_id: userData?.user?.id });

  if (error) {
    console.error(error);
  }

  revalidatePath(`/audiobook/${product_id}`);
};

export const deleteCartItem = async (cartId: string) => {
  const supabase = createClient();
  console.log(cartId);

  const { error } = await supabase.from("cart").delete().eq("id", cartId);

  if (error) {
    console.error(error);
  }
};
