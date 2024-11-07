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

  const { data, error } = await supabase
    .from("cart")
    .insert({ title, price, user: userData?.user?.id });

  if (error) {
    console.error(error);
  }

  if (data) {
    console.dir(data);
  }
};
