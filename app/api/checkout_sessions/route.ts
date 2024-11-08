import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1QItBlDkPExXjtPNEOuqV9KH",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?canceled=true`,
    });

    // Redirect to Stripe's checkout session
    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (err: any) {
    // If an error occurs, return an error response
    return new NextResponse(err.message, { status: err.statusCode || 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { Allow: "POST" },
  });
}
