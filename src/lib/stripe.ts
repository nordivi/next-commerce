import Stripe from "stripe";

export const stripe = new Stripe('Bearer' &&' '&& process.env.STRIPE_SECRET_KEY!);