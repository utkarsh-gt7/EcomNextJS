import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string
);

// Handle POST requests
export async function POST(req: Request) {
  try {
    // Parse the request body (it's a readable stream now)
    const body = await req.json();

    // Stripe session parameters
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1Q7Z2pRo3dg4AG732yxkmF14' },
      ],
      line_items: body.map((item: any) => {
        const img = item.image[0].asset._ref;
        const newImage = img
          .replace('image-', 'https://cdn.sanity.io/images/t8watuod/production/')
          .replace('-webp', '.webp');

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/`,
    };

    // Create Checkout Session from body params
    const session = await stripe.checkout.sessions.create(params);

    // Return the session as a JSON response
    return NextResponse.json(session);
  } catch (err: any) {
    // Handle error response
    return new NextResponse(JSON.stringify({ message: err.message }), {
      status: err.statusCode || 500,
    });
  }
}

// Method not allowed response for other HTTP methods
export function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}