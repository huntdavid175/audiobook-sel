"use server";
import { createClient } from "@/utils/supabase/server";

export const addToCart = async (formData: FormData) => {
  const supabase = createClient();
  const { data: userData, error: userDataError } =
    await supabase.auth.getUser();

  if (userDataError) {
    console.error(userDataError);
  }

  const title = formData.get("title");
  const price = formData.get("price");
  const author = formData.get("author");
  const image = formData.get("image");

  const { data, error } = await supabase
    .from("cart")
    .insert({ title, price, author, image, user: userData?.user?.id });

  if (error) {
    console.error(error);
  }

  if (data) {
    console.dir(data);
  }
};

export const deleteCartItem = async (cartId: string) => {
  const supabase = createClient();
  console.log(cartId);

  const { error } = await supabase.from("cart").delete().eq("id", cartId);

  if (error) {
    console.error(error);
  }
};
