"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

// export const loadProductsToStripe = async () => {
//   const supabase = createClient();
//   const { data: products, error } = await supabase.from("books").select("*");

//   if (error) {
//     console.log(error);
//     return;
//   }

//   if (products) {
//     for (const product of products) {
//       try {
//         // Create Stripe product
//         const stripeProduct = await stripe.products.create({
//           name: product.title,
//           description: product.description,
//           images: [product.image],
//           active: true,
//           id: product.id, // Custom product ID from your database
//         });
//         console.log(`Stripe Product Created: ${stripeProduct.id}`);

//         // Create Stripe price
//         const stripePrice = await stripe.prices.create({
//           product: stripeProduct.id,
//           unit_amount: product.price * 100, // Price in cents
//           currency: "cad",
//         });
//         console.log(`Stripe Price Created: ${stripePrice.id}`);

//         // Update your database with the Stripe price_id
//         const { error: updateError } = await supabase
//           .from("books")
//           .update({ stripe_price_id: stripePrice.id })
//           .eq("id", product.id);

//         if (updateError) {
//           console.error(
//             `Error updating price_id for product ${product.title}:`,
//             updateError
//           );
//         } else {
//           console.log(`Updated product ${product.title} with Stripe price_id.`);
//         }
//       } catch (error) {
//         console.error(
//           `Error creating product or price for ${product.title}:`,
//           error
//         );
//       }
//     }
//   }
// };
