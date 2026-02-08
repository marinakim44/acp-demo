import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

export default async function CheckoutReturn({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <p>Missing checkout session.</p>;
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);

  if (session.payment_status === "paid") {
    return (
      <div className="max-w-xl mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold mb-5">Payment successful</h1>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center mt-20">
      <h1 className="text-3xl font-bold mb-5">Payment not completed</h1>
      <p>You can try again.</p>
    </div>
  );
}
