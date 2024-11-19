import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const { data: cart, error: cartError } = await supabase
    .from("cart")
    .select("*");

  if (cartError) {
    console.error(cartError);
  }

  if (cart) {
    const { data: price_ids, error: productsError } = await supabase
      .from("books")
      .select("stripe_price_id")
      .in(
        "id",
        cart.map((item) => item.product_id)
      );

    const { error: libraryError } = await supabase
      .from("library")
      .insert(cart.map((item) => ({ book_id: item.product_id })));

    if (productsError) {
      console.error(productsError);
    }

    if (libraryError) {
      console.log(libraryError);
    }

    if (price_ids) {
      const lineItems = price_ids.map((item) => {
        return {
          price: item.stripe_price_id,
          quantity: 1,
        };
      });
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: lineItems,
          mode: "payment",
          success_url: `${req.nextUrl.origin}/purchase-success?success=true`,
          cancel_url: `${req.nextUrl.origin}/?canceled=true`,
        });

        // Redirect to Stripe's checkout session
        return NextResponse.redirect(session.url!, { status: 303 });
      } catch (err: any) {
        // If an error occurs, return an error response
        return new NextResponse(err.message, { status: err.statusCode || 500 });
      }
    }
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { Allow: "POST" },
  });
}
